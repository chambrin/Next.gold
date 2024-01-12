import React, { FC, ReactElement } from 'react';
import '../styles/globals.css';

interface RootLayoutProps {
 children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps): ReactElement => {
 return (
  <html lang="en">
  <body>
   {children}
  </body>
  </html>
 );
};

export default RootLayout;
