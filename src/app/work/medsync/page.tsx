import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "MedSync — Ts Industries",
  description:
    "Explore MedSync: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/medsync/" },
};
export default function WorkPage() {
  return <ProjectStory slug="medsync" />;
}
