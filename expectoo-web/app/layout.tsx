import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "animate.css";
import "swiper/css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expectoo",
  icons: "/favicon.png",
  description:
    "The focus of our company is to provide our outstanding talents with opportunities to enter the international market. Vetted by our industry-leading experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
