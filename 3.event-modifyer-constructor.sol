// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    uint256 number;
    // 事件用来记录一些重要的信息，例如触发交易
    // 可以在执行之后的 log 中查看
    event Updated(uint256 oldValue, uint256 newValue);
    /* 修饰器
    对函数的输入输出条件进行约束
     */
    modifier limitUpdateNumber(uint256 limitNum) {
        require(limitNum > number, "error info");
        _;
    }
    function store(uint256 num) public {
        number = num;
    }
    function retrieve() public view returns (uint256) {
        return number;
    }
    function update(uint256 num) public {
        emit Updated(number, num);
        number = num;
    }
    /* external关键字
     */
    function updateWithLimit(uint256 num) external limitUpdateNumber(num) {
        emit Updated(number, num);
        number = num;
    }
    /* 构造器
    默认是 public
    执行的时机是部署到区块链产生合约实例的时候
     */
    constructor() {
        number = 0;
    }
}
