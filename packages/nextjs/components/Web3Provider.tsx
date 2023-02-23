import { AuthProvider } from '@arcana/auth';
import { ProvideAuth } from '@arcana/auth-react';
import React, { FC } from 'react';

import { ARCANA_APP_ID } from '~~/constants';

interface IWeb3Provider {
  children: React.ReactNode;
}

const provider = new AuthProvider(ARCANA_APP_ID, { alwaysVisible: false });

const Web3Provider: FC<IWeb3Provider> = ({ children }) => {
  return <ProvideAuth provider={provider}>{children}</ProvideAuth>;
};

export default Web3Provider;
