import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --outfit-font: ${outfit.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>SAE IIT BHU</title>
      </Head>
      <Component {...pageProps} />
      <Footer />

    </>
  );
}
