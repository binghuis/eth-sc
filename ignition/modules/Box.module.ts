import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("Box", (m) => {
  const rocketName = m.getParameter("rocketName")
  const apollo = m.contract("Rocket", [rocketName])
  m.call(apollo, "launch", [])

  return { apollo }
})
