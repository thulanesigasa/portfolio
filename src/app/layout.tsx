import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollArrow from "./components/layout/scroll-arrow";

export const metadata: Metadata = {
  metadataBase: new URL("https://ts-industries.co.za"),
  title: "T.s Industries | Premium Web Development",
  description: "T.s Industries specializes in modern web development, custom software engineering, and premium digital solutions.",
  icons: {
    icon: "/images/icon/icon.png",
    shortcut: "/images/icon/icon.png",
    apple: "/images/icon/icon.png",
  },
  openGraph: {
    title: "T.s Industries | Premium Web Development",
    description: "T.s Industries specializes in modern web development, custom software engineering, and premium digital solutions.",
    url: "https://ts-industries.co.za",
    siteName: "T.s Industries",
    type: "website",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
