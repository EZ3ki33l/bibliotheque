import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Toast } from "@heroui/react";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { auth } from "@/lib/auth";

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
  other: {
    "darkreader-lock": "1",
  },
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html
      lang="fr-FR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full font-sans">
        <Toast.Provider placement="top" />
        <NuqsAdapter>
          <div className="flex h-full">
            <AppSidebar user={session?.user ?? null} />
            <main className="min-w-0 flex-1 overflow-y-auto">
              <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-6 py-8">
                {children}
              </div>
            </main>
          </div>
        </NuqsAdapter>
      </body>
    </html>
  );
}
