import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khoirul Ariffin | Front End Developer",
  description:
    "Personal portfolio of Khoirul Ariffin - Front End Developer specializing in Vue.js, React, and modern web technologies.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
