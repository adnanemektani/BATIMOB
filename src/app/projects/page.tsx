import type { Metadata } from "next";

import { translations } from "@/lib/translations";
import { buildMetadata } from "@/lib/seo";
import { ProjectsContent } from "@/components/pages/projects-content";
import { getProjects, getFeaturedProject } from "@/lib/sanity";

export const metadata: Metadata = buildMetadata(translations.fr, "projects");

export default async function ProjectsPage() {
  const [projects, featured] = await Promise.all([
    getProjects(),
    getFeaturedProject(),
  ]);

  return <ProjectsContent projects={projects} featured={featured} />;
}