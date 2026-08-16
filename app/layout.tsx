import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toast } from "@heroui/react";
import Link from "next/link";

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
      <body className="mx-24 flex h-full flex-col">
        <Toast.Provider placement="top" />
        <NuqsAdapter>
          <header className="flex items-center justify-end pt-3">
            <div className="flex gap-4">
              <Link
                href={"/register"}
                className="flex items-center justify-center rounded-full bg-amber-300 p-2 text-white"
              >
                <button className="">S'enregistrer</button>
              </Link>
              <Link
                href={"/login"}
                className="flex items-center justify-center rounded-full bg-amber-900 p-2 text-white"
              >
                <button>Se connecter</button>
              </Link>
            </div>
          </header>
          <main className="flex flex-1 flex-col py-12">{children}</main>
          <footer className="flex items-center justify-center pb-3">
            Tous droits réservés
          </footer>
        </NuqsAdapter>
      </body>
    </html>
  );
}
