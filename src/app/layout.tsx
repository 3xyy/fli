import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import TurnstileContext from 'turnstile-next/vercel';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Future Leaders Initiative",
  description: "Empowering the next generation with practical business education and entrepreneurial skills",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
      <Analytics />
    </html>
  );
}
