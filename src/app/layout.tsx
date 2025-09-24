import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Axis - India & Abroad Work Consultants",
  description: "Your trusted partner in career advancement. We help professionals find the right path for their global careers with personalized guidance and comprehensive support.",
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
