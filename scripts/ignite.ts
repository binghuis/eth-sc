import { ethers, upgrades } from "hardhat"

async function main() {
  const AdminBox = await ethers.getContractFactory("Box")
  console.log("Deploying AdminBox...")
  const adminBox = await upgrades.deployProxy(AdminBox, ["0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E"], { initializer: "initialize" })
  await adminBox.waitForDeployment()
  console.log("AdminBox deployed to:", await adminBox.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
