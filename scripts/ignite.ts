import hre from 'hardhat'
import ApolloModule from '../ignition/modules/Apollo'

async function getRocketNameFromAPI() {
  // Mock function to simulate an asynchronous API call
  return 'Saturn VI'
}

async function main() {
  const rocketName = await getRocketNameFromAPI()

  const { apollo } = await hre.ignition.deploy(ApolloModule, {
    parameters: { Apollo: { rocketName } }
  })

  console.log(`Apollo deployed to: ${apollo.address}`)
}

main().catch(console.error)
