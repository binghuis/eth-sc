import "@nomicfoundation/hardhat-ethers"
import "@nomicfoundation/hardhat-ignition"
import "@nomicfoundation/hardhat-verify"
import "@openzeppelin/hardhat-upgrades"
import "dotenv/config"
import { type HardhatUserConfig } from "hardhat/config"
import "solidity-coverage"

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
