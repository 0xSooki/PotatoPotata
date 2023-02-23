import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "Campaign" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Campaign", {
    from: deployer,
    log: true,
    autoMine: true,
    args: [      `TEST ${100}`,
    `bafybeiefmulgcdxqv7clqtk6xqjdaurtpihe6r2g4kduxri64tirfwuafa`,
    'bafybeiawsafpk4vrslu7syxvtakyg7visgoqo23pcvd3ta7odgj4u2xvey']
  });

};

export default deployContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContract.tags = ["Campaign"];
