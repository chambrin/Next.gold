"use client";

import React, { FC, ReactElement } from 'react';
import '../styles/globals.css';
import { ApolloWrapper } from './ApolloWrapper';
import { UiProviders } from './UiProviders';

interface RootLayoutProps {
 children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps): ReactElement => {
 return (
  <html lang="en" className='dark'>
  <body>
  <UiProviders>
   <ApolloWrapper>{children}</ApolloWrapper>
  </UiProviders>
  </body>
  </html>
 );
};

export default RootLayout;
