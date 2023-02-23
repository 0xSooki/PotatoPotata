import Head from "next/head";

import Campaigns from "~~/components/shared/Campaigns";
import Footer from "~~/components/shared/Footer";

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Campaigns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <div className="mb-auto">
          <div className="mt-16 flex w-full flex-col gap-12 items-center justify-center">
            <h1 className="font-signika font-bold text-5xl text-primary">Active Campaigns</h1>
            <Campaigns />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
