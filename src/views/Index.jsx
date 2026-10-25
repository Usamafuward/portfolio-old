"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
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
  Plus,
  Minus,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import HeroTopographicWaves from "@/components/ui/HeroTopographicWaves";
import HeroProfileCard from "@/components/ui/HeroProfileCard";
import ToolchainMatrix from "@/components/ui/ToolchainMatrix";
import { portfolioData } from "@/constants/portfolioData";

export default function Index() {
  const { personalInfo, technologies, projects, experiences, educations, certifications } = portfolioData;
  const certCount = (pattern) => certifications.filter((c) => pattern.test(c.organization)).length;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

  // Active drawer state for featured cards
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // When mouse hover opened a drawer (so the click that follows doesn't immediately close it)
  const hoverOpenedAt = useRef(0);

  const openDrawerOnHover = (e, id) => {
    if (e.pointerType !== "mouse") return;
    setActiveDrawer((prev) => {
      if (prev !== id) hoverOpenedAt.current = Date.now();
      return id;
    });
  };

  // Hover state renders at low priority, so decide from the latest value inside the updater
  const toggleDrawer = (id) => {
    setActiveDrawer((prev) => {
      if (prev === id && Date.now() - hoverOpenedAt.current < 600) return prev;
      return prev === id ? null : id;
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative overflow-hidden font-body">
      {/* 2. HERO SECTION WITH ALGORITHMIC TOPOGRAPHIC WAVES & CUTOUT PROFILE */}
      <section className="relative lg:min-h-[calc(100vh-4rem)] flex flex-col justify-center py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-[var(--border-line)]">
        {/* Algorithmic Topographic Wave Field (Zero Particles) */}
        <HeroTopographicWaves />

        {/* Readability scrim: darkens the waves behind the text column */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_90%_55%_at_50%_68%,rgba(10,10,18,0.88)_0%,rgba(10,10,18,0.55)_45%,transparent_75%)] lg:bg-[radial-gradient(ellipse_75%_65%_at_22%_52%,rgba(10,10,18,0.88)_0%,rgba(10,10,18,0.55)_45%,transparent_75%)]"
        />

        {/* Hero Content 2-Column Grid */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Lead, CTA Buttons, Stats Strip */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6" data-reveal-stagger="up" data-reveal-step="110">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-line)] bg-[#151328]/90 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C4B5FD] animate-pulse" />
                <span className="font-ui text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#C4B5FD]">
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
              <p className="font-ui text-sm sm:text-base text-[#BEB9D4] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Hi, I&apos;m Usama Puward — an AI/ML engineer and full-stack developer focused on autonomous AI agents,
                retrieval-augmented pipelines, and high-performance web applications.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <a
                  href="#projects"
                  className="font-ui text-xs sm:text-sm font-medium px-5 sm:px-7 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition"
                >
                  Explore My Work →
                </a>
                <a
                  href="#competencies"
                  className="font-ui text-xs sm:text-sm font-medium px-5 sm:px-7 py-3 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition"
                >
                  Skills &amp; Tech Stack
                </a>
              </div>

              {/* Quiet Stats Strip with Balanced Headroom */}
              <div className="pt-6 border-t border-[var(--border-line)] grid grid-cols-3 max-w-md mx-auto lg:mx-0 gap-4 font-ui">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-white font-heading">BSc CS</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">University of Colombo</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[#C4B5FD] font-heading">{projects.length}</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Projects Built</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[#8B5CF6] font-heading">{certifications.length}</div>
                  <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Certifications</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Cutout Silhouette Portrait */}
            <div className="order-first lg:order-none flex lg:col-span-5 justify-center lg:justify-end">
              <HeroProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS WITH EXPANDING '+' ARCHITECTURE DRAWERS (Alternating Section: #0F0E1C) */}
      <section id="projects" className="py-24 border-b border-[var(--border-line)] bg-[#0F0E1C]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" data-reveal="up">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger="up" data-reveal-step="120">

            {/* PROJECT CARD 1: TARTUCA FOOD & DELIVERY SYSTEM */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card k-card-flagship p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    Full-Stack Monorepo
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    Tartuca Food &amp; Delivery System
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("tartuca")}
                  onPointerEnter={(e) => openDrawerOnHover(e, "tartuca")}
                  aria-expanded={activeDrawer === "tartuca"}
                  aria-label={activeDrawer === "tartuca" ? "Close technical architecture" : "Expand technical architecture"}
                  className="relative z-30 w-9 h-9 rounded-full border border-white/20 hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  {activeDrawer === "tartuca" ? <Minus className="w-4 h-4 text-[#C4B5FD]" /> : <Plus className="w-4 h-4 text-white" />}
                </button>
              </div>

              <p className="text-sm text-[#E2E0F0]/80 leading-relaxed my-4 font-normal">
                Asynchronous FastAPI backend integrated with PostgreSQL and Auth0, Google Maps delivery routing,
                customer ordering portal, and live administrative management.
              </p>

              {/* Animated 1px SVG Vector Diagram: Monorepo Architecture, Google Maps Routing & Data Bus */}
              <div className="border border-white/15 rounded-xl p-3.5 bg-[#0A0A12]/50 mb-4 overflow-hidden relative">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="tartuca-bus-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#C4B5FD" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Left: Client Application & Ordering Portal Frame */}
                  <rect x="18" y="22" width="68" height="84" rx="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.45" />
                  <line x1="18" y1="36" x2="86" y2="36" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
                  <circle cx="28" cy="29" r="2.5" fill="#8B5CF6" />
                  <circle cx="37" cy="29" r="2.5" fill="#C4B5FD" />
                  <line x1="50" y1="29" x2="76" y2="29" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.4" />
                  {/* Cart Item rows */}
                  <line x1="28" y1="48" x2="76" y2="48" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.5" />
                  <line x1="28" y1="58" x2="66" y2="58" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="28" y1="68" x2="72" y2="68" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.5" />
                  {/* Checkout Dispatch button with pulse */}
                  <rect x="28" y="80" width="48" height="14" rx="3" fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="1" />
                  <circle cx="36" cy="87" r="2" className="svg-pulse-dot-violet" fill="#8B5CF6" />
                  <line x1="42" y1="87" x2="68" y2="87" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.8" />

                  {/* Center: Real-Time Logistics Data Bus & GPS Radar */}
                  <line x1="86" y1="64" x2="184" y2="64" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="86" y1="64" x2="184" y2="64" stroke="url(#tartuca-bus-grad)" strokeWidth="1.6" className="svg-flow-right" />
                  
                  {/* Moving Data Packet */}
                  <circle cy="64" r="3.5" fill="#C4B5FD" className="svg-packet-flow" />

                  {/* Geocoding / GPS Map Radar Node (Center) */}
                  <g transform="translate(135, 38)">
                    <circle cx="0" cy="0" r="10" stroke="#8B5CF6" strokeWidth="1" className="svg-radar-ring-1" fill="none" />
                    <circle cx="0" cy="0" r="16" stroke="#C4B5FD" strokeWidth="1" className="svg-radar-ring-2" fill="none" />
                    <circle cx="0" cy="0" r="4.5" fill="#8B5CF6" />
                    <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                    <line x1="0" y1="0" x2="0" y2="26" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
                  </g>

                  {/* Right: FastAPI Microservice & PostgreSQL Storage */}
                  <rect x="184" y="22" width="78" height="84" rx="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.45" />
                  <line x1="184" y1="36" x2="262" y2="36" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
                  <circle cx="194" cy="29" r="2.5" className="svg-pulse-dot-lavender" fill="#C4B5FD" />
                  <line x1="204" y1="29" x2="242" y2="29" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.5" />

                  {/* Stacked Database Cylinders with Live Sync Pulse */}
                  <ellipse cx="223" cy="48" rx="24" ry="5.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="199" y1="48" x2="199" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="247" y1="48" x2="247" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <path d="M 199,60 A 24 5.5 0 0 0 247,60" stroke="#C4B5FD" strokeWidth="1.2" className="svg-db-sync" fill="none" />
                  <line x1="199" y1="60" x2="199" y2="74" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="247" y1="60" x2="247" y2="74" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <path d="M 199,74 A 24 5.5 0 0 0 247,74" stroke="#8B5CF6" strokeWidth="1.2" className="svg-db-sync" fill="none" />

                  {/* Status Indicator Bar */}
                  <line x1="196" y1="88" x2="250" y2="88" stroke="#C4B5FD" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="3 3" />
                  <circle cx="202" cy="98" r="2.5" fill="#8B5CF6" />
                  <line x1="210" y1="98" x2="246" y2="98" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.6" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[#C4B5FD] min-w-0">FastAPI • PostgreSQL • Google Maps • Auth0</span>
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
                <div className="pr-12">
                  <span className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // Tartuca
                  </span>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-xl font-semibold text-white">Monorepo Architecture</h4>
                  <ul className="text-sm text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Backend Engine:</strong> Asynchronous FastAPI microservice connected to PostgreSQL &amp; SQLAlchemy.</li>
                    <li><strong>Geocoding &amp; Tracking:</strong> Dynamic distance matrix and live map pin placement via Google Maps API.</li>
                    <li><strong>Identity &amp; Portals:</strong> Enterprise Auth0 OAuth2 token flow with role-based user and admin dashboards.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <a
                    href="https://tartuca.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD] hover:bg-white/20 transition"
                  >
                    Live Site ↗
                  </a>
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    FastAPI
                  </span>
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
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

            {/* PROJECT CARD 2: AUTOMATED PDF RAG PIPELINE */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Flagship AI / NLP
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    Automated PDF RAG Pipeline
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("rag")}
                  onPointerEnter={(e) => openDrawerOnHover(e, "rag")}
                  aria-expanded={activeDrawer === "rag"}
                  aria-label={activeDrawer === "rag" ? "Close technical architecture" : "Expand technical architecture"}
                  className="relative z-30 w-9 h-9 rounded-full border border-[var(--border-line)] hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  {activeDrawer === "rag" ? <Minus className="w-4 h-4 text-[#C4B5FD]" /> : <Plus className="w-4 h-4 text-white" />}
                </button>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed my-4 font-normal">
                Retrieval-Augmented Generation engine for automated PDF ingestion, semantic chunking, vector
                embeddings, and context-grounded multimodal synthesis.
              </p>

              {/* Animated 1px SVG Vector Diagram: PDF Scanning, Vector Embeddings & LLM Grounding */}
              <div className="border border-[var(--border-line)] rounded-xl p-3.5 bg-[#0F0E1C] mb-4 overflow-hidden relative">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="rag-laser-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
                    </linearGradient>
                    {/* userSpaceOnUse: a bounding-box gradient renders nothing on a perfectly horizontal line */}
                    <linearGradient id="rag-stream-grad" gradientUnits="userSpaceOnUse" x1="74" y1="64" x2="112" y2="64">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* Left: PDF Document with Text Tokens */}
                  <rect x="18" y="20" width="56" height="88" rx="4" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                  {/* Dog-ear corner */}
                  <polygon points="62,20 74,32 62,32" fill="#8B5CF6" fillOpacity="0.4" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
                  {/* Document Header */}
                  <rect x="26" y="28" width="28" height="6" rx="2" fill="#8B5CF6" fillOpacity="0.5" />
                  {/* Text lines */}
                  <line x1="26" y1="42" x2="64" y2="42" stroke="#C4B5FD" strokeWidth="1.2" strokeOpacity="0.7" />
                  <line x1="26" y1="52" x2="58" y2="52" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="26" y1="62" x2="62" y2="62" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="26" y1="72" x2="52" y2="72" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="26" y1="82" x2="60" y2="82" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.6" />
                  <line x1="26" y1="92" x2="48" y2="92" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Animated Laser Scanning Beam */}
                  <g className="svg-laser-sweep">
                    <line x1="14" y1="26" x2="78" y2="26" stroke="#C4B5FD" strokeWidth="1.8" />
                    <polygon points="14,26 78,26 74,18 18,18" fill="url(#rag-laser-glow)" />
                  </g>

                  {/* Center: High-Dimensional FAISS Vector Orbit & Neural Core */}
                  <line x1="74" y1="64" x2="112" y2="64" stroke="url(#rag-stream-grad)" strokeWidth="1.4" className="svg-flow-right" />

                  {/* Outer Orbit (Continuous 360 Spin) */}
                  <g className="svg-orbit-spin">
                    <circle cx="140" cy="64" r="28" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
                    <circle cx="140" cy="36" r="3.5" fill="#8B5CF6" />
                    <circle cx="165" cy="78" r="3" fill="#C4B5FD" />
                  </g>

                  {/* Counter Orbit (360 Reverse Spin) */}
                  <g className="svg-orbit-counter">
                    <circle cx="140" cy="64" r="18" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.6" />
                    <circle cx="128" cy="52" r="2.5" fill="#FFFFFF" />
                  </g>

                  {/* Central LLM Neural Nucleus with dynamic breathing pulse */}
                  <circle cx="140" cy="64" r="10" stroke="#FFFFFF" strokeWidth="1.4" fill="#8B5CF6" fillOpacity="0.35" className="svg-pulse-core" />

                  {/* Right: Similarity Match Streams into Context Synthesis */}
                  <line x1="168" y1="64" x2="208" y2="44" stroke="#8B5CF6" strokeWidth="1.4" className="svg-flow-right" />
                  <line x1="168" y1="64" x2="208" y2="84" stroke="#C4B5FD" strokeWidth="1.4" className="svg-flow-right" />

                  {/* Response Block 1 (Top) */}
                  <rect x="208" y="30" width="56" height="26" rx="4" stroke="#8B5CF6" strokeWidth="1" fill="#151328" fillOpacity="0.7" />
                  <line x1="216" y1="39" x2="254" y2="39" stroke="#C4B5FD" strokeWidth="1.2" />
                  <line x1="216" y1="47" x2="244" y2="47" stroke="#9E98B8" strokeWidth="1" strokeOpacity="0.7" />

                  {/* Response Block 2 (Bottom) */}
                  <rect x="208" y="70" width="56" height="26" rx="4" stroke="#C4B5FD" strokeWidth="1" fill="#151328" fillOpacity="0.7" />
                  <line x1="216" y1="79" x2="250" y2="79" stroke="#8B5CF6" strokeWidth="1.2" />
                  <line x1="216" y1="87" x2="240" y2="87" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.7" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[var(--text-muted)] min-w-0">Google API • Vector DB • Python</span>
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
                <div className="pr-12">
                  <span className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // RAG
                  </span>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-xl font-semibold text-white">Pipeline Architecture</h4>
                  <ul className="text-sm text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Ingestion:</strong> Automated PDF parsing &amp; token-aware semantic chunking.</li>
                    <li><strong>Embeddings:</strong> High-dimensional vector indexing via Google Gemini API.</li>
                    <li><strong>Retrieval:</strong> Top-K cosine similarity matching with low-latency grounding.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    Vector Embeddings
                  </span>
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
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

            {/* PROJECT CARD 3: AXIS SOLUTIONS - STARTUP WEBSITE */}
            <article
              onMouseLeave={() => setActiveDrawer(null)}
              className="k-card p-7 flex flex-col justify-between min-h-[430px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Modern Frontend &amp; UI
                  </span>
                  <h3 className="font-heading text-[22px] font-semibold text-white mt-1 leading-snug">
                    Axis Solutions - Startup Website
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toggleDrawer("axis")}
                  onPointerEnter={(e) => openDrawerOnHover(e, "axis")}
                  aria-expanded={activeDrawer === "axis"}
                  aria-label={activeDrawer === "axis" ? "Close technical architecture" : "Expand technical architecture"}
                  className="relative z-30 w-9 h-9 rounded-full border border-[var(--border-line)] hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white transition-all duration-300 shrink-0 focus:outline-none"
                >
                  {activeDrawer === "axis" ? <Minus className="w-4 h-4 text-[#C4B5FD]" /> : <Plus className="w-4 h-4 text-white" />}
                </button>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed my-4 font-normal">
                Modern tech startup platform and corporate landing portal featuring dark-mode ambient crimson aesthetics,
                interactive microservice metrics telemetry, and high-velocity edge deployment.
              </p>

              {/* Animated 1px SVG Vector Diagram: Startup Telemetry HUD, Dynamic Equalizer & Cloud Edge Mesh */}
              <div className="border border-[var(--border-line)] rounded-xl p-3.5 bg-[#0F0E1C] mb-4 overflow-hidden relative">
                <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
                  <defs>
                    <clipPath id="telemetry-box-clip">
                      <rect x="96" y="46" width="86" height="56" rx="4" />
                    </clipPath>
                  </defs>
                  {/* Dashboard HUD Outer Frame */}
                  <rect x="16" y="18" width="248" height="94" rx="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" />
                  {/* Title Bar with Traffic Controls */}
                  <line x1="16" y1="36" x2="264" y2="36" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15" />
                  <circle cx="28" cy="27" r="2.5" fill="#7C3AED" className="svg-pulse-dot-violet" />
                  <circle cx="37" cy="27" r="2.5" fill="#8B5CF6" />
                  <circle cx="46" cy="27" r="2.5" fill="#C4B5FD" className="svg-pulse-dot-lavender" />
                  <rect x="62" y="23" width="70" height="8" rx="2" fill="#8B5CF6" fillOpacity="0.25" />
                  <rect x="194" y="23" width="58" height="8" rx="2" fill="#C4B5FD" fillOpacity="0.15" stroke="#C4B5FD" strokeWidth="0.8" strokeOpacity="0.4" />

                  {/* Left: Dynamic Real-Time Microservice Equalizer */}
                  <rect x="26" y="46" width="62" height="56" rx="4" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.35" fill="#151328" fillOpacity="0.5" />
                  <line x1="32" y1="54" x2="78" y2="54" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.6" />
                  {/* 4 Animated Telemetry Bars with variable height physics */}
                  <rect x="32" width="7" rx="1.5" fill="#8B5CF6" className="svg-bar-1" />
                  <rect x="44" width="7" rx="1.5" fill="#C4B5FD" className="svg-bar-2" />
                  <rect x="56" width="7" rx="1.5" fill="#8B5CF6" fillOpacity="0.8" className="svg-bar-3" />
                  <rect x="68" width="7" rx="1.5" fill="#C4B5FD" fillOpacity="0.9" className="svg-bar-4" />

                  {/* Center: Live Telemetry Waveform & Performance Trace */}
                  <rect x="96" y="46" width="86" height="56" rx="4" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.25" fill="#151328" fillOpacity="0.4" />
                  {/* Grid background reference lines */}
                  <line x1="102" y1="62" x2="176" y2="62" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.1" />
                  <line x1="102" y1="76" x2="176" y2="76" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.1" />
                  <line x1="102" y1="90" x2="176" y2="90" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.1" />
                  
                  {/* Clipped Telemetry Waveform contained safely inside the box */}
                  <g clipPath="url(#telemetry-box-clip)">
                    {/* Static Baseline Guide */}
                    <path
                      d="M 98,80 C 106,80 110,60 118,60 C 126,60 128,84 136,84 C 144,84 148,62 156,62 C 164,62 170,76 180,74"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      fill="none"
                    />
                    {/* Dynamic Tracing Waveform */}
                    <path
                      d="M 98,80 C 106,80 110,60 118,60 C 126,60 128,84 136,84 C 144,84 148,62 156,62 C 164,62 170,76 180,74"
                      stroke="#C4B5FD"
                      strokeWidth="1.6"
                      className="svg-telemetry-wave"
                      fill="none"
                    />
                  </g>

                  {/* Right: Edge CDN Gateway & Satellite Mesh */}
                  <rect x="190" y="46" width="64" height="56" rx="4" stroke="#C4B5FD" strokeWidth="1" strokeOpacity="0.35" fill="#151328" fillOpacity="0.5" />
                  {/* Concentric Wireless Signal Rings */}
                  <circle cx="222" cy="70" r="8" stroke="#8B5CF6" strokeWidth="1" className="svg-radar-ring-1" fill="none" />
                  <circle cx="222" cy="70" r="14" stroke="#C4B5FD" strokeWidth="1" className="svg-radar-ring-2" fill="none" />
                  {/* Central Edge Beacon */}
                  <circle cx="222" cy="70" r="6" stroke="#C4B5FD" strokeWidth="1.2" fill="#8B5CF6" className="svg-edge-pulse" />
                  <circle cx="222" cy="70" r="2.5" fill="#FFFFFF" />

                  {/* Satellite nodes connected with streaming flows */}
                  <circle cx="202" cy="56" r="2" fill="#C4B5FD" />
                  <line x1="202" y1="56" x2="222" y2="70" stroke="#C4B5FD" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.5" />
                  <circle cx="242" cy="56" r="2" fill="#8B5CF6" />
                  <line x1="242" y1="56" x2="222" y2="70" stroke="#8B5CF6" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.5" />
                  <line x1="198" y1="94" x2="246" y2="94" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3 2" className="svg-flow-right" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-ui pt-1 gap-2">
                <span className="text-[var(--text-muted)] min-w-0">React 19 • Tailwind CSS • Framer Motion • Vite</span>
                <button
                  type="button"
                  onClick={() => toggleDrawer("axis")}
                  className="underline text-white hover:text-[#C4B5FD] transition whitespace-nowrap shrink-0"
                >
                  Architecture →
                </button>
              </div>

              {/* Circular Ripple Expanding Drawer */}
              <div className={`card-drawer ${activeDrawer === "axis" ? "open" : ""} flex flex-col justify-between`}>
                <div className="pr-12">
                  <span className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    System Spec // Axis Solutions
                  </span>
                </div>
                <div className="space-y-3 my-auto py-2">
                  <h4 className="font-heading text-xl font-semibold text-white">Frontend &amp; Edge Architecture</h4>
                  <ul className="text-sm text-[#E2E0F0] space-y-2 leading-relaxed list-disc pl-4 font-ui">
                    <li><strong>Design System:</strong> Ambient crimson dark mode with glassmorphic cards and typography hierarchy.</li>
                    <li><strong>Telemetry HUD:</strong> Real-time interactive architecture metrics, latency monitors, and cloud counters.</li>
                    <li><strong>Performance:</strong> Ultra-fast response with Vite asset splitting and Vercel edge CDN caching.</li>
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <a
                    href="https://axis-solutions-startup.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD] hover:bg-white/20 transition"
                  >
                    Live Site ↗
                  </a>
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    React 19
                  </span>
                  <span className="text-[12px] font-ui px-2.5 py-1 rounded-full bg-white/10 text-[#C4B5FD]">
                    Tailwind CSS
                  </span>
                  <a
                    href="https://github.com/Usamafuward/axis_solutions"
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
          <div className="text-center mt-12" data-reveal="fade">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-6 py-3 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition"
            >
              <span>View All {projects.length} Projects in Catalog</span>
              <ChevronRight className="w-4 h-4 text-[#C4B5FD]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORE ENGINEERING PILLARS (Canvas Section: #0A0A12) */}
      <section id="competencies" className="py-24 border-b border-[var(--border-line)] bg-[#0A0A12]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 space-y-3" data-reveal="up">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger="up">
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
        <div className="max-w-6xl mx-auto px-6 space-y-3 text-center mb-10" data-reveal="up">
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
        <div className="w-full" data-reveal="fade">
          <ToolchainMatrix />
        </div>
      </section>

      {/* 6. DEDICATED PROFESSIONAL EXPERIENCES SECTION (#0A0A12) */}
      <section id="experiences" className="py-24 border-b border-[var(--border-line)] bg-[#0A0A12]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Section Header with Weight Contrast */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-reveal="up">
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
              href="/experiences"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition shrink-0"
            >
              <span>View Full Experience ({experiences.length} Roles)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD]" />
            </Link>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger="up">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" data-reveal="up">
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
              href="/certifications"
              className="inline-flex items-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full border border-[var(--border-line)] bg-[#151328] hover:border-[#8B5CF6] text-white transition shrink-0"
            >
              <span>Explore All {certifications.length} Certifications</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD]" />
            </Link>
          </div>

          {/* Academic Degrees Grid */}
          <div className="space-y-4">
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] block">
              University Degree
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger="up">
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
          <div className="k-card p-6 sm:p-8 bg-[#151328] border-[var(--border-line)] space-y-6" data-reveal="up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
                    Verified Certifications ({certifications.length} Total)
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5" data-reveal-stagger="scale" data-reveal-step="60">
              {[
                {
                  org: "Stanford & DeepLearning.AI",
                  count: plural(certCount(/DeepLearning\.AI|Stanford/), "Specialization"),
                  focus: "Machine Learning & Neural Networks",
                  icon: Brain,
                },
                {
                  org: "Meta (Facebook)",
                  count: plural(certCount(/Meta/), "Certification"),
                  focus: "React Specialization & Front-End",
                  icon: Layers,
                },
                {
                  org: "Google Cloud",
                  count: plural(certCount(/Google/), "Accreditation"),
                  focus: "Cloud Computing & AI Tools",
                  icon: Cloud,
                },
                {
                  org: "Microsoft Azure",
                  count: plural(certCount(/Microsoft|Styava/), "Certification"),
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
                href="/certifications"
                className="inline-flex items-center justify-center gap-2 font-ui text-xs font-medium px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] shrink-0 self-start lg:self-auto"
              >
                <span>Browse All {certifications.length} Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONNECT BANNER (#0A0A12) */}
      <section className="py-24 bg-[#0A0A12]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="k-card p-6 sm:p-10 lg:p-14 text-center space-y-6 bg-[#151328] border-[var(--border-line)]" data-reveal="scale">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Let&apos;s Connect
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-light text-white leading-tight">
              Have a project in mind or looking for a{" "}
              <strong className="font-semibold text-white">software&nbsp;solution?</strong>
            </h2>

            <p className="font-ui text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Feel free to send me your questions or discuss a potential project collaboration.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="font-ui text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition"
              >
                Start A Conversation →
              </Link>
              <button
                type="button"
                onClick={copyEmail}
                className="font-ui text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full border border-[var(--border-line)] bg-[#0A0A12] hover:border-[#8B5CF6] text-white transition flex items-center gap-2 max-w-full min-w-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#C4B5FD]" />
                    <span className="truncate">Copied usamafuward2001@gmail.com</span>
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
