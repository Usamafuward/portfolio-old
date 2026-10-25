import React, { useState } from "react";
import { portfolioData } from "@/constants/portfolioData";

// Helper to resolve SVG image URL from portfolioData.technologies
const getTechSvgUrl = (identifier, fallbackUrl) => {
  const normalized = identifier.toLowerCase().replace(/[^a-z0-9]/g, "");
  const found = portfolioData.technologies?.find((t) => {
    const alt = (t.altText || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const url = (t.imgUrl || "").toLowerCase();
    return alt.includes(normalized) || url.includes(normalized);
  });
  return found?.imgUrl || fallbackUrl;
};

export default function ToolchainMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState(null);

  // Filter tabs; shortLabel keeps all four on one row below md
  const categories = [
    { id: "all", label: "All Technologies", shortLabel: "All" },
    { id: "ai", label: "AI / ML & Vector DB", shortLabel: "AI / ML" },
    { id: "frontend", label: "Frontend & State", shortLabel: "Frontend" },
    { id: "backend", label: "Backend, Cloud & APIs", shortLabel: "Backend" },
  ];

  // Track 1: Matching top row using SVG URLs from portfolioData.technologies
  const row1Tools = [
    {
      name: "TensorFlow",
      role: "Model Training",
      badge: "ML",
      category: "ai",
      imgUrl: getTechSvgUrl("tensorflow", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg"),
      detail: "Deep learning models, convolutional neural networks, and GPU-accelerated tensor computation.",
    },
    {
      name: "FastAPI",
      role: "Inference Microservices",
      badge: "API",
      category: "backend",
      imgUrl: getTechSvgUrl("fastapi", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg"),
      detail: "Asynchronous backend microservices with Pydantic contract validation and sub-50ms API response times.",
    },
    {
      name: "Node.js",
      role: "Runtime Architecture",
      badge: "CORE",
      category: "backend",
      imgUrl: getTechSvgUrl("nodedotjs", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg"),
      detail: "High-throughput asynchronous event-driven JavaScript engine powering real-time gateways.",
    },
    {
      name: "PostgreSQL",
      role: "Relational + pgvector",
      badge: "DB",
      category: "backend",
      imgUrl: getTechSvgUrl("postgresql", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg"),
      detail: "ACID transactional guarantees, complex relational indexing, and vector similarity embeddings.",
    },
    {
      name: "MongoDB",
      role: "Document Store",
      badge: "DB",
      category: "backend",
      imgUrl: getTechSvgUrl("mongodb", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg"),
      detail: "High-scale document database with schema flexibility, aggregations, and high-concurrency storage.",
    },
    {
      name: "Python",
      role: "Core AI & Scripting",
      badge: "CORE",
      category: "ai",
      imgUrl: getTechSvgUrl("python", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg"),
      detail: "Foundational language for machine learning pipelines, LLM agent orchestration, and automated scripts.",
    },
    {
      name: "AutoGen",
      role: "Multi-Agent AI Systems",
      badge: "AGENT",
      category: "ai",
      imgUrl: getTechSvgUrl("autogen", "https://raw.githubusercontent.com/microsoft/autogen/main/docs/dotnet/images/logo.svg"),
      detail: "Collaborative multi-agent reasoning frameworks, autonomous execution loops, and tool-assisted workflows.",
    },
    {
      name: "Docker",
      role: "Containerized Workflows",
      badge: "DEVOPS",
      category: "backend",
      imgUrl: getTechSvgUrl("docker", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg"),
      detail: "Isolated containerization, multi-stage builds, and repeatable development-to-production parity.",
    },
    {
      name: "PyTorch",
      role: "Deep Learning Research",
      badge: "ML",
      category: "ai",
      imgUrl: getTechSvgUrl("pytorch", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg"),
      detail: "Dynamic computational graphs, neural network prototyping, and transfer learning architectures.",
    },
    {
      name: "Scikit-Learn",
      role: "Statistical Algorithms",
      badge: "ML",
      category: "ai",
      imgUrl: getTechSvgUrl("scikitlearn", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg"),
      detail: "Supervised and unsupervised regression, clustering, ensemble methods, and validation pipelines.",
    },
    {
      name: "Azure Cloud",
      role: "Cognitive Services & VMs",
      badge: "CLOUD",
      category: "backend",
      imgUrl: getTechSvgUrl("microsoftazure", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg"),
      detail: "Azure App Services, Blob Storage, Cognitive Services, and enterprise AI production deployments.",
    },
    {
      name: "Git",
      role: "Distributed Version Control",
      badge: "VCS",
      category: "backend",
      imgUrl: getTechSvgUrl("git", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/git.svg"),
      detail: "Branch management, atomic commit conventions, and distributed collaboration workflows.",
    },
  ];

  // Track 2: Matching bottom row using SVG URLs from portfolioData.technologies
  const row2Tools = [
    {
      name: "Framer Motion",
      displayName: "Framer M...",
      role: "Interactive Physics",
      badge: "MOTION",
      category: "frontend",
      imgUrl: getTechSvgUrl("framer", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg"),
      detail: "Production-grade spring physics, scroll-driven gestures, and fluid layout orchestration.",
    },
    {
      name: "Postman",
      role: "API Contract Testing",
      badge: "REST",
      category: "backend",
      imgUrl: getTechSvgUrl("postman", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg"),
      detail: "Automated regression testing, mock servers, and OpenAPI contract validation suites.",
    },
    {
      name: "React 19",
      role: "Component Architecture",
      badge: "CORE",
      category: "frontend",
      imgUrl: getTechSvgUrl("react", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"),
      detail: "Concurrent React features, server actions, custom state hooks, and resilient client ecosystems.",
    },
    {
      name: "Next.js",
      role: "App Router & SSR",
      badge: "FULL-STACK",
      category: "frontend",
      imgUrl: getTechSvgUrl("nextdotjs", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg"),
      detail: "Hybrid static-server rendering, SEO-optimized metadata pipelines, and zero-layout-shift routing.",
    },
    {
      name: "TypeScript",
      role: "Strict Type Safety",
      badge: "LANG",
      category: "frontend",
      imgUrl: getTechSvgUrl("typescript", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg"),
      detail: "End-to-end static typing, generics, strict interface contracts, and compiler-level guarantees.",
    },
    {
      name: "Tailwind CSS",
      role: "Utility Design Tokens",
      badge: "UI",
      category: "frontend",
      imgUrl: getTechSvgUrl("tailwindcss", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg"),
      detail: "Strict token scales, responsive layouts, and zero-runtime stylesheet optimization.",
    },
    {
      name: "React Native",
      role: "Cross-Platform Mobile",
      badge: "MOBILE",
      category: "frontend",
      imgUrl: getTechSvgUrl("react", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg"),
      detail: "Native bridge interfaces, gesture handling, and shared cross-platform codebase.",
    },
    {
      name: "Django",
      role: "Enterprise Web Systems",
      badge: "CORE",
      category: "backend",
      imgUrl: getTechSvgUrl("django", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg"),
      detail: "Battery-included Python web framework with secure authentication, migrations, and ORM.",
    },
    {
      name: "Pandas",
      role: "Data Transformations",
      badge: "DATA",
      category: "ai",
      imgUrl: getTechSvgUrl("pandas", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg"),
      detail: "Tabular data manipulation, time-series processing, and pre-inference feature engineering.",
    },
    {
      name: "NumPy",
      role: "Vectorized Linear Math",
      badge: "MATH",
      category: "ai",
      imgUrl: getTechSvgUrl("numpy", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg"),
      detail: "High-performance N-dimensional array processing and mathematical transformations.",
    },
    {
      name: "Express.js",
      role: "API Middleware Gateway",
      badge: "REST",
      category: "backend",
      imgUrl: getTechSvgUrl("express", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg"),
      detail: "Minimalist server routing, JWT authentication middleware, and REST endpoint controllers.",
    },
    {
      name: "AWS Cloud",
      role: "Distributed Cloud Infra",
      badge: "CLOUD",
      category: "backend",
      imgUrl: getTechSvgUrl("amazonaws", "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg"),
      detail: "S3 object storage, EC2 instances, and scalable production cloud architecture.",
    },
  ];

  // Helper to test if a card matches the active category
  const matchesFilter = (tool) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ai") {
      return tool.category === "ai" || tool.badge === "ML" || tool.badge === "AGENT" || tool.badge === "DATA" || tool.badge === "MATH";
    }
    if (activeCategory === "frontend") {
      return tool.category === "frontend";
    }
    if (activeCategory === "backend") {
      return tool.category === "backend";
    }
    return true;
  };

  // Infinite duplicate array for seamless looping
  const row1Loop = [...row1Tools, ...row1Tools];
  const row2Loop = [...row2Tools, ...row2Tools];

  const handleCardClick = (tool) => {
    setSelectedTech((prev) => (prev?.name === tool.name ? null : tool));
  };

  const renderCard = (tool, keyId) => {
    const isMatch = matchesFilter(tool);
    const isSelected = selectedTech?.name === tool.name;

    return (
      <div
        key={keyId}
        className={`cursor-pointer w-[240px] sm:w-[260px] h-[76px] rounded-2xl p-3 sm:px-3.5 sm:py-3 flex items-center justify-between gap-3 border transition-all duration-300 shrink-0 select-none group ${
          isSelected
            ? "bg-[#251A4D] border-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.5)] scale-[1.02]"
            : isMatch
            ? "bg-[#110D24] border-white/10 hover:border-[#8B5CF6]/70 hover:bg-[#181235]"
            : "bg-[#0C091A] border-white/5 opacity-25 hover:opacity-80 hover:border-[#8B5CF6]/40"
        }`}
      >
        {/* Left: Square Rounded Icon Box with SVG Image */}
        <div className="w-10 h-10 rounded-xl bg-[#090716] border border-white/10 flex items-center justify-center p-2 shrink-0 group-hover:border-[#8B5CF6]/60 transition-colors">
          <img
            src={tool.imgUrl}
            alt={tool.name}
            className={`w-full h-full object-contain ${
              typeof tool.imgUrl === "string" && tool.imgUrl.includes("simple-icons")
                ? "filter invert contrast-125 opacity-90 group-hover:opacity-100"
                : "contrast-125 opacity-95 group-hover:opacity-100"
            } group-hover:scale-110 transition-transform duration-200`}
            loading="lazy"
          />
        </div>

        {/* Right: Title + Badge on top line, Subtitle on bottom line */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-1.5">
            <h4 className="font-heading font-semibold text-sm text-white group-hover:text-[#EDE9FE] transition-colors truncate">
              {tool.displayName || tool.name}
            </h4>
            <span className="font-ui text-[10px] uppercase font-semibold text-[#C4B5FD] bg-[#8B5CF6]/20 border border-[#8B5CF6]/35 px-2 py-0.5 rounded-full shrink-0 tracking-wider">
              {tool.badge}
            </span>
          </div>
          <p className="font-ui text-xs text-[#9E98B8] truncate mt-0.5">
            {tool.role}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 1. Centered Capsule Filter Pill Bar */}
      <div className="flex justify-center items-center px-6">
        <div className="inline-flex items-center max-w-full gap-0.5 sm:gap-1.5 p-1 rounded-full border border-white/10 bg-[#0E0B1A]/80 backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (selectedTech && cat.id !== "all" && !matchesFilter(selectedTech)) {
                    setSelectedTech(null);
                  }
                }}
                aria-label={cat.label}
                className={`font-ui text-xs lg:text-sm font-medium whitespace-nowrap px-3 sm:px-3.5 md:px-4 lg:px-5 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#8B5CF6] text-white"
                    : "text-[#9E98B8] hover:text-white"
                }`}
              >
                <span className="md:hidden">{cat.shortLabel}</span>
                <span className="hidden md:inline">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Dual-Row Staggered Infinite Logo Carousel */}
      <div className="marquee-container relative overflow-hidden py-3 space-y-5">
        {/* Left & Right Edge Vignette Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-56 bg-gradient-to-r from-[#0F0E1C] via-[#0F0E1C]/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-56 bg-gradient-to-l from-[#0F0E1C] via-[#0F0E1C]/90 to-transparent z-10" />

        {/* Row 1 Track: Smooth Left Marquee */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex gap-4 py-1">
            {row1Loop.map((tool, idx) => renderCard(tool, `row1-${idx}`))}
          </div>
        </div>

        {/* Row 2 Track: Smooth Right Marquee */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex gap-4 py-1">
            {row2Loop.map((tool, idx) => renderCard(tool, `row2-${idx}`))}
          </div>
        </div>
      </div>
    </div>
  );
}
