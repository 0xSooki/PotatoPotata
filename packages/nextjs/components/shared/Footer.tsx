import Image from "next/image";
import Link from "next/link";

import Github from "/public/assets/github.svg";
import Potato from "/public/assets/potato.svg";
import Twitter from "/public/assets/twitter.svg";

import { MENU_LIST } from "~~/constants";

const Footer = (): JSX.Element => {
  return (
    <div className="min-h-0">
      <footer className="footer font-signika md:p-10 p-8 justify-center md:justify-between bg-primary text-secondary">
        <div className="flex gap-4 md:justify-start md:items-start justify-center items-center flex-col">
          <div className="text-4xl flex drop-shadow-2xl relative text-white font-bold">
            <Image className="transform -scale-x-100" src={Potato} alt="Potato" width={87.49} height={87.94} />
            <h2 className="absolute bottom-0 md:left-0 -left-16 whitespace-nowrap">Potato Potata</h2>
          </div>
          <div className="flex flex-row gap-4 h-8 text-secondary-500">
            <a>
              <Image src={Twitter} width={32} height={32} alt="Twitter" />
            </a>
            <a>
              <Image src={Github} width={32} height={32} alt="Github" />
            </a>
          </div>
          <div className="text-base">Copyright © 2023 Potato Potata</div>
        </div>
        <div className="md:flex flex-col gap-4 hidden text-white items-end self-center justify-end text-xl">
          <Link href="/">Home</Link>
          {MENU_LIST.map(item => {
            return (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
