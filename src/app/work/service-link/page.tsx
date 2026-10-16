import type { Metadata } from "next";
import ProjectStory from "@/app/components/project-story";
export const metadata: Metadata = {
  title: "Service Link — Ts Industries",
  description:
    "Explore Service Link: what it does, the technology stack and our contribution.",
  alternates: { canonical: "/work/service-link/" },
};
export default function WorkPage() {
  return <ProjectStory slug="service-link" />;
}
