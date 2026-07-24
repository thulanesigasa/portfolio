import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollArrow from "./components/layout/scroll-arrow";
import ScrollRestorationHandler from "./components/ui/scroll-restoration-handler";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ts-industries.co.za"),
  title: "T.s Industries - Portfolio",
  description: "T.s Industries is a forward-thinking tech startup specializing in modern web development.",
  keywords: ["Web Development", "Tech Startup", "Custom Software", "South Africa", "React", "Next.js"],
  authors: [{ name: "T.s Industries" }],
  icons: {
    icon: "/images/icon/icon.png",
    shortcut: "/images/icon/icon.png",
    apple: "/images/icon/icon.png",
  },
  openGraph: {
    title: "T.s Industries - Portfolio",
    description: "T.s Industries specializes in modern web development, custom software engineering, and premium digital solutions.",
    url: "https://ts-industries.co.za",
    siteName: "T.s Industries",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://formsubmit.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "T.s Industries",
              "url": "https://ts-industries.co.za",
              "logo": "https://ts-industries.co.za/images/logo/logo.svg",
              "description": "Forward-thinking tech startup specializing in modern web development.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA"
              }
            })
          }}
        />
      </head>
      <body>
        <ScrollRestorationHandler />
        <Header />
        {children}
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
