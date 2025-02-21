// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringDev {
    function getStringLength(string memory s) external pure returns (uint256) {
        return bytes(s).length;
    }
    // not a easy things
    // function stringAndIntCombine() external  returns (string) {
    //     return  "this is " + 10;
    // }
}
