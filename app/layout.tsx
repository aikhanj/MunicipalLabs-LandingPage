import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import { AudioProvider } from "@/app/(components)/audio-provider";

export const metadata: Metadata = {
  title: "Municipal Labs | Utilizing Software to expedite public sector operations",
  description:
    "Expediting public sector operations through software",
  icons: {
    icon: "/logos/logo-iconblack.png",
    shortcut: "/logos/logo-iconblack.png",
    apple: "/logos/logo-iconblack.png",
  },
  openGraph: {
    title: "Municipal Labs | Utilizing Software to expedite public sector operations",
    description: "Expediting public sector operations through software",
    images: [
      {
        url: "/logos/logo-iconblack.png",
        width: 1200,
        height: 630,
        alt: "Municipal Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Municipal Labs | Utilizing Software to expedite public sector operations",
    description: "Expediting public sector operations through software",
    images: ["/logos/logo-iconblack.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(19, 27, 45, 0.95) 60vh, rgba(6, 7, 11, 1) 100vh), radial-gradient(circle at 20% -10%, rgba(93, 214, 255, 0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(149, 128, 255, 0.28), transparent 60%)",
          }}
        />
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}


