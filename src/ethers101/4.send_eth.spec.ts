import { ethers, formatUnits, parseEther } from "ethers";
import { describe, expect, it } from "vitest";
import { devAcccountA, devAcccountB, NETWORD_URL } from "../private";
import { formatEther } from "ethers";

describe("transactions", () => {
    it("transfer eth", async () => {
        const sepoliaProvider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const wallet = new ethers.Wallet(devAcccountA.privateKey, sepoliaProvider);
        const balanceA = await sepoliaProvider.getBalance(devAcccountA.address);
        const balanceB = await sepoliaProvider.getBalance(devAcccountB.address);
        console.log(balanceA, balanceB);
        const tx = await wallet.sendTransaction({
            to: devAcccountB.address,
            value: parseEther("0.001"),
        });
        // wait until the tranaction finish
        await tx.wait();
        const balanceAAfterTransaction = await sepoliaProvider.getBalance(devAcccountA.address);
        const balanceBAfterTransaction = await sepoliaProvider.getBalance(devAcccountB.address);
        console.log(balanceAAfterTransaction, balanceBAfterTransaction);
        expect(balanceAAfterTransaction < balanceA);
    });
    it("get eth transfer fee", async () => {
        const sepoliaProvider = new ethers.JsonRpcProvider(NETWORD_URL.ETH_SEPOLIA);
        const wallet = new ethers.Wallet(devAcccountA.privateKey, sepoliaProvider);
        const pt = await wallet.populateTransaction({
            to: devAcccountB.address,
            value: parseEther("0.001"),
        });
        // in eth , bigInt is represent for wei, 1 eth = 10^18 wei
        const gasLimit = await sepoliaProvider.estimateGas(pt);
        const feeData = await sepoliaProvider.getFeeData();
        console.log(`Current gas price: ${ethers.formatUnits(feeData.gasPrice!, "gwei")} gwei`);
        const gasFeeInEther = formatUnits(feeData.gasPrice! * gasLimit, "ether"); // 转换为 ETH 单位
        console.log(`Estimated Total Gas Fee: ${gasFeeInEther} ETH`);
    });
});
