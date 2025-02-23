import hardhat from "hardhat";
import { expect } from "vitest";

async function deployContract() {
  const [owner, otherAccount] = await hardhat.ethers.getSigners();
  const CounterContract = await hardhat.ethers.getContractFactory("Counter");
  const instance = await CounterContract.deploy();
  const address = await instance.getAddress();
  console.log(address);
  return instance;
}
describe("Counter.sol", () => {
  it("initial value to be zero", async () => {
    const contract = await deployContract();
    const value = await contract.get();
    expect(value).to.equal(0); // 使用断言验证初始值是否为0
  });
  it("add 1 to counter should equal 1", async () => {
    const contract = await deployContract();
    await contract.count(); // 调用count方法增加计数
    const value = await contract.get();
    expect(value).to.equal(1); // 验证计数是否为1
  });
});
