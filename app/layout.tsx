import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ubeda Shade Co. | Premium Solar Screen Installation in DFW",
  description:
    "Professional custom solar screen installation in Dallas-Fort Worth. Reduce heat, lower energy bills, increase privacy, and protect your home.",
  keywords: [
    "solar screens",
    "Dallas-Fort Worth",
    "home shade",
    "window screens",
    "solar screen installation",
  ],
  metadataBase: new URL("https://ubedashadeco.com"),
  alternates: { canonical: "https://ubedashadeco.com" },
  icons: {
    icon: "/company-images/logo.png?v=2",
    shortcut: "/company-images/logo.png?v=2",
    apple: "/company-images/logo.png?v=2",
  },
  openGraph: {
    title: "Ubeda Shade Co. | Premium Solar Screen Installation",
    description:
      "Premium custom solar screens for homes and businesses across Dallas-Fort Worth.",
    url: "https://ubedashadeco.com",
    siteName: "Ubeda Shade Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubeda Shade Co. | Premium Solar Screen Installation",
    description:
      "Professional custom solar screen installation that lowers heat and boosts comfort.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#111111]">{children}</body>
    </html>
  );
}
