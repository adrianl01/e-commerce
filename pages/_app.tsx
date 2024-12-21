import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/components/header/style.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
