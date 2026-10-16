import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "MakeMyNotes — Ts Industries",
  description:
    "An education platform that turns past exam papers and memos into structured study notes.",
  alternates: { canonical: "/work/make-my-notes/" },
};
export default function WorkPage() {
  return <ProjectStory slug="make-my-notes" />;
}
