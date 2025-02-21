// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;

contract ArrayDev {
    uint[] private  _arrayNotFixed; 
    function createFiexedArrayByNew() external pure returns (uint256[] memory) {
        uint256[] memory array = new uint256[](1);
        array[0] = 1;
        // 固定长度数组，如果继续赋值会报错
        // array[1] = 100;
        return array;
    }

    function createFixedBytesArrayByNew() external pure returns (bytes memory) {
        bytes memory bytesArray = new bytes(1);
        return bytesArray;
    }

    function createArrayNotFixed() external returns (uint[] memory) {
        _arrayNotFixed.push(0); // 向动态数组中添加元素
        return _arrayNotFixed;
    }
}
