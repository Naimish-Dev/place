import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import { Footer } from "./components/Footer";
import Script from "next/script";
// import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Place",
  description: "Palace Residences Dhe Payment Plan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16553376594"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16553376594');         `,
          }}
        />
        <Script>
          {`gtag('event', 'conversion', { 'send_to': 'AW-16553376594/13HxCO2n3awZENL2odU9', 'value': 10.0, 'currency': 'AED' })});`}
        </Script>
        <Script>{`gtag('config', 'AW-16553376594')`}</Script> */}
      </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
