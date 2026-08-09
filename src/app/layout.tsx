import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollArrow from "./components/layout/scroll-arrow";
import ScrollRestorationHandler from "./components/ui/scroll-restoration-handler";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    images: [
      {
        url: "https://ts-industries.co.za/images/og-preview.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "T.s Industries - Thulane Sigasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T.s Industries - Portfolio",
    description: "T.s Industries specializes in modern web development, custom software engineering, and premium digital solutions.",
    images: ["https://ts-industries.co.za/images/og-preview.png"],
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
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
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
