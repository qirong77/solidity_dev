// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import { Minter } from "./Minter.sol";
contract ERC20 is Minter {
    mapping (address => uint) _balance;
    constructor() {

    }
    function transfer(address to, uint amout) external {
        require(to != address(0),"error");
        _balance[msg.sender] -= amout;
        _balance[to] += amout;
    }
}