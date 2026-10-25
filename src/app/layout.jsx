import "@fontsource/jetbrains-mono";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@/index.css";
import Layout from "@/components/Layout";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/constants/site";

// The share image comes from app/opengraph-image.jsx and app/twitter-image.jsx
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Usama Puward",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "RAG",
    "Multi-Agent Systems",
    "AutoGen",
    "FastAPI",
    "React",
    "Next.js",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="dark bg-[#090614] text-[#e9d5ff] antialiased selection:bg-purple-500/30 selection:text-purple-200">
        <noscript>
          <style>{"[data-reveal],[data-reveal-stagger]>*{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
