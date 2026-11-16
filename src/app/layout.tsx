import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import RoutePreloader from "@/components/route-preloader/route-preloader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fontMain = Outfit({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const fontSerif = Playfair_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
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
      className={`${fontMain.variable} ${fontSerif.variable} ${fontMono.variable} ${fontMain.className}`}
    >
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <RoutePreloader />
      </body>
    </html>
  );
}