import { task } from "hardhat/config" // 引入 task API
import { ethers } from "hardhat" // 引入 ethers.js
import { Contract } from "ethers" // 引入合约类型

task("deploy-lock", "Deploys the Lock contract")
  .addParam("symbol", "The symbol for the lock") // 添加任务参数
  .setAction(async (taskArgs) => {
    const { symbol } = taskArgs // 获取参数
    const [deployer] = await ethers.getSigners() // 获取默认账户

    console.log("Deploying contract with symbol:", symbol)
    console.log("Deploying contracts with the account:", deployer.address)

    // 获取 Lock 合约工厂
    const Lock = await ethers.getContractFactory("Lock")

    // 部署合约
    const lock: Contract = await Lock.deploy(symbol)

    console.log("Lock contract deployed to:", lock.address)
  })
