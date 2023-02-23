import React, { FC } from 'react';

interface Props {
  status?: 'success' | 'error';
  image: string;
  details?: {
    campaign: string;
    name: string;
    price: string;
  };
}

const Notification: FC<Props> = ({ status, details, image }): JSX.Element => {
  return (
    <div className="toast">
      <div className="alert bg-white shadow-xl font-signika">
        <div className="avatar">
          <div className="w-20 rounded-xl">
            <img src={image} />
          </div>
        </div>
        {status === 'success' && details ? (
          <div className="flex gap-0 items-start flex-col">
            <h2 className={`text-success font-bold text-xl`}>You successfully supported {details.campaign}!</h2>
            <p className="text-primary-200 text-md">
              You bought <b>{details.name}</b> for {details.price} ETH!
            </p>
          </div>
        ) : (
          <div className="flex gap-0 items-start flex-col">
            <h2 className={`text-error font-bold text-xl`}>Not sufficient balance on your account!</h2>
            <p className="text-primary-200 text-md">We are sorry, but there’s some problem with the transaction.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
