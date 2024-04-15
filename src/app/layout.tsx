import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
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

export const metadata: Metadata = {
  applicationName: 'SAE Collegiate Club , IIT (BHU), Varanasi',
  metadataBase: new URL('https://www.saeiitbhu.in'),
  title: {
    default: 'SAE Collegiate Club , IIT (BHU), Varanasi',
    template: '%s - SAE Collegiate Club , IIT (BHU), Varanasi',
  },
  description: `We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design`,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'SAE Collegiate Club , IIT (BHU), Varanasi',
    'SAE Collegiate Club',
    'iit bhu',
    'IIT BHU',
    'IIT BHU Varanasi',
    'IIT Varanasi',
    'SAE',
    'Collegiate Club',
    'society of automotive engineers',
    'society of automotive engineers IIT BHU',
    'Varanasi',
    'Cars',
    'autonomous vehicles',
    'automobiles',
    'F1',
    'ATV',
    'Racing',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  referrer: 'origin',
  creator: 'SAE Collegiate Club , IIT (BHU), Varanasi',
  openGraph: {
    title: {
      default: 'SAE Collegiate Club , IIT (BHU), Varanasi',
      template: '%s - SAE Collegiate Club , IIT (BHU), Varanasi',
    },
    description: `We are a student organization at Indian Institute of Technology, (BHU) Varanasi. It focuses on promoting automotive engineering and provides opportunities to participate in technical events, competitions, and hands-on projects related to vehicle design`,
    url: 'https://www.saeiitbhu.in',
    siteName: 'SAE Collegiate Club , IIT (BHU), Varanasi',
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
    images: {
      alt: 'SAE Collegiate Club , IIT (BHU), Varanasi',
      height: 630,
      width: 1200,
      url: '/opengraph-image.png',
      type: 'image/png',
    },
    emails: 'saecollegiateclub.iitbhu@gmail.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SAE Collegiate Club , IIT (BHU), Varanasi',
  },
  verification: {
    google: 'google',
  },
  category: 'Club Website',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
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
