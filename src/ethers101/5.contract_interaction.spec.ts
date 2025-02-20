import { ethers } from "ethers";
import { describe, it } from "vitest";
import { accountMain, devAcccountA, devAcccountB, NETWORD_URL } from "../private";
import { Contract } from "ethers";

describe("contrasct interaction", () => {
    it("get other token, eg: USDT", async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_MAIN);
        // https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code
        const usdtContractABI = `[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]`;
        const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
        const contract = new ethers.Contract(usdtContractAddress, usdtContractABI, provider);
        const balance = await contract.balances(accountMain.address);
        console.log(balance);
    });
    /* 
    WETH (Wrapped ETH) is a wrapped version of ETH. It wraps native Ethereum tokens using a smart contract to conform to the ERC20 standard
    */
    it("writable contract - convert WETH to eth", async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const signer = new ethers.Wallet(devAcccountA.privateKey, provider);
        // WETH ABI
        const abiWETH = [
            "function balanceOf(address) public view returns(uint)",
            "function deposit() public payable",
            "function transfer(address, uint) public returns (bool)",
            "function withdraw(uint) public",
        ];
        // WETH contract address (Sepolia Test Network)
        const addressWETH = "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa"; // weth contract address
        const writableContract = new Contract(addressWETH, abiWETH, signer);
        const balanceWETH = await writableContract.balanceOf(devAcccountA.address);
        const balanceOfEth = await provider.getBalance(devAcccountA.address);
        console.log(`WETH balance before deposit: ${ethers.formatEther(balanceWETH)}`);
        console.log(`ETH balance before deposit: ${ethers.formatEther(balanceOfEth)}`);
        const tx = await writableContract.deposit({ value: ethers.parseEther("0.001") });
        await tx.wait();
        console.log(`Transaction details:`)
        console.log(tx)
        const balanceWETH_deposit = await writableContract.balanceOf(devAcccountA.address);
        console.log(`WETH balance after deposit: ${ethers.formatEther(balanceWETH_deposit)}`);
        const balanceOfEthAfterDeposit = await provider.getBalance(devAcccountA.address);
        console.log(`ETH balance after deposit: ${ethers.formatEther(balanceOfEthAfterDeposit)}`);
    });
    it('transfer weth',async () => {
        const provider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const signer = new ethers.Wallet(devAcccountA.privateKey, provider);
        // WETH ABI
        const abiWETH = [
            "function balanceOf(address) public view returns(uint)",
            "function transfer(address, uint) public returns (bool)",
        ];
        // WETH contract address (Sepolia Test Network)
        const addressWETH = "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa"; // weth contract address
        const writableContract = new Contract(addressWETH, abiWETH, signer);
        const balanceWETH = await writableContract.balanceOf(devAcccountA.address);
        console.log(`WETH balance before transfer: ${ethers.formatEther(balanceWETH)}`);
        const tx = await writableContract.transfer(devAcccountB.address,ethers.parseEther("0.001"))
        await tx.wait()
        console.log(`Transaction details:`)
        console.log(tx)
        const balanceWETH_transfer = await writableContract.balanceOf(devAcccountA.address);
        console.log(`WETH balance after transfer: ${ethers.formatEther(balanceWETH_transfer)}`);
    })
});
