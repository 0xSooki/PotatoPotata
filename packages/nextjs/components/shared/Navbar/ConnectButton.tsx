import { useAuth } from '@arcana/auth-react';
import Image from 'next/image';
import Wallet from 'public/assets/wallet.svg';

import Button from '../Button';

import WalletMenu from './WalletMenu';

import { shortenAddress } from '~~/lib/shortenAddres';

const ConnectButton = (): JSX.Element => {
  const { loading, connect, user, isLoggedIn } = useAuth();

  const handleLogin = (): void => {
    connect()
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div>
      {((): JSX.Element => {
        if (loading || (isLoggedIn && !user?.address)) {
          return <Button onClick={(): void => {}}>Loading...</Button>;
        }

        if (isLoggedIn && user?.address) {
          return (
            <div className="dropdown dropdown-end font-signika">
              <div tabIndex={0} className="btn flex gap-2 btn-secondary btn-sm text-base">
                <Image src={Wallet} height={24} width={24} alt="Wallet" />
                <label className="cursor-pointer normal-case">{shortenAddress(user?.address)}</label>
              </div>
              <WalletMenu />
            </div>
          );
        }

        return <Button onClick={handleLogin}>Connect Wallet</Button>;
      })()}
    </div>
  );
};

// <RConnectButton.Custom>
//   {({initializeAuth, isLoggedIn, getAccounts, login, logout}): ReactElement => {
//     const ready = mounted && authenticationStatus !== 'loading';
//     const connected =
//       ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

//     return (
//       <div
//         {...(!ready && {
//           'aria-hidden': true,
//           style: {
//             opacity: 0,
//             pointerEvents: 'none',
//             userSelect: 'none',
//           },
//         })}>
//         {((): JSX.Element => {
//           if (!connected) {
//             return (
//               <Button onClick={openConnectModal} size="sm" className="normal-case text-base" type="secondary">
//                 Connect Wallet
//               </Button>
//             );
//           }

//           if (chain.unsupported) {
//             return (
//               <Button size="sm" onClick={openChainModal} className="normal-case text-base" type="secondary">
//                 Wrong network
//               </Button>
//             );
//           }

//           return (
{
  /* <div className="dropdown dropdown-end font-signika">
  <div tabIndex={0} className="btn flex gap-2 btn-secondary btn-sm text-base">
    <Image src={Wallet} height={24} width={24} alt="Wallet" />
    <label className="cursor-pointer normal-case">{account.displayName}</label>
  </div>
  <WalletMenu />
</div>; */
}
//           );
//         })()}
//       </div>
//     );
//   }}
// </RConnectButton.Custom>

export default ConnectButton;
