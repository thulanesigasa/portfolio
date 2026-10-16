import type { Metadata } from "next";
import ServiceDetail from "../../components/service-detail";
export const metadata: Metadata = {
  title: "Robust SaaS Solutions | Ts Industries",
  alternates: { canonical: "/services/robust-saas-solutions/" },
};
export default function Page() {
  return (
    <ServiceDetail
      {...{
        title: "Robust SaaS Solutions",
        intro:
          "We provide innovative tech solutions that empower your business to operate smarter and more efficiently. From systems integration to custom software, we deliver tools that drive results.",
        approachTitle: "Our Architecture",
        approach:
          "Our SaaS platforms are built on cloud-native databases and high-concurrency API microservices. This guarantees reliable, secure, and performant architectures capable of scaling with your rapidly growing user base.",
        featuresTitle: "Key Features",
        features: [
          "IT Consulting & Digital Strategy",
          "Cloud Solutions & Migration",
          "System & API Integration",
          "Secure Multi-Tenant Databases",
          "Subscription & Payment Gateways",
        ],
      }}
    />
  );
}
