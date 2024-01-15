"use client";
import React, { FC, ReactElement } from 'react';
import '../styles/globals.css';
import { ApolloWrapper } from './ApolloWrapper';
import { UiProviders } from './UiProviders';
import { UserProvider } from '../context/UserContext';
import UserIs from '../components/utils/UserIs';

interface RootLayoutProps {
 children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps): ReactElement => {
 return (
  <html lang="en" className='dark'>
  <body>
  <UserProvider>
  <UiProviders>
   <ApolloWrapper>   <UserIs />
    {children}</ApolloWrapper>
  </UiProviders>
  </UserProvider>
  </body>
  </html>
 );
};

export default RootLayout;
