import { redirect } from "next/navigation";

export function generateStaticParams(): { slug: string }[] {
  return [];
}

export default function LegacyBlogPost() {
  redirect("/projects");
}
