import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Topbar from "@/components/topbar";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { montserrat, poppins } from "@/lib/fonts"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumenhaus",
  description: "Lumenhaus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className}`}
      >
        <Topbar/>
        {/*<Navbar/>*/}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
