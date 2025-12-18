import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamaxis.co.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dream Axis - India & Abroad Work Consultants",
    template: "%s | Dream Axis"
  },
  description: "Your trusted partner for truck and trailer driving careers in Poland. We connect skilled drivers with premium employment opportunities across Poland's thriving transportation sector. Professional job placement, visa assistance, and career counseling services.",
  keywords: [
    "job placement abroad",
    "work consultants India",
    "Poland truck driver jobs",
    "international job placement",
    "visa assistance",
    "certificate attestation",
    "work visa consultants",
    "career counseling",
    "overseas employment",
    "job placement services"
  ],
  authors: [{ name: "Dream Axis" }],
  creator: "Dream Axis",
  publisher: "Dream Axis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Dream Axis',
    title: "Dream Axis - India & Abroad Work Consultants",
    description: "Your trusted partner for truck and trailer driving careers in Poland. We connect skilled drivers with premium employment opportunities across Poland's thriving transportation sector.",
    images: [
      {
        url: `${baseUrl}/images/dream_axis_logo_new.png`,
        width: 1200,
        height: 630,
        alt: 'Dream Axis Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dream Axis - India & Abroad Work Consultants",
    description: "Your trusted partner for truck and trailer driving careers in Poland. Professional job placement, visa assistance, and career counseling services.",
    images: [`${baseUrl}/images/dream_axis_logo_new.png`],
    creator: '@dreamaxis', // TODO: Replace with your actual Twitter handle if available
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Employment Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} scroll-smooth`}>{children}</body>
    </html>
  );
}
