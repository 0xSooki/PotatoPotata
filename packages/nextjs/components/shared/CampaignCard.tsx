import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Campaign } from "~~/helpers/types/components";
interface Props extends Campaign {
  border?: boolean;
  className?: string;
}

const CampaignCard: FC<Props> = ({ campaign, border, className = "" }): JSX.Element => {
  return (
    <>
      <div className={`card ${border ? "border-primary border-3" : ""} w-76 bg-base-100 shadow-xl ${className}`}>
        <figure className="rounded-xl">
          <Image
            src={`https://w3s.link/ipfs/${campaign.image}/image.jpg`}
            height={175}
            width={300}
            alt={campaign.title}
          />
        </figure>
        <div className="card-body p-4 font-signika">
          <h2 className="card-title mb-0 font-bold text-primary">{campaign.title}</h2>
          <p className=" text-primary-200 m-0 text-sm">{campaign.description}</p>
          <hr className="bg-primary-50 my-1" />
          <div className="flex flex-row justify-around mb-1">
            <div className="flex flex-col">
              <h3 className="font-bold mb-0 self-center text-xl leading-tight text-primary">in {campaign.time}</h3>
              <span className="text-primary-200 leading-tight text-sm">Campaign ends</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold leading-tight mb-0 self-center text-xl text-primary">
                {campaign.participants} artists
              </h3>
              <span className="text-primary-200 leading-tight self-center text-sm">Participating</span>
            </div>
          </div>
          <Link className="btn btn-primary btn-md" href={"campaigns/" + campaign.address}>
            Participate
          </Link>
        </div>
      </div>
    </>
  );
};

export default CampaignCard;
