import { ConnectButton as RConnectButton } from '@rainbow-me/rainbowkit';
import { ReactElement } from 'react';

import Button from '../Button';

import WalletMenu from './WalletMenu';

const ConnectButton = (): JSX.Element => {
  return (
    <RConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }): ReactElement => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}>
            {((): JSX.Element => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} size="sm" className="normal-case text-base" type="secondary">
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button size="sm" onClick={openChainModal} className="normal-case text-base" type="secondary">
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className="flex gap-3">
                  <div className="dropdown dropdown-end font-signika">
                    <div tabIndex={0} className="btn btn-secondary btn-sm text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-wallet mr-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                      </svg>
                      <label className="cursor-pointer normal-case">{account.displayName}</label>
                    </div>
                    <WalletMenu />
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RConnectButton.Custom>
  );
};

export default ConnectButton;
