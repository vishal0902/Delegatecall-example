const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

describe("Attack", function() {
    it("Should change the good contract's owner address to attack contract address", async function(){
        
        const [owner, addr1, addr2] = await ethers.getSigners();
        
        //Deploy helper contract
        const helperContractFactory = await ethers.getContractFactory("Helper");
        const helper = await helperContractFactory.deploy();
        await helper.deployed();

        //Deploy good contract
        const goodContractFactory = await ethers.getContractFactory("Good");
        const good = await goodContractFactory.deploy(helper.address, owner.address);
        await good.deployed();

        //Deploy attack contract
        const attackContractFactory = await ethers.getContractFactory("Attack");
        const attack = await attackContractFactory.deploy(good.address);

        //Execute the attack
        const tx = await attack.attack();

        const ownerAddress = await good.owner();
        expect(ownerAddress).to.equal(attack.address);
    })
})