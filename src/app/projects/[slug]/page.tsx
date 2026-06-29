import Script from "next/script";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectById, getRelatedProjects, projects } from "@/data/projects";
import { Meta, Schema } from "@/once-ui/modules";

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) return {};

  return Meta.generate({
    title: `${project.title} | ${person.name}`,
    description: project.summary,
    baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(project.title)}`,
    path: `${work.path}/${project.id}`,
    keywords: [
      "Full Stack Developer",
      "Software Engineer",
      "Enterprise Software",
      "Chile",
      "Canada",
      ...project.technologies,
      ...project.tags,
    ],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: project.summary,
    creator: {
      "@type": "Person",
      name: person.name,
      url: `${baseURL}${about.path}`,
    },
    keywords: [...project.tags, ...project.technologies].join(", "),
  };

  return (
    <>
      <Schema
        as="techArticle"
        baseURL={baseURL}
        path={`${work.path}/${project.id}`}
        title={project.title}
        description={project.summary}
        image={`${baseURL}/og?title=${encodeURIComponent(project.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Script
        id={`software-application-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetail project={project} relatedProjects={relatedProjects} />
    </>
  );
}
