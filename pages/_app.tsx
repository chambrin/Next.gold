import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { NextUIProvider } from '@nextui-org/react';


export default function MyApp({ Component, pageProps }: AppProps) {
 return (
  <NextUIProvider>
   <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
   </ApolloProvider>
   </NextUIProvider>
 );
}
