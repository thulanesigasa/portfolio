import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Ghost FileShuttler — Ts Industries",
  description:
    "A file transfer tool connecting desktop browsers and Android devices through cloud or local network workflows.",
  alternates: { canonical: "/work/ghost-file-shuttler/" },
};
export default function WorkPage() {
  return <ProjectStory slug="ghost-file-shuttler" />;
}
