import { ethers } from "ethers";
import { describe, it } from "vitest";
/* 
In Ethereum, many calculations require values that exceed the safe range of JavaScript integers (the maximum safe integer in JavaScript is 9007199254740991). Therefore, ethers.js uses the BigInt class native to JavaScript ES2020 to securely perform mathematical operations on numbers of any magnitude. 
In ethers.js, most operations that need to return a value will return as BigInt, and parameters that accept values will also accept them.
*/
describe("bigint and unit conversion", () => {
    it("creating a bigint", async () => {
        const oneGwei = ethers.getBigInt("1000000000"); // Generate from decimal string
        console.log(oneGwei)
        console.log(ethers.getBigInt("0x3b9aca00")); // Generate from hexadecimal string
        console.log(ethers.getBigInt(1000000000)); // Generate from number
        // ethers.getBigInt(Number.MAX_SAFE_INTEGER);
        console.log("Maximum safe integer in JavaScript:", Number.MAX_SAFE_INTEGER)
        //NB: you can even generate a BigNumber beyond the maximum safe integer if you run the code in a Node.js environment with the `harmony` or `harmony-BigInt` flag enabled. The use of the native BigInt type allows for handling larger integers without encountering the expected in other environment error.
        // Generate from value exceeding Javascript's maximum safe integer
        console.log(ethers.getBigInt(9007199254740991));       
    });
    it('bigint operation',async () => {
        const oneGwei = ethers.getBigInt("1000000000");
        const twoGwei = ethers.getBigInt("2000000000");
        const sum = oneGwei + twoGwei;
        console.log(sum);
    })
    // large => small
    it('formatUnits(variable, unit)',()=>{
        const oneGwei = ethers.getBigInt("1000000000");
        console.log(ethers.formatUnits(oneGwei, "gwei"));
        console.log(ethers.formatUnits(oneGwei, "ether"));
    })
    it('parseUints(variable, unit)',()=>{
        const oneGwei = ethers.getBigInt("1000000000");
        console.log(ethers.parseUnits("1", "gwei"));
        console.log(ethers.parseUnits("1", "ether"));
    })
});