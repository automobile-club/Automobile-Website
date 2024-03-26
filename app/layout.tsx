'use client'
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>SAE IIT BHU</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      <style jsx global>{`
        :root {
          --outfit-font: ${outfit.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
        }
      `}</style>
      <main>{children}</main>
      <Footer />
    </>
  );
}
