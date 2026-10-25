import { siteUrl } from "@/constants/site";

const routes = ["", "/projects", "/experiences", "/certifications", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
