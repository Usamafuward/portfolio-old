import { portfolioData } from "@/constants/portfolioData";

const { name, title } = portfolioData.personalInfo;

// Canonical site URL used for absolute links in social previews and the sitemap.
// Set NEXT_PUBLIC_SITE_URL in production; Netlify (URL) and Vercel provide fallbacks at build time.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = name;
export const siteTitle = `${name} | ${title}`;
export const siteDescription =
  `${name} — ${title}. Building autonomous AI agents, retrieval-augmented (RAG) pipelines, and scalable full-stack web applications.`;
