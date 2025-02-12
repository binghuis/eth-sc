import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("Box", (m) => {
  const apollo = m.contract("AdminBox", [])

  return { apollo }
})
