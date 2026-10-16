import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "SellMyNotes — Ts Industries",
  description:
    "A marketplace for South African students to buy and sell study notes, summaries and past papers.",
  alternates: { canonical: "/work/sell-my-notes/" },
};
export default function WorkPage() {
  return <ProjectStory slug="sell-my-notes" />;
}
