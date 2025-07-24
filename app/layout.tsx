import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'TAPxCard - Borderless | Limitless | Secure',
  description: 'Experience the future of payments with TAPxCard. Borderless transactions, limitless possibilities, and unmatched security.',
  keywords: ['payments', 'fintech', 'digital card', 'secure payments', 'borderless', 'limitless'],
  authors: [{ name: 'TAPxCard Team' }],
  creator: 'TAPxCard',
  publisher: 'TAPxCard',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tapxcard.io'),
  openGraph: {
    title: 'TAPxCard - Borderless | Limitless | Secure',
    description: 'Experience the future of payments with TAPxCard',
    url: 'https://tapxcard.io',
    siteName: 'TAPxCard',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAPxCard - Borderless | Limitless | Secure',
    description: 'Experience the future of payments with TAPxCard',
    images: ['/images/twitter-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "bg-charcoal antialiased h-full w-full"
          )}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
