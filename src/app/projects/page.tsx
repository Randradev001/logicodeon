import { ProjectsHub } from "@/components/ProjectsHub";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

const keywords = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Node.js",
  "SQL Server",
  "GeneXus",
  "Power BI",
  "Mining Software",
  "Enterprise Software",
  "Chile",
  "Canada",
];

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
    keywords,
  });
}

export default function ProjectsPage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ProjectsHub />
    </>
  );
}
