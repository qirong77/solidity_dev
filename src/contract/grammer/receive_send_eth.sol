// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
contract ReceiveSendEth {
    address owner;
    constructor() {
        owner = msg.sender;
    }
    receive() external payable {
        require(msg.value > 0, "required error: Not eth send");
    }
    fallback() external payable {
        if (msg.value <= 0) {
            revert("unkndow function call");
        }
    }
    function receivePayment() external payable {
        require(msg.value > 0, "No ETH sent");
    }
    function withdraw() external {
        require(msg.sender == owner, "Not the owner");
        // 向 owner 这个地址转入当前合约的所有余额
        /* 
transfer 是一个内置的方法，用于从合约的余额中发送以太币到指定的地址。它的语法是：
payableAddress.transfer(amount);
payableAddress 是接收方的地址（必须是 payable 类型）。
amount 是要发送的以太币数量。
         */
        payable(owner).transfer(address(this).balance);
    }
}
