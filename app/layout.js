import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://homesetu.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "HomeSetu — Trusted Home Services in Vadodara",
    template: "%s | HomeSetu Vadodara",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  description: "Book verified home service professionals...",
  keywords: [
    "home services Vadodara",
    "AC repair Vadodara",
    "plumber Vadodara",
    "electrician Vadodara",
    "carpenter Vadodara",
    "waterproofing Vadodara",
    "painting Vadodara",
    "home repair Vadodara",
    "HomeSetu",
  ],
  authors: [{ name: "HomeSetu", url: BASE_URL }],
  creator: "HomeSetu",
  publisher: "HomeSetu",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "HomeSetu",
    title: "HomeSetu — Trusted Home Services in Vadodara",
    description:
      "Book verified workers for AC repair, plumbing, carpentry, electrical work and more in Vadodara. Same-day service. Transparent pricing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HomeSetu — Home Services Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeSetu — Trusted Home Services in Vadodara",
    description:
      "Book verified workers for AC repair, plumbing, carpentry and more in Vadodara.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
  
}
