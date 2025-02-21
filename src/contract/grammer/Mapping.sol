// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract MappingDev {
    mapping (string => int) private _mapping;
    string[] private _mappingKeys;
    function mappingDevAdd(string memory mappingKey,int mappingValue) external {
        require(bytes(mappingKey).length >= 1, "mappingkey is empty");
        _mapping[mappingKey] = mappingValue;
        _mappingKeys.push(mappingKey);
    }
    function mappingDevRemove(string memory mappingKey,int mappingValue) external {

    }
    function mappingDevGetAll() external {

    }
}