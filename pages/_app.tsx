import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/components/header/style.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../app/store";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          lang="en"
          charSet="utf-8"
        />
      </Head>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  );
}
