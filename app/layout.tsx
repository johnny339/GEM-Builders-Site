import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gembuildsco.com'), // Replace with your actual domain when you get it
  title: {
    default: 'GEM Builders | Specialty Contractor Colorado',
    template: '%s | GEM Builders'
  },
  description: 'Expert specialty contracting in Fort Collins, Vail, Edwards & Eagle County. Siding, windows, framing, trim carpentry & decks. 25+ years experience. Licensed & insured. Free estimates.',
  keywords: [
    // Fort Collins area
    'siding contractor Fort Collins',
    'window installation Fort Collins',
    'framing contractor Northern Colorado',
    'trim carpentry Fort Collins',
    'deck builder Fort Collins',
    'contractor Loveland CO',
    'contractor Windsor CO',
    // Eagle County area
    'siding contractor Vail',
    'window installation Eagle County',
    'framing contractor Edwards CO',
    'trim carpentry Vail',
    'deck builder Eagle County',
    'contractor Avon CO',
    'contractor Gypsum CO',
    'contractor Eagle CO',
    'specialty contractor Colorado',
  ],
  authors: [{ name: 'GEM Builders LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gembuildsco.com',
    siteName: 'GEM Builders',
    title: 'GEM Builders | Specialty Contractor',
    description: 'Professional siding, windows, framing, trim carpentry & decks serving Fort Collins and Eagle County, Colorado. 25+ years experience.',
    // images: [
    //   {
    //     url: '/og-image.jpg', // Create this: 1200x630px image of your best project
    //     width: 1200,
    //     height: 630,
    //     alt: 'GEM Builders - Specialty Contractor Fort Collins and Eagle County',
    //   }
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'GEM Builders | Specialty Contractor',
  //   description: 'Expert contractor services in Fort Collins & Eagle County, Colorado',
  //   images: ['/og-image.jpg'],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://gembuildsco.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}