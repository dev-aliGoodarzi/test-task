// Next
import type { Metadata } from "next";
// Next

// CSS
import "./globals.css";
// CSS

// Google Fonts
import { Geist, Geist_Mono } from "next/font/google";
import { ReduxToolkitProvider } from "@/Providers/StateManagement/ReduxToolkit/Providers/ReduxToolkit.provider";
// Google Fonts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test",
  description: "Desc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxToolkitProvider>{children}</ReduxToolkitProvider>
      </body>
    </html>
  );
}
