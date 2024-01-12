"use client";

import React, { FC, ReactElement } from 'react';
import '../styles/globals.css';
import { ApolloWrapper } from './ApolloWrapper';
import { NextUIProvider } from '@nextui-org/react';

interface RootLayoutProps {
 children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps): ReactElement => {
 return (
  <html lang="en" className='dark'>
  <body>
  <NextUIProvider>
  <ApolloWrapper>{children}</ApolloWrapper>
  </NextUIProvider>
  </body>
  </html>
 );
};

export default RootLayout;
