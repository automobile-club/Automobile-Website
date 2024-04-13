'use client'
import { ReactNode } from 'react'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outfit } from 'next/font/google'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  fallback: ['sans-serif'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  fallback: ['sans-serif'],
  display: 'swap',
})

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <Head>
        <title>SAE IIT BHU</title>
      </Head>
      <body>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
