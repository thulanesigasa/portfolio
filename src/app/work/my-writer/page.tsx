import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "My Writer — Ts Industries",
  description:
    "An AI-assisted book-writing workspace with research, live drafting and human review.",
  alternates: { canonical: "/work/my-writer/" },
};
export default function WorkPage() {
  return <ProjectStory slug="my-writer" />;
}
