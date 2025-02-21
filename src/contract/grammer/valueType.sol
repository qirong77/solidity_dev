// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
contract ContrastOfValueType {
    address public _address = 0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71;
    address payable public _address1 = payable(_address); 
    uint256 public balance = _address1.balance; 
}
