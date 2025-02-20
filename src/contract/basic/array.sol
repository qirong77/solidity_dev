// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;
contract DevArray {
    int[] array0;
    function fixedSizeArray() external returns (int[] memory, bytes memory) {
        int[] memory fArray1 = new int[](5);
        fArray1[0] = 0;
        fArray1[1] = 1;
        bytes memory fArray2 = new bytes(9);
        array0.push(fArray1[0]);
        array0.pop();
        return (fArray1, fArray2);
    }
}
