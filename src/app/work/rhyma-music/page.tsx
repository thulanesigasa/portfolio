import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Rhyma Music — Ts Industries",
  description:
    "Explore Rhyma Music: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/rhyma-music/" },
};
export default function WorkPage() {
  return <ProjectStory slug="rhyma-music" />;
}
