// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
import {Token} from "./token.sol";

contract TokenFactory {
    uint256 fee;
    address factoryOwner;
    mapping(address => Token) createdTokens;
    address[] public createdTokenAddresses;
    event ELogMessage(string message, uint256 value);

    constructor(uint256 feeWhenCreatOneToken) {
        fee = feeWhenCreatOneToken;
        factoryOwner = msg.sender;
    }

    function createToken(string memory tokenName) external payable {
        require(msg.value > fee, "you need pay more");
        Token token = new Token(msg.sender, tokenName, tokenName, 1000);
        createdTokens[address(token)] = token;
        createdTokenAddresses.push(address(token));
    }

    function getCreatedToken()
        external
        view
        returns (address[] memory, string[] memory)
    {
        address[] memory tokenAddresses = new address[](
            createdTokenAddresses.length
        );
        string[] memory tokenNames = new string[](createdTokenAddresses.length);

        for (uint256 i = 0; i < createdTokenAddresses.length; i++) {
            address tokenAddress = createdTokenAddresses[i];
            Token token = createdTokens[tokenAddress];
            tokenAddresses[i] = tokenAddress;
            tokenNames[i] = token.name();
        }

        return (tokenAddresses, tokenNames);
    }

    function buy(address tokenAddress, uint256 amout) external payable {
        require(msg.value > 10, "at least pay 10 gwai");
        Token targetToken = Token(tokenAddress);
        uint256 cost = targetToken.getPrice() * amout;
        targetToken.updateRaised(cost);
        emit ELogMessage("cost info", cost);
        targetToken.transfer(msg.sender, amout);
    }
}
