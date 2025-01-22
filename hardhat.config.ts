import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {}
  }
}

export default config
