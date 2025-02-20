// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address public owner;
    address public creator;
    uint raised = 0;
    uint256 price = 2;
    event ELogMessage(string message);
    constructor(
        address _creator,
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) ERC20(_name, _symbol) {
        owner = msg.sender; // 将合约的部署者（msg.sender）设置为合约的所有者
        creator = _creator;
        _mint(msg.sender, _totalSupply); // 调用ERC20的 _mint 函数，初始分配代币
    }
    function getMsgSenderAddress() external view returns (address) {
        return msg.sender;
    }

    function getMsgSenderAddressWhenCreated() external view returns (address) {
        return owner;
    }

    function getCurrentContrastAddress() external view returns (address) {
        return address(this);
    }
    function getCreator() external view returns (address) {
        return creator;
    }
    function getPrice() external view  returns (uint256)  {
        return price;
    }
    function updateRaised(uint salePrice)  public{
        raised += salePrice;
    }
    function clearRaised() public{
        raised = 0;
    }
}
