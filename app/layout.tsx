import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css"
import Footer from "@/components/footer/footer";
import Socials from "@/components/socials";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-roboto-mono',
});

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

export const metadata: Metadata = {
  title: "Nexis Network | Homebase",
  description: "Nexis Network Homebase is a platform for building and managing decentralized applications and AI Agents."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" className={`${robotoMono.variable} ${styles.body}`}>
      <body className={`${robotoMono.className} font-light body`}>
        <Web3ModalProvider initialState={initialState}>
          <div className="z-0">
            <div className={styles.bodyLinesWrap}>
              <div className={styles.bodyLineLeft} />
              <div className={styles.bodyLineLeftMiddle} />
              <div className={styles.bodyLineCenter} />
              <div className={styles.bodyLineRightMiddle} />
              <div className={styles.bodyLineRight} />
            </div>
          </div>
          <Socials />
          <div className="z-50">
            {children}
          </div>
        </Web3ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
