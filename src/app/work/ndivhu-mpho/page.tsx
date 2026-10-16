import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Ndivhu & Mpho — Ts Industries",
  description:
    "Explore Ndivhu & Mpho: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/ndivhu-mpho/" },
};
export default function WorkPage() {
  return <ProjectStory slug="ndivhu-mpho" />;
}
