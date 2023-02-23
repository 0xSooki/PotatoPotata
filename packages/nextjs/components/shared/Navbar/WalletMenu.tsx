import { useAuth } from '@arcana/auth-react';
import Image from 'next/image';
import Description from 'public/assets/description.svg';
import Logout from 'public/assets/logout.svg';
import Speaker from 'public/assets/speaker.svg';

const WalletMenu = (): JSX.Element => {
  const auth = useAuth();

  const handleLogout = (): void => {
    auth.logout();
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-base-100 shadow-xl w-56 p-2 rounded-box font-signika font-bold">
      <li>
        <a className="hover:bg-primary-50 text-primary">
          <Image src={Speaker} width={24} height={24} alt="Speaker" />
          My Campaigns
        </a>
      </li>
      <li>
        <a className="hover:bg-primary-50 text-primary">
          <Image src={Description} width={24} height={24} alt="Speaker" />
          My Proposals
        </a>
      </li>
      <li>
        <a className="hover:bg-primary-50 text-primary" onClick={handleLogout}>
          <Image src={Logout} width={24} height={24} alt="Logout" />
          Disconnect
        </a>
      </li>
    </ul>
  );
};

export default WalletMenu;
