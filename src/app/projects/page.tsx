import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { ProjectsContent } from "@/components/pages/projects-content";

export const metadata: Metadata = buildMetadata(translations.fr, "projects");

export default function ProjectsPage() {
  return <ProjectsContent />;
}