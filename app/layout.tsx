import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { CustomCursor } from "@/components/custom-cursor";
import Script from "next/script";

const saans = localFont({
  src: [
    {
      path: "../public/fonts/SaansLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SaansRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SaansMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SaansSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SaansBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
  description: "Rise at Seven is a search-first content marketing agency...",
  icons: {
    icon: [
      { url: "https://riseatseven.com/dist/favicons/favicon.ico", sizes: "any" },
      { url: "https://riseatseven.com/dist/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [
      { url: "https://riseatseven.com/dist/favicons/apple-touch-icon-180x180.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saans.variable} h-full antialiased bg-deep-black text-pure-white`}
    >
      <head>
        <Script src="https://kit.fontawesome.com/711261502f.js" crossOrigin="anonymous" strategy="lazyOnload" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
