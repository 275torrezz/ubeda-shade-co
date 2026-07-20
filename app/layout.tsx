import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ubeda Shade Co. | Premium Solar Screen Installation in DFW",
  description:
    "Professional custom solar screen installation in Dallas-Fort Worth. Request a free estimate online and connect with Ubeda Shade Co. today.",
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
    title: "Ubeda Shade Co. | Premium Solar Screens for DFW Homes",
    description:
      "Custom solar screens for patios, windows, and large openings in Dallas-Fort Worth—crafted for comfort, durability, and a refined finish.",
    url: "https://ubedashadeco.com",
    siteName: "Ubeda Shade Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/company-images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Ubeda Shade Co. logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubeda Shade Co. | Premium Solar Screens for DFW Homes",
    description:
      "Custom solar screens for patios, windows, and large openings in Dallas-Fort Worth—crafted for comfort, durability, and a refined finish.",
    images: ["/company-images/social-preview.png"],
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
