import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import styles from "./layout.module.scss";
import { type Viewport } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ТЗ для Zero Agency",
  description: "Никита Гребнев, Next + TS + AppRouter",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
