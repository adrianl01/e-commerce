import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/components/header/style.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          lang="en"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
