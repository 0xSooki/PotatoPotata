import Link from "next/link";

import ConnectButton from "./ConnectButton";

import { MENU_LIST } from "~~/constants";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="navbar min-h-0 bg-base-100">
        <div className="flex-1">
          <Link className="normal-case font-bold font-signika text-primary text-3xl" href="/">
            Potato Potata
          </Link>
        </div>
        <ul className="flex font-signika font-bold text-primary items-center flex-row gap-6">
          {MENU_LIST.map(item => {
            return (
              <li key={item.name}>
                <Link className="btn btn-sm btn-ghost normal-case text-base" href={item.href}>
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li>
            <ConnectButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
