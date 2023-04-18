import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SAE IIT BHU</title>
      </Head>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
