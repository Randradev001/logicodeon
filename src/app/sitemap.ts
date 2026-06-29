import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { blog } from "@/app/resources/content";
import { projects } from "@/data/projects";

export default async function sitemap() {
  const siteUrl = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;

  const blogs =
    blog.display !== false
      ? getPosts(["src", "app", "blog", "posts"]).map((post) => ({
          url: `${siteUrl}/blog/${post.slug}`,
          lastModified: post.metadata.publishedAt,
        }))
      : [];

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => {
    if (route === "/blog" && blog.display === false) {
      return false;
    }

    return routesConfig[route as keyof typeof routesConfig];
  });

  const routes = activeRoutes.map((route) => ({
    url: `${siteUrl}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projectPages, ...blogs];
}
