import React, { FC } from 'react';

import { CompConfig } from '~~/helpers/types/components';

interface Props {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'primary' | 'secondary';
  className?: string;
}

const buttonConfig: CompConfig = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',

  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

const Button: FC<Props> = ({ size = 'sm', type = 'primary', children, className = '', onClick }): JSX.Element => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button onClick={onClick} className={`btn font-signika ${buttonConfig[size]} ${buttonConfig[type]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
