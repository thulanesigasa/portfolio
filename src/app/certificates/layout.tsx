import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | T.s Industries",
  description: "View all professional certifications earned by T.s Industries — including Cisco, Huawei, freeCodeCamp, Vodacom, and AI certifications.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Certificates | T.s Industries",
    description: "Professional certifications in networking, cloud computing, AI, and full-stack development from T.s Industries.",
    url: "https://ts-industries.co.za/certificates",
  },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
