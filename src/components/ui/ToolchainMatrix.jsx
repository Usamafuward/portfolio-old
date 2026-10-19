import React from "react";
import logoSvg from "@/assets/logo_svg";
import { Brain, Server, Globe, Cpu } from "lucide-react";

export default function ToolchainMatrix() {
  const pillars = [
    {
      id: "AI/ML",
      title: "Autonomous AI & Multi-Agent Systems",
      icon: Brain,
      description: "Agentic workflows, deep learning models, RAG pipelines, and mathematical inference.",
      capabilities: [
        "Multi-Agent Orchestration",
        "RAG Architectures",
        "Vector Embeddings",
        "CNNs & Deep Learning",
      ],
      flagship: {
        name: "Python",
        role: "Primary Language for AI & Deep Learning Inference",
        imgUrl: logoSvg.python,
        badge: "Inference & Core",
      },
      tools: [
        {
          name: "AutoGen / LangChain",
          role: "Multi-Agent & RAG",
          imgUrl: logoSvg.autogen,
          badge: "Agentic AI",
        },
        {
          name: "TensorFlow",
          role: "Deep Learning & CNNs",
          imgUrl: logoSvg.tensorflow,
          badge: "Neural Networks",
        },
        {
          name: "Scikit-Learn",
          role: "Statistical ML Models",
          imgUrl: logoSvg.scikitlearn,
          badge: "ML Classifiers",
        },
        {
          name: "Pandas",
          role: "Data Pipelines & ETL",
          imgUrl: logoSvg.pandas,
          badge: "Data Wrangling",
        },
        {
          name: "NumPy",
          role: "Vectorized Operations",
          imgUrl: logoSvg.numpy,
          badge: "Matrix Compute",
        },
        {
          name: "C++",
          role: "High-Performance Compute",
          imgUrl: logoSvg.cplusplus,
          badge: "Low-Latency",
        },
      ],
    },
    {
      id: "Backend",
      title: "Backend Architecture & Datastores",
      icon: Server,
      description: "Asynchronous microservices, distributed REST APIs, and ACID-compliant relational & document databases.",
      capabilities: [
        "Async Microservices",
        "ACID Transactions",
        "RESTful Gateways",
        "ORM Optimization",
      ],
      flagship: {
        name: "FastAPI",
        role: "High-Concurrency Asynchronous Python Microservices",
        imgUrl: logoSvg.fastapi,
        badge: "Async Microservices",
      },
      tools: [
        {
          name: "PostgreSQL",
          role: "Relational Database",
          imgUrl: logoSvg.postgresql,
          badge: "ACID & Indexing",
        },
        {
          name: "Node.js",
          role: "Event-Driven Runtime",
          imgUrl: logoSvg.nodedotjs,
          badge: "Async Event Loop",
        },
        {
          name: "Express.js",
          role: "RESTful API Gateway",
          imgUrl: logoSvg.express,
          badge: "Middleware Routing",
        },
        {
          name: "Django",
          role: "Full-Stack ORM",
          imgUrl: logoSvg.django,
          badge: "Enterprise Web",
        },
        {
          name: "MongoDB",
          role: "Document Datastore",
          imgUrl: logoSvg.mongodb,
          badge: "Flexible Schema",
        },
        {
          name: "MySQL",
          role: "Relational Datastore",
          imgUrl: logoSvg.mysql,
          badge: "Transactions",
        },
      ],
    },
    {
      id: "Frontend",
      title: "Modern Client & Mobile Systems",
      icon: Globe,
      description: "Concurrent component architectures, Server Actions, cross-platform mobile apps, and design tokens.",
      capabilities: [
        "Server-Side Rendering",
        "Cross-Platform Native",
        "Responsive Tokens",
        "Concurrent UI",
      ],
      flagship: {
        name: "React",
        role: "Component Architecture & Production UI Systems",
        imgUrl: logoSvg.react,
        badge: "Concurrent UI",
      },
      tools: [
        {
          name: "Next.js",
          role: "SSR & Server Actions",
          imgUrl: logoSvg.nextjs,
          badge: "Zero Layout Shift",
        },
        {
          name: "React Native",
          role: "Cross-Platform Mobile",
          imgUrl: logoSvg.reactnative,
          badge: "iOS & Android",
        },
        {
          name: "Tailwind CSS",
          role: "Utility Design Tokens",
          imgUrl: logoSvg.tailwindcss,
          badge: "Design Systems",
        },
        {
          name: "JavaScript",
          role: "ESNext Language Core",
          imgUrl: logoSvg.javascript,
          badge: "Client Logic",
        },
      ],
    },
    {
      id: "DevOps",
      title: "Cloud Infrastructure & DevOps",
      icon: Cpu,
      description: "Containerized environments, cloud-native deployments, and automated CI/CD deployment pipelines.",
      capabilities: [
        "Container Orchestration",
        "CI/CD Automation",
        "Cloud Provisioning",
        "Distributed Versioning",
      ],
      flagship: {
        name: "Microsoft Azure",
        role: "Cloud Compute, AI Services & Cognitive Deployments",
        imgUrl: logoSvg.azure,
        badge: "Cloud Platform",
      },
      tools: [
        {
          name: "Docker",
          role: "Containerized Workflows",
          imgUrl: logoSvg.docker,
          badge: "Containers",
        },
        {
          name: "GitHub Actions",
          role: "CI/CD & Automation",
          imgUrl: logoSvg.github,
          badge: "CI/CD Pipelines",
        },
        {
          name: "Git",
          role: "Distributed Versioning",
          imgUrl: logoSvg.git,
          badge: "Source Control",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* 4 Architectural Bento Pillars (Always showing all 4 pillars directly in 2x2 grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pillars.map((pillar) => {
          const PillarIcon = pillar.icon;
          const toolCount = pillar.tools.length + (pillar.flagship ? 1 : 0);

          return (
            <div
              key={pillar.id}
              className="k-card p-6 sm:p-7 bg-[#151328] border-[var(--border-line)] hover:border-[#8B5CF6]/50 transition-all duration-300 flex flex-col justify-between group space-y-5"
            >
              {/* Pillar Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A12] border border-[var(--border-line)] flex items-center justify-center shrink-0 group-hover:border-[#8B5CF6]/60 group-hover:bg-[#1f173d] transition-all">
                    <PillarIcon className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#C4B5FD] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-base text-white group-hover:text-[#C4B5FD] transition-colors truncate">
                      {pillar.title}
                    </h3>
                    <p className="font-ui text-xs text-[var(--text-muted)] line-clamp-1 mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <span className="font-ui text-[11px] font-medium text-[#C4B5FD] bg-[#0A0A12] px-3 py-1 rounded-full border border-[var(--border-line)] shrink-0">
                  {toolCount} Tools
                </span>
              </div>

              {/* Interior Tech Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Flagship Card (Spans across 2 cols) */}
                {pillar.flagship && (
                  <div className="col-span-1 sm:col-span-2 p-3.5 rounded-xl border border-[#8B5CF6]/30 bg-gradient-to-r from-[#181230] to-[#0A0A12] hover:border-[#8B5CF6]/60 transition-all duration-200 flex items-center justify-between gap-3 group/tool">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#151328] border border-[#8B5CF6]/40 p-2 flex items-center justify-center shrink-0 group-hover/tool:border-[#8B5CF6] transition-all">
                        <img
                          src={pillar.flagship.imgUrl}
                          alt={pillar.flagship.name}
                          className="w-full h-full object-contain filter contrast-125 group-hover/tool:scale-110 transition-transform duration-200"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-semibold text-sm text-white group-hover/tool:text-[#C4B5FD] transition-colors">
                            {pillar.flagship.name}
                          </h4>
                          <span className="font-ui text-[9px] uppercase tracking-wider font-semibold text-[#C4B5FD] bg-[#8B5CF6]/25 px-2 py-0.5 rounded-full border border-[#8B5CF6]/40 shrink-0">
                            Core Engine
                          </span>
                        </div>
                        <p className="font-ui text-xs text-[var(--text-muted)] mt-0.5">
                          {pillar.flagship.role}
                        </p>
                      </div>
                    </div>
                    <span className="font-ui text-[10px] font-medium text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 px-2.5 py-1 rounded-full shrink-0 hidden sm:inline-block">
                      {pillar.flagship.badge}
                    </span>
                  </div>
                )}

                {/* Standard Tool Tiles */}
                {pillar.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl border border-[var(--border-line)] bg-[#0A0A12] hover:bg-[#18132e] hover:border-[#8B5CF6]/50 transition-all duration-200 flex flex-col justify-between group/tool min-h-[82px]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#151328] border border-[var(--border-line)] p-1.5 flex items-center justify-center shrink-0 group-hover/tool:border-[#8B5CF6]/50 group-hover/tool:bg-[#1f173d] transition-all">
                        <img
                          src={tool.imgUrl}
                          alt={tool.name}
                          className="w-full h-full object-contain filter contrast-125 group-hover/tool:scale-110 transition-transform duration-200"
                          loading="lazy"
                        />
                      </div>
                      <span className="font-ui text-[10px] font-medium text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 px-2 py-0.5 rounded-full shrink-0">
                        {tool.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-xs text-white group-hover/tool:text-[#C4B5FD] transition-colors leading-tight">
                        {tool.name}
                      </h4>
                      <p className="font-ui text-[11px] text-[var(--text-muted)] mt-0.5 leading-tight">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pillar Footer: Architectural Capabilities Pills */}
              <div className="pt-3.5 border-t border-[var(--border-line)] flex flex-wrap items-center gap-1.5">
                <span className="font-ui text-[11px] text-[var(--text-muted)] mr-1">
                  Architectural Focus:
                </span>
                {pillar.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="font-ui text-[10px] px-2.5 py-0.5 rounded-md bg-[#0A0A12] text-[#C4B5FD] border border-[var(--border-line)] font-medium"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
