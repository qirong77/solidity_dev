// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage {

    uint256 number;
    /** 可见性
     public:完全可见
     private: 本合约可见
     internal: 继承合约可见
     */
    function store(uint256 num) public {
        number = num;
    }

    /** 交易属性
    view：合约的读操作
    pure：与合约状态无关的函数
    默认是写操作，全网广播，共识确认。
    */
    function retrieve() public view returns (uint256){
        return number;
    }
}
 