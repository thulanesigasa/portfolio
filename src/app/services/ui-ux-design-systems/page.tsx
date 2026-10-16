import type { Metadata } from "next";
import ServiceDetail from "../../components/service-detail";
export const metadata: Metadata = {
  title: "UI/UX & Design Systems | TS Industries",
  alternates: { canonical: "/services/ui-ux-design-systems/" },
};
export default function Page() {
  return (
    <ServiceDetail
      {...{
        title: "UI/UX & Design Systems",
        intro:
          "We craft visually striking designs that capture your brand's essence and connect with your audience. From intuitive user journeys to premium design systems, our creative expertise ensures your brand stands out with clarity and impact.",
        approachTitle: "The Process",
        approach:
          "Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. We generate multiple solutions, build prototypes in Figma, and iterate based on feedback to create user-centric digital experiences.",
        featuresTitle: "Our Expertise",
        features: [
          "UX Audits & Research",
          "Wireframing & Prototyping",
          "Visual Identity & Brand Guidelines",
          "Responsive Figma Design Systems",
          "Accessibility & Usability Testing",
        ],
      }}
    />
  );
}
