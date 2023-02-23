import "~~/styles/globals.css";

import type { AppProps } from "next/app";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Toaster } from "react-hot-toast";

import "@rainbow-me/rainbowkit/styles.css";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { BlockieAvatar } from "~~/components/scaffold-eth";

import Header from "~~/components/shared/Navbar/Header";

import { useEffect } from "react";
import { useAppStore } from "~~/services/store/store";
import { useEthPrice } from "~~/hooks/scaffold-eth";
import Web3Provider from "~~/components/Web3Provider";
import NextNProgress from "nextjs-progressbar";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useEthPrice();
  const setEthPrice = useAppStore(state => state.setEthPrice);

  useEffect(() => {
    if (price > 0) {
      setEthPrice(price);
    }
  }, [setEthPrice, price]);

  return (
    <WagmiConfig client={wagmiClient}>
      <NextNProgress color="#513205" />
      {/*<RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>*/}
      <Web3Provider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">
            <Component {...pageProps} />
          </main>
        </div>

        <Toaster />
      </Web3Provider>
      {/*</RainbowKitProvider>*/}
    </WagmiConfig>
  );
};

export default ScaffoldEthApp;
