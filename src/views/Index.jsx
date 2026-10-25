import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Globe,
  Server,
  Layers,
  Cpu,
  Database,
  Building,
  GraduationCap,
  Award,
  Calendar,
  ExternalLink,
  ChevronRight,
  Check,
  Copy,
  Minus,
  Plus,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import HeroTopographicWaves from "@/components/ui/HeroTopographicWaves";
import HeroProfileCard from "@/components/ui/HeroProfileCard";
import ToolchainMatrix from "@/components/ui/ToolchainMatrix";
import { portfolioData } from "@/constants/portfolioData";

export default function Index() {
  const { personalInfo, technologies, projects, experiences, educations } = portfolioData;

  // Active drawer state for featured cards
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleDrawer = (id) => {
    setActiveDrawer((prev) => (prev === id ? null : id));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative overflow-hidden font-body">
      {/* 2. HERO SECTION WITH ALGORITHMIC TOPOGRAPHIC WAVES & CUTOUT PROFILE */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:py-16 overflow-hidden border-b border-[var(--border-line)]">
        {/* Algorithmic Topographic Wave Field (Zero Particles) */}
        <HeroTopographicWaves />

        {/* Hero Content 2-Column Grid */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headline, Lead, CTA Buttons, Stats Strip */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-line)] bg-[#151328]/90 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C4B5FD] animate-pulse" />
                <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                  AI/ML Engineer &amp; Full-Stack Developer
                </span>
              </div>

              {/* Display H1 with Weight Contrast & Balanced Lines */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] lg:leading-[1.14] font-light tracking-[-0.03em] text-white">
                Building intelligent systems &amp;{" "}
                <strong className="block font-semibold text-white mt-1">
                  modern full-stack products.
                </strong>
              </h1>

              {/* Lead Paragraph */}
              <p className="font-ui text-sm sm:text-base text-[var(--text-muted)] max-w-xl font-normal leading-relaxed">
                Hi, I&apos;m Usama Puward — an AI/ML engineer and full-stack developer focused on autonomous AI agents,
                retrieval-augmented pipelines, and high-performance web applications.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#projects"
                  className="font-ui text-xs sm:text-sm font-medium px-7 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition"
                >
                  Explore My Work →
                </a>
                <a
                  href="#competencies"
                  className="font-ui text-xs sm:text-sm font-medium px-7 py-3 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition"
                >
                  Skills &amp; Tech Stack
                </a>
              </div>

              {/* Quiet Stats Strip with Balanced Headroom */}
              <div className="pt-6 border-t border-[var(--border-line)] grid grid-cols-3 max-w-md gap-4 font-ui">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-white font-heading">BSc CS</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">University of Colombo</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[#C4B5FD] font-heading">13+</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Projects Built</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[#8B5CF6] font-heading">23+</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Cutout Silhouette Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS WITH EXPANDING '+' ARCHITECTURE DRAWERS (Alternating Section: #0F0E1C) */}
      <section id="projects" className="py-24 border-b border-[var(--border-line)] bg-[#0F0E1C]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Featured Work
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-white">
                Projects I&apos;ve built &amp; <strong className="font-semibold text-white">engineered</strong>
              </h2>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-line)] bg-[#151328] text-xs font-ui text-[var(--text-muted)] shrink-0">
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white font-mono leading-none">+</span>
              <span>Click on any card to inspect architecture</span>
            </div>
          </div>

          {/* 3 Featured Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* PROJECT CARD 1: FLAGSHIP RAG PIPELINE */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card k-card-flagship p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    Flagship AI / NLP
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    Automated PDF RAG Pipeline
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("rag")}
                  onMouseEnter={() => setActiveDrawer("rag")}
                  aria-label="Expand technical architecture"
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  <span
                    className={`inline-flex items-center justify-center transition-transform duration-500 ease-out ${
                      activeDrawer === "rag" ? "rotate-45 text-[#C4B5FD]" : "rotate-0 text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <p className="text-sm text-[#E2E0F0]/80 leading-relaxed my-4 font-normal">
                Retrieval-Augmented Generation engine for automated PDF ingestion, semantic chunking, vector
                embeddings, and context-grounded multimodal synthesis.
              </p>

              {/* 1px SVG Vector Diagram: RAG Embeddings & Retrieval */}
              <div className="border border-white/15 rounded-xl p-3.5 bg-[#0A0A12]/40 mb-4">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <rect x="16" y="25" width="52" height="76" rx="4" stroke="#ffffff" strokeWidth="1" />
                  <line x1="26" y1="42" x2="56" y2="42" stroke="#C4B5FD" strokeWidth="1" />
                  <line x1="26" y1="56" x2="50" y2="56" stroke="#9E98B8" strokeWidth="1" />
                  <line x1="26" y1="70" x2="54" y2="70" stroke="#9E98B8" strokeWidth="1" />
                  <line x1="12" y1="36" x2="72" y2="36" stroke="#8B5CF6" strokeWidth="1.5" className="scan-line" />
                  <line x1="68" y1="63" x2="108" y2="63" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3" />
                  <g className="orbit-group">
                    <circle cx="140" cy="65" r="28" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="140" cy="37" r="3.5" fill="#8B5CF6" />
                    <circle cx="164" cy="79" r="3.5" fill="#C4B5FD" />
                  </g>
                  <circle cx="140" cy="65" r="11" stroke="#ffffff" strokeWidth="1.2" />
                  <line x1="168" y1="65" x2="215" y2="45" stroke="#8B5CF6" strokeWidth="1" />
                  <line x1="168" y1="65" x2="215" y2="85" stroke="#C4B5FD" strokeWidth="1" />
                  <rect x="215" y="34" width="48" height="22" rx="4" stroke="#8B5CF6" strokeWidth="1" />
                  <rect x="215" y="74" width="48" height="22" rx="4" stroke="#C4B5FD" strokeWidth="1" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[#C4B5FD] truncate">Google API • Vector DB • Python</span>
                <button
                  type="button"
                  onClick={() => toggleDrawer("rag")}
                  className="underline text-white hover:text-[#C4B5FD] transition whitespace-nowrap shrink-0"
                >
                  Architecture →
                </button>
              </div>

              {/* Circular Ripple Expanding Drawer */}
              <div className={`card-drawer ${activeDrawer === "rag" ? "open" : ""} flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // RAG
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveDrawer(null)}
                    aria-label="Close architecture panel"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition shrink-0"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-lg font-semibold text-white">Pipeline Architecture</h4>
                  <ul className="text-xs text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Ingestion:</strong> Automated PDF parsing &amp; token-aware semantic chunking.</li>
                    <li><strong>Embeddings:</strong> High-dimensional vector indexing via Google Gemini API.</li>
                    <li><strong>Retrieval:</strong> Top-K cosine similarity matching with low-latency grounding.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    Vector Embeddings
                  </span>
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    LLM Orchestration
                  </span>
                  <a
                    href="https://github.com/Usamafuward/Rag-Pipeline-For-PDF-Analysis.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-white underline font-ui flex items-center gap-1 hover:text-[#C4B5FD] transition"
                  >
                    GitHub Code →
                  </a>
                </div>
              </div>
            </article>

            {/* PROJECT CARD 2: MEDIMAN FULL-STACK PLATFORM */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    FinTech &amp; Healthcare
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    MediMan Consultation &amp; Wallet
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("mediman")}
                  onMouseEnter={() => setActiveDrawer("mediman")}
                  aria-label="Expand technical architecture"
                  className="w-9 h-9 rounded-full border border-[var(--border-line)] hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  <span
                    className={`inline-flex items-center justify-center transition-transform duration-500 ease-out ${
                      activeDrawer === "mediman" ? "rotate-45 text-[#C4B5FD]" : "rotate-0 text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed my-4 font-normal">
                Full-stack telemedicine booking platform featuring real-time multi-currency wallet management and
                integrated PayHere payment checkout gateways.
              </p>

              {/* 1px SVG Vector Diagram: Telemetry & Multi-Currency Ledger */}
              <div className="border border-[var(--border-line)] rounded-xl p-3.5 bg-[#0F0E1C] mb-4">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <rect x="16" y="14" width="248" height="102" rx="8" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="30" cy="26" r="2.5" fill="#8B5CF6" />
                  <circle cx="40" cy="26" r="2.5" fill="#C4B5FD" />
                  <polyline points="28,82 70,82 88,48 104,98 122,60 140,82 248,82" stroke="#8B5CF6" strokeWidth="1.4" />
                  <circle cx="248" cy="82" r="4" fill="#C4B5FD" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[var(--text-muted)] truncate">Full-Stack • PayHere API • Multi-Currency</span>
                <button
                  type="button"
                  onClick={() => toggleDrawer("mediman")}
                  className="underline text-white hover:text-[#C4B5FD] transition whitespace-nowrap shrink-0"
                >
                  Architecture →
                </button>
              </div>

              {/* Circular Ripple Expanding Drawer */}
              <div className={`card-drawer ${activeDrawer === "mediman" ? "open" : ""} flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // MediMan
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveDrawer(null)}
                    aria-label="Close architecture panel"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition shrink-0"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-lg font-semibold text-white">Full-Stack Architecture</h4>
                  <ul className="text-xs text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Wallet Engine:</strong> Multi-currency ledger state management with atomic balance ops.</li>
                    <li><strong>Payment Gateway:</strong> Webhook-verified PayHere checkout integration.</li>
                    <li><strong>Scheduling:</strong> Real-time appointment booking with doctor calendar syncing.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    React / Node
                  </span>
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    PayHere SDK
                  </span>
                  <a
                    href="https://github.com/Usamafuward/sample-mediman-doctor.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-white underline font-ui flex items-center gap-1 hover:text-[#C4B5FD] transition"
                  >
                    GitHub Code →
                  </a>
                </div>
              </div>
            </article>

            {/* PROJECT CARD 3: TARTUCA FOOD & MONOREPO PLATFORM */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Full-Stack Monorepo
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    Tartuca Food &amp; Delivery System
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("tartuca")}
                  onMouseEnter={() => setActiveDrawer("tartuca")}
                  aria-label="Expand technical architecture"
                  className="w-9 h-9 rounded-full border border-[var(--border-line)] hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  <span
                    className={`inline-flex items-center justify-center transition-transform duration-500 ease-out ${
                      activeDrawer === "tartuca" ? "rotate-45 text-[#C4B5FD]" : "rotate-0 text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed my-4 font-normal">
                Asynchronous FastAPI backend integrated with PostgreSQL and Auth0, Google Maps delivery routing,
                and administrative order management portal.
              </p>

              {/* 1px SVG Vector Diagram: API Gateway & Data Bus */}
              <div className="border border-[var(--border-line)] rounded-xl p-3.5 bg-[#0F0E1C] mb-4">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <rect x="24" y="28" width="76" height="74" rx="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                  <line x1="36" y1="48" x2="84" y2="48" stroke="#8B5CF6" strokeWidth="1.2" />
                  <line x1="36" y1="64" x2="74" y2="64" stroke="#9E98B8" strokeWidth="1" />
                  <line x1="100" y1="65" x2="178" y2="65" stroke="#C4B5FD" strokeWidth="1.2" strokeDasharray="4 4" />
                  <rect x="178" y="28" width="76" height="74" rx="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                  <circle cx="216" cy="65" r="14" stroke="#8B5CF6" strokeWidth="1.2" />
                  <circle cx="216" cy="65" r="4" fill="#C4B5FD" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[var(--text-muted)] truncate">FastAPI • PostgreSQL • Google Maps</span>
                <button
                  type="button"
                  onClick={() => toggleDrawer("tartuca")}
                  className="underline text-white hover:text-[#C4B5FD] transition whitespace-nowrap shrink-0"
                >
                  Architecture →
                </button>
              </div>

              {/* Circular Ripple Expanding Drawer */}
              <div className={`card-drawer ${activeDrawer === "tartuca" ? "open" : ""} flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // Tartuca
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveDrawer(null)}
                    aria-label="Close architecture panel"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition shrink-0"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-lg font-semibold text-white">Monorepo Architecture</h4>
                  <ul className="text-xs text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Backend Engine:</strong> Asynchronous FastAPI microservice connected to PostgreSQL.</li>
                    <li><strong>Geocoding:</strong> Dynamic distance matrix and map pin placement via Google Maps API.</li>
                    <li><strong>Identity:</strong> Enterprise Auth0 OAuth2 token flow with role-based dashboard access.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    FastAPI
                  </span>
                  <span className="text-[11px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    PostgreSQL
                  </span>
                  <a
                    href="https://github.com/Usamafuward/tartuca_user.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-white underline font-ui flex items-center gap-1 hover:text-[#C4B5FD] transition"
                  >
                    GitHub Code →
                  </a>
                </div>
              </div>
            </article>

          </div>

          {/* Catalog Link */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-6 py-3 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition"
            >
              <span>View All 13 Projects in Catalog</span>
              <ChevronRight className="w-4 h-4 text-[#C4B5FD]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORE ENGINEERING PILLARS (Canvas Section: #0A0A12) */}
      <section id="competencies" className="py-24 border-b border-[var(--border-line)] bg-[#0A0A12]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Core Competencies
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-white">
              Technical disciplines &amp;{" "}
              <strong className="font-semibold text-white">areas of&nbsp;expertise</strong>
            </h2>
            <p className="font-ui text-sm text-[var(--text-muted)] leading-relaxed">
              Combining academic computer science foundations with hands-on software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1: AI & ML Systems */}
            <div className="k-card p-6 sm:p-7 flex flex-col h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1E143B] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD] mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white tracking-tight">
                  Autonomous AI &amp; Multimodal ML
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-ui mt-2.5">
                  Engineering multi-agent frameworks with AutoGen, retrieval-augmented pipelines with LangChain,
                  semantic vector indexing with FAISS, and deep learning models in PyTorch &amp; TensorFlow.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {["AutoGen", "LangChain", "Vector RAG", "FAISS", "OpenAI GPT", "TensorFlow"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-ui px-2.5 py-1 rounded-full border border-[var(--border-line)] text-[#C4B5FD] bg-[#0A0A12]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: Scalable Backend */}
            <div className="k-card p-6 sm:p-7 flex flex-col h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1E143B] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD] mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white tracking-tight">
                  Distributed Backends &amp; APIs
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-ui mt-2.5">
                  Building asynchronous high-concurrency services using FastAPI, Node.js, Express, and Django,
                  coupled with relational schemas in PostgreSQL and document databases in MongoDB.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {["FastAPI", "PostgreSQL", "Node.js", "Express", "MongoDB", "Auth0"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-ui px-2.5 py-1 rounded-full border border-[var(--border-line)] text-[#C4B5FD] bg-[#0A0A12]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: Frontend & Mobile */}
            <div className="k-card p-6 sm:p-7 flex flex-col h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1E143B] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD] mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white tracking-tight">
                  Responsive Web &amp; Mobile Interfaces
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-ui mt-2.5">
                  Delivering fast client experiences in React, Next.js, and React Native, adhering strictly to
                  zero layout shift, keyboard accessibility, and subtle micro-interactions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {["React", "Next.js", "React Native", "Tailwind CSS", "Vite", "TypeScript"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-ui px-2.5 py-1 rounded-full border border-[var(--border-line)] text-[#C4B5FD] bg-[#0A0A12]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 4: DevOps & Cloud */}
            <div className="k-card p-6 sm:p-7 flex flex-col h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1E143B] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD] mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white tracking-tight">
                  Cloud Infrastructure &amp; Containerization
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-ui mt-2.5">
                  Containerized application deployment with Docker, reproducible build environments, Git
                  collaboration workflows, and Microsoft Azure cloud integration.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {["Docker", "Azure Cloud", "Git", "GitHub Actions", "Linux", "CI/CD"].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-ui px-2.5 py-1 rounded-full border border-[var(--border-line)] text-[#C4B5FD] bg-[#0A0A12]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTION TOOLCHAIN & STACK MATRIX (#0F0E1C) */}
      <section className="py-24 border-b border-[var(--border-line)] bg-[#0F0E1C] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 space-y-3 text-center mb-10">
          {/* Section Header with Weight Contrast */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Tech Stack &amp; Tools
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-light text-white">
            Technologies &amp; frameworks{" "}
            <strong className="font-semibold text-white">I work with</strong>
          </h2>

          <p className="font-ui text-sm text-[var(--text-muted)] leading-relaxed">
            The programming languages, frameworks, libraries, and tools I use to build my applications.
          </p>
        </div>

        {/* Full-Bleed Logo Carousel & Centered Filter Pill Bar */}
        <div className="w-full">
          <ToolchainMatrix />
        </div>
      </section>

      {/* 6. DEDICATED PROFESSIONAL EXPERIENCES SECTION (#0A0A12) */}
      <section id="experiences" className="py-24 border-b border-[var(--border-line)] bg-[#0A0A12]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Section Header with Weight Contrast */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Work History
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-white">
                My background &amp;{" "}
                <strong className="font-semibold text-white">professional experience</strong>
              </h2>
              <p className="font-ui text-sm text-[var(--text-muted)] leading-relaxed">
                My journey as an AI/ML engineer, software developer, and researcher across industry roles and research labs.
              </p>
            </div>

            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition shrink-0"
            >
              <span>View Full Experience (7 Roles)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD]" />
            </Link>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.slice(0, 4).map((exp, idx) => {
              const isCurrent = exp.duration.toLowerCase().includes("present");
              return (
                <div
                  key={idx}
                  className={`k-card ${
                    isCurrent ? "k-card-flagship" : ""
                  } p-7 flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-ui text-xs text-[#C4B5FD] px-3 py-1 rounded-full border border-[var(--border-line)] bg-[#0A0A12] flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                        <span>{exp.duration}</span>
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-ui bg-[#8B5CF6]/30 text-white border border-[#C4B5FD]/40">
                          <span>Active Role</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white leading-snug">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-ui font-medium text-[#8B5CF6] mt-1">
                        <Building className="w-3.5 h-3.5 text-[#C4B5FD]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#E2E0F0]/80 leading-relaxed font-ui">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. DEDICATED EDUCATION & ACCREDITATIONS SECTION (#0F0E1C) */}
      <section id="education" className="py-24 border-b border-[var(--border-line)] bg-[#0F0E1C]">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Education &amp; Credentials
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-white">
                Academic foundation &amp;{" "}
                <strong className="font-semibold text-white">certifications</strong>
              </h2>
              <p className="font-ui text-sm text-[var(--text-muted)] leading-relaxed">
                BSc in Computer Science from the University of Colombo alongside verified certifications across AI, machine learning, and full-stack development.
              </p>
            </div>

            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition shrink-0"
            >
              <span>Explore All 23 Certifications</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD]" />
            </Link>
          </div>

          {/* Academic Degrees Grid */}
          <div className="space-y-4">
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] block">
              University Degree
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educations.map((edu, idx) => (
                <div key={idx} className="k-card p-7 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-ui text-[#C4B5FD] px-3 py-1 rounded-full border border-[var(--border-line)] bg-[#0A0A12] flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>{edu.year}</span>
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white pt-1">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-ui text-[#8B5CF6] font-medium">
                      {edu.institution}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed font-ui pt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Top Accreditations Banner */}
          <div className="k-card p-6 sm:p-8 bg-[#151328] border-[var(--border-line)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    Verified Certifications (23 Total)
                  </span>
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-light text-white tracking-tight mt-1">
                  Issued by{" "}
                  <strong className="font-semibold text-white">Leading Institutions &amp; Industry Leaders</strong>
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-ui text-[#C4B5FD] bg-[#0A0A12] px-3.5 py-1.5 rounded-full border border-[var(--border-line)] shrink-0 self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                <span>Verified Certifications</span>
              </div>
            </div>

            {/* Top Engineering Authorities Grid (3 cols on desktop for balanced breathing room) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                {
                  org: "Stanford & DeepLearning.AI",
                  count: "6 Specializations",
                  focus: "Machine Learning & Neural Networks",
                  icon: Brain,
                },
                {
                  org: "Meta (Facebook)",
                  count: "8 Certifications",
                  focus: "React Specialization & Front-End",
                  icon: Layers,
                },
                {
                  org: "Google Cloud",
                  count: "3 Accreditations",
                  focus: "Cloud Computing & AI Tools",
                  icon: Cloud,
                },
                {
                  org: "Microsoft Azure",
                  count: "2 Certifications",
                  focus: "Cloud Architecture & Solutions",
                  icon: Server,
                },
                {
                  org: "Packt (AutoGen)",
                  count: "Specialist",
                  focus: "Multi-Agent Systems & Autonomy",
                  icon: Cpu,
                },
                {
                  org: "IBM",
                  count: "Backend Certified",
                  focus: "Node.js & Scalable REST APIs",
                  icon: Database,
                },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl border border-[var(--border-line)] bg-[#0A0A12] hover:bg-[#18132e] hover:border-[#8B5CF6]/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#151328] border border-[var(--border-line)] flex items-center justify-center shrink-0 group-hover:border-[#8B5CF6]/50 group-hover:bg-[#1f173d] transition-all">
                      <badge.icon className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#C4B5FD] transition-colors" />
                    </div>
                    <span className="font-ui text-[10px] font-semibold text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 px-2.5 py-0.5 rounded-full shrink-0">
                      {badge.count}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-heading font-semibold text-sm text-white group-hover:text-[#C4B5FD] transition-colors">
                      {badge.org}
                    </h5>
                    <p className="font-ui text-xs text-[var(--text-muted)] mt-1">
                      {badge.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar: Key Core Competencies Pills + Direct CTA */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-5 border-t border-[var(--border-line)]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-ui text-xs text-[var(--text-muted)] mr-1">
                  Core Focus:
                </span>
                {[
                  "Convolutional Neural Networks",
                  "AutoGen Multi-Agent Systems",
                  "RAG Pipelines",
                  "React Specialization",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-ui text-[11px] px-2.5 py-1 rounded-md bg-[#0A0A12] text-[#C4B5FD] border border-[var(--border-line)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                to="/certifications"
                className="inline-flex items-center justify-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] shrink-0 self-start lg:self-auto"
              >
                <span>Browse All 23 Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONNECT BANNER (#0A0A12) */}
      <section className="py-24 bg-[#0A0A12]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="k-card p-10 sm:p-14 text-center space-y-6 bg-[#151328] border-[var(--border-line)]">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Let&apos;s Connect
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-light text-white leading-tight">
              Have a project in mind or looking for a{" "}
              <strong className="font-semibold text-white">software&nbsp;solution?</strong>
            </h2>

            <p className="font-ui text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Feel free to send me your questions or discuss a potential project collaboration.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="font-ui text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition"
              >
                Start A Conversation →
              </Link>
              <button
                type="button"
                onClick={copyEmail}
                className="font-ui text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full border border-[var(--border-line)] bg-[#0A0A12] hover:border-[#8B5CF6] text-white transition flex items-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#C4B5FD]" />
                    <span>Copied usamafuward2001@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C4B5FD]" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
