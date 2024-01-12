import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";


export default function MyApp({ Component, pageProps }: AppProps) {
 return (
  <NextUIProvider>
   <ApolloProvider client={apolloClient}>
    <NextThemesProvider attribute="class" defaultTheme="dark">
     <Component {...pageProps} />
    </NextThemesProvider>
   </ApolloProvider>
  </NextUIProvider>
 );
}
