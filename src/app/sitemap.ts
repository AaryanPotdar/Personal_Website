import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `https://${baseURL}/blog`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["/", "/about", "/work"].map((route) => ({
    url: `https://${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs];
}
