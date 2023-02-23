import { ethers } from "ethers";
import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { FC } from "react";

import hardhat from "~~/generated/hardhat_contracts.json";
import Footer from "~~/components/shared/Footer";
import getDescription from "~~/lib/getDescription";
import { shortenAddress } from "~~/lib/shortenAddres";

interface CampaignNextPageContext extends NextPageContext {
  params: {
    address: string;
  };
}

interface Props {
  props: {
    address: string;
    name: string;
    descriptionCID: string;
    imageCID: string;
    funds: string;
  };
}

interface Campaign {
  address: string;
  name: string;
  descriptionCID: string;
  imageCID: string;
  funds: string;
  totalArtists: string;
}

export const getStaticPaths = async (): Promise<{ paths: string[]; fallback: boolean }> => {
  const contracts = hardhat[31337][0].contracts;
  const provider = new ethers.providers.JsonRpcProvider();
  const potatoPotata = new ethers.Contract(contracts.PotatoPotata.address, contracts.PotatoPotata.abi, provider);

  const campaignAddrs = await potatoPotata.getCampaigns(0, true);

  const paths = campaignAddrs.map(addr => {
    return {
      params: { address: addr },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: CampaignNextPageContext): Promise<Props> => {
  const provider = new ethers.providers.JsonRpcProvider();
  const address = context.params.address;
  const contracts = hardhat[31337][0].contracts;

  const campaign = new ethers.Contract(address, contracts.Campaign.abi, provider);
  const details = (await campaign.getCampaignDetails()) as Campaign;

  const funds = await provider.getBalance(address);
  const description = await getDescription(details.descriptionCID);

  return {
    props: {
      name: details.name,
      imageCID: details.imageCID,
      descriptionCID: description,
      address,
      funds: ethers.utils.formatEther(funds),
    },
  };
};

const Campaigns: FC<Campaign> = ({ address, name, descriptionCID, imageCID, funds }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Potato Potata</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen font-signika justify-between">
        <div className="mb-auto">
          <div className="flex justify-center my-16 flex-col lg:mx-48 md:mx-36 mx-16">
            <div className="flex justify-center">
              <Image
                className="rounded-md"
                height={366}
                width={900}
                src={`https://w3s.link/ipfs/${imageCID}/image.jpg`}
              />
            </div>
            <div className="flex mt-6">
              <div className="flex flex-1 flex-col">
                <h1 className="text-4xl font-bold text-primary">{name}</h1>
                <span className="text-primary-200 text-md">{shortenAddress(address)}</span>
              </div>
              <div className="flex flex-col justify-end">
                <h1 className="text-4xl font-bold text-primary self-end">{funds} ETH</h1>
                <span className="text-primary-200 text-md self-end">Overall Funded</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="font-bold text-primary text-xl">Description</h2>
              <p className="text-sm text-secondary-800">{descriptionCID}</p>
            </div>
            <div>
              <h2 className="font-bold text-primary mt-6 text-xl">Campaign Collections</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Campaigns;
