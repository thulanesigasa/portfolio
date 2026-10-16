import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Ts Industries",
  description: "View all professional certifications earned by Ts Industries — including Cisco, Huawei, freeCodeCamp, Vodacom, and AI certifications.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Certificates | Ts Industries",
    description: "Professional certifications in networking, cloud computing, AI, and full-stack development from Ts Industries.",
    url: "https://ts-industries.co.za/certificates",
  },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
