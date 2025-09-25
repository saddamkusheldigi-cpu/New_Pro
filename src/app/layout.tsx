import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Axis - India & Abroad Work Consultants",
  description: "Your trusted partner for truck and trailer driving careers in Poland. We connect skilled drivers with premium employment opportunities across Poland's thriving transportation sector.",
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
