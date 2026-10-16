import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "GENI — Ts Industries",
  description:
    "A learning companion for gender equality and inclusion in digital transformation.",
  alternates: { canonical: "/work/geni/" },
};
export default function WorkPage() {
  return <ProjectStory slug="geni" />;
}
