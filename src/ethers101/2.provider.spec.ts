import { describe, it } from "vitest";
import { NETWORD_URL } from "../private";
import { ethers } from "ethers";
/* 
The Provider class provides an abstraction for connecting to the Ethereum network and offers a concise and consistent interface for standard Ethereum node functionality. 
In ethers, the Provider class does not handle user private keys and can only read information from the blockchain, making it safer compared to web3.js.
The most commonly used provider in ethers is jsonRpcProvider, which allows users to connect to a specific node service provider.
*/
const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_MAIN);
describe("provider", () => {
    it("get block number", async () => {
        const blockNumber = await provider.getBlockNumber();
        console.log(blockNumber);
    });
    it("get transaction count", async () => {
        const transactionCount = await provider.getTransactionCount('vitalik.eth');
        console.log(transactionCount);
    });
    it('get fee data',async () => {
        const feeData = await provider.getFeeData();
        console.log(feeData)
    })
    it('get block',async () => {
        const block = await provider.getBlock(0);
        console.log(block)
    })
    /* 
    Use the getCode() function to retrieve the bytecode of a contract at a specific address. In the example below, 
    we use the contract address of WETH on the mainnet:
    */
    it('get code',async () => {
        const bytecode = await provider.getCode('0xc778417e063141139fce010982780140aa0cd5ab');
        console.log(bytecode);
    })
});
