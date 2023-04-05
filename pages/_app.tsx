import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>SAE IIT BHU</title>
    </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
