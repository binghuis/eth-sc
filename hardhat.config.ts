import { type HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-ethers"
import "@nomicfoundation/hardhat-verify"
import "@nomicfoundation/hardhat-ignition"
import "@openzeppelin/hardhat-upgrades"
import "solidity-coverage"
import "dotenv/config"

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? ""
const INFURA_API_KEY = process.env.INFURA_API_KEY ?? ""
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY ?? ""

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
}

export default config
