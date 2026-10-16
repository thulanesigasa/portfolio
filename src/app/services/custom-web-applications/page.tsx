import type { Metadata } from "next";
import ServiceDetail from "../../components/service-detail";
export const metadata: Metadata = {
  title: "Custom Web Applications | TS Industries",
  alternates: { canonical: "/services/custom-web-applications/" },
};
export default function Page() {
  return (
    <ServiceDetail
      {...{
        title: "Custom Web Applications",
        intro:
          "We design and build modern, user-friendly websites that deliver seamless experiences across devices. Our focus is on functionality, aesthetics, and performance to help your brand thrive online.",
        approachTitle: "Our Approach",
        approach:
          "At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.",
        featuresTitle: "Key Features",
        features: [
          "Responsive Design",
          "E-commerce Solutions",
          "SEO Optimization",
          "High Performance & Core Web Vitals",
          "Scalable React & Next.js Architecture",
        ],
      }}
    />
  );
}
