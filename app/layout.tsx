import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import { AudioProvider } from "@/app/(components)/audio-provider";

export const metadata: Metadata = {
  title: "MunicipalLabs",
  description:
    "Software that lets cities move at the speed of their people. AI tools for public-sector teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}


