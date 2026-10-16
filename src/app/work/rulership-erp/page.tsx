import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Rulership ERP — Ts Industries",
  description:
    "A web and mobile inventory and point-of-sale system for a detergent manufacturing business.",
  alternates: { canonical: "/work/rulership-erp/" },
};
export default function WorkPage() {
  return <ProjectStory slug="rulership-erp" />;
}
