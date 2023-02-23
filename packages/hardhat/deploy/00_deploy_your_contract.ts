import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "PotatoPotata" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("PotatoPotata", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const PotatoPotata = await hre.ethers.getContract('PotatoPotata', deployer);

  for (let i = 0; i < 20; i++) {
    await PotatoPotata.registerCamapaign(
      `TEST ${i}`,
      `bafybeiefmulgcdxqv7clqtk6xqjdaurtpihe6r2g4kduxri64tirfwuafa`,
      'bafybeiawsafpk4vrslu7syxvtakyg7visgoqo23pcvd3ta7odgj4u2xvey'
    );
  }

  const campaignAddrs = await PotatoPotata.getCampaignAddress(deployer);

  console.log(`campaings for ${deployer}`, campaignAddrs);

  const Campaign = await hre.ethers.getContractAt('Campaign', campaignAddrs[0] as string);

  const details = await Campaign.getCampaignDetails();

  console.log(details);

  const campaigns = await PotatoPotata.getCampaigns(0, false);

  console.log('campaigns', campaigns);
};

export default deployContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContract.tags = ["PotatoPotata"];
