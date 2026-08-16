import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toast } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ma bibliothèque",
  description: "Ma bibliothèque de components",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-FR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col justify-between mx-24">
        <Toast.Provider/>
        <NuqsAdapter>
          <header className="flex pt-3 justify-center items-center">
            <p>Navigation à venir</p>
            </header>
            <main className="flex-1 py-12">{children}</main>
            <footer className="flex pb-3 justify-center items-center">Tous droits réservés</footer></NuqsAdapter>
      </body>
    </html>
  );
}
