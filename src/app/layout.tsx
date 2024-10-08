import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import WidthContainer from "@/components/width-container";
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theo Selenskiy",
  description: "My personal portfolio website",
};

//https://dribbble.com/shots/20753864-kawsar-design

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <WidthContainer>
          <Navbar />
          {children}
        </WidthContainer>
      </body>
    </html>
  );
}
