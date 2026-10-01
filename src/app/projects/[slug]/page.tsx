import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailContent } from "@/components/pages/project-detail-content";
import {
  getProjectBySlug,
  getProjects,
  projectImages,
  urlFor,
} from "@/lib/sanity";
import { readSlug } from "@/lib/slug";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .map((project) => project.slug?.current)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const slug = readSlug((await params).slug);
  const canonical = encodeURI(`https://www.batimob.net/projects/${slug}`);

  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Batimob" };

  const description = project.textFr;
  const leadImage = projectImages(project)[0];
  const imageUrl = leadImage
    ? urlFor(leadImage).width(1200).height(630).url()
    : undefined;

  return {
    title: project.nameFr,
    description,
    alternates: { canonical },
    openGraph: {
      title: project.nameFr,
      description,
      type: "article",
      url: canonical,
      siteName: "Batimob",
      locale: "fr_FR",
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: project.nameFr }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.nameFr,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const slug = readSlug((await params).slug);

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
