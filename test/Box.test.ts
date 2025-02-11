import { expect } from "chai"
import { ethers } from "hardhat"
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers"

describe("Box", function () {
  async function deployFixture() {
    const Box = await ethers.getContractFactory("AdminBox")
    const box = await Box.deploy()
    return { box }
  }

  // Test case
  it("retrieve returns a value previously stored", async function () {
    const { box } = await loadFixture(deployFixture)
    await box.store(42)

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal("42")
  })
})
