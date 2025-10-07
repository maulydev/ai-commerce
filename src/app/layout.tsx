import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import Header from "@/components/header/Header";
import MainNavigation from "@/components/header/MainNavigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "LunaCart | AI-Powered Online Shopping Experience",
  description:
    "LunaCart is your AI-powered online store – smart product recommendations, personalized deals, and a seamless shopping experience for fashion, electronics, home essentials, and more.",
  keywords: [
    "LunaCart",
    "AI shopping",
    "online shopping",
    "smart ecommerce",
    "personalized shopping",
    "AI-powered store",
    "buy online",
    "smart deals",
  ],
  openGraph: {
    title: "LunaCart | Smarter Online Shopping with AI",
    description:
      "Discover the future of ecommerce with LunaCart – AI-powered product recommendations, secure checkout, and fast delivery for all your shopping needs.",
    url: "https://www.lunacart.com",
    siteName: "LunaCart",
    images: [
      {
        url: "https://www.lunacart.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LunaCart AI Ecommerce Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LunaCart | Smarter Online Shopping with AI",
    description:
      "Shop fashion, electronics, and lifestyle products with AI-powered personalization at LunaCart. Enjoy fast delivery, secure checkout, and smart deals.",
    images: ["https://www.lunacart.com/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // ${geistSans.variable} ${geistMono.variable}
        className={`antialiased bg-slate-100 pb-96`}
      >
        <TanstackProvider>
          <Header />
          <MainNavigation />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
