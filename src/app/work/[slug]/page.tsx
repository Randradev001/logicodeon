import { redirect } from "next/navigation";

import { projects } from "@/data/projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function LegacyWorkProject({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";
  const project = projects.find((candidate) => candidate.id === slug);

  redirect(project ? `/projects/${project.id}` : "/projects");
}
