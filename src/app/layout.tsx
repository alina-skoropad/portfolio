import type { Metadata } from "next";
import { Mona_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fontMain = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const fontSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alina Skoropad",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth" 
      className={`${fontMain.variable} ${fontSerif.variable} ${fontMain.className}`}
    >
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}