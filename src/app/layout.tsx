import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollArrow from "./components/layout/scroll-arrow";

export const metadata: Metadata = {
  title: "T.s Industries | Premium Web Development",
  description: "T.s Industries specializes in modern web development, custom software engineering, and premium digital solutions.",
  icons: {
    icon: "/images/icon/icon.png",
    shortcut: "/images/icon/icon.png",
    apple: "/images/icon/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollArrow />
      </body>
    </html>
  );
}
