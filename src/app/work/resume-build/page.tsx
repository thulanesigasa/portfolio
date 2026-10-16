import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Resume Build — Ts Industries",
  description:
    "Explore Resume Build: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/resume-build/" },
};
export default function WorkPage() {
  return <ProjectStory slug="resume-build" />;
}
