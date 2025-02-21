// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Minter {
    mapping(address => bool) private _minter;
    address[] private _minterAddress;

    constructor() {
        minterAdd(msg.sender);
    }

    // public  = internal + external
    function minterAdd(address md) public returns (bool) {
        _minter[md] = true;
        _minterAddress.push(md);
        return true;
    }

    function minterRemove(address md) external {
        _minter[md] = false;
    }

    function minterGetAll() external view returns (address[] memory) {
        address[] memory finalArray = new address[](_minterAddress.length);
        for (uint256 i = 0; i < _minterAddress.length; i++) {
            address currentAddress = _minterAddress[i];
            if (_minter[currentAddress]) {
                finalArray[i] = currentAddress;
            }
        }
        return finalArray;
    }
}
