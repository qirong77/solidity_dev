// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
/* 数据类型
- 值类型 value type
    - 基本数据类型:整数、枚举、布尔
    - Adress、contract
    - Fixed byte array 定长字节数组
- 引用类型 reference type
 */
contract Storage {
    uint256 number;
    function store(uint256 num) public {
        number = num;
    }
    function retrieve() public view returns (uint256) {
        return number;
    }
    // enum Color { Red, Green }
    // function enumTest() public returns(Color){
    //     Color c1 = Color.Red;
    //     return c1;
    // }
    function testAddress() public view returns(address){
        address caller = msg.sender;
        address currentContract = address(this);
        return address(this);
    }
    function testContractType() public view returns(contract){
        Storage c1 = this;
        return c1;
    }
}
/* 引用类型
1. 数组 
2. struct => 对象
3. mapping => map
 */
contract ReferenceType {
    uint256 number;
    function store(uint256 num) public {
        number = num;
    }
    function retrieve() public view returns (uint256) {
            return number;
    }
    function testArray() public view returns (uint256[] memory) {
        uint256[] arr = new uint256[](3);
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        return arr; 
        }
}