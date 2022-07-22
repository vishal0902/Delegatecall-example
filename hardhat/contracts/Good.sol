//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Good {
    address public helper;
    address public owner;
    uint public num;

    constructor(address _helper, address _owner) {
        helper = _helper;
        owner = _owner;
    }

    function setNum(uint _num) public {
        helper.delegatecall(abi.encodeWithSignature("setNum(uint256)", _num));
    }
}