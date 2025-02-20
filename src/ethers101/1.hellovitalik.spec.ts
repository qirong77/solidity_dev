/* 
# overview of ethersjs
ethers.js is a complete and compact open-source library for interacting with the Ethereum blockchain and its ecosystem. 
If you want to build a frontend for a Dapp or write a script to interact with Ethereum, you will need to use ethers.js.

Compared to the earlier library web3.js, ethers.js has the following advantages:

- More compact code: ethers.js is 210.2 kB, while web3.js is 590.6 kB.
- More secure: Web3.js assumes that users will deploy a local Ethereum node, and the private keys and network connectivity are managed by this node (which is not actually the case); in ethers.js, the Provider class manages network connectivity, while the Wallet class manages keys, making it more secure and flexible.
Native support for ENS.
*/

import { describe, it } from "vitest";
import { NETWORD_URL } from "../private";
import { ethers } from "ethers";

describe('hello vitalik', () => {
    it('get balance of vitalik',async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_MAIN);
        const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
        // const addressOfENS = 'vitalik.eth'
        const balance = await provider.getBalance(address);
        /* 
        The Ethereum balance we obtained from the chain is in wei, where 1 ETH = 10^18 wei.
        Before printing it to the console, we need to convert the units. ethers provides a utility function called formatEther, which we can use to convert wei to ETH.
        */
        console.log(`\nETH Balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`);
    })
})