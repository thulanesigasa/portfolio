import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Bible Diaries — Ts Industries",
  description:
    "Explore Bible Diaries: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/bible-diaries/" },
};
export default function WorkPage() {
  return <ProjectStory slug="bible-diaries" />;
}
