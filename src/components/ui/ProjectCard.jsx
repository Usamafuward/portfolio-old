import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Plus,
  Minus,
  Brain,
  Globe,
  Server,
  Monitor,
  Code,
  Smartphone,
  Shield,
  Layers,
} from "lucide-react";
import PropTypes from "prop-types";
import { getProjectLinks, categorizeProjectLinks } from "@/constants/portfolioData";

export default function ProjectCard({ project, isFlagship = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return Brain;
      case "Full-Stack":
        return Globe;
      case "Backend":
        return Server;
      case "Frontend":
        return Monitor;
      default:
        return Code;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);
  const allLinks = getProjectLinks(project);
  const { hosted, code } = categorizeProjectLinks(allLinks);
  const primaryLiveLink = hosted[0] || null;

  return (
    <article
      onMouseLeave={() => setIsOpen(false)}
      className={`k-card ${
        isFlagship ? "k-card-flagship" : ""
      } p-7 flex flex-col justify-between min-h-[480px] group`}
    >
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
            <span
              className={`font-ui text-[11px] font-semibold uppercase tracking-[0.14em] ${
                isFlagship ? "text-[#C4B5FD]" : "text-[var(--text-muted)]"
              }`}
            >
              {isFlagship ? `Flagship // ${project.category}` : project.category || "Engineering"}
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-[22px] font-semibold text-white mt-1.5 leading-snug group-hover:text-[#C4B5FD] transition-colors">
            {project.title}
          </h3>
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label={`Expand technical architecture for ${project.title}`}
          className="w-9 h-9 rounded-full border border-[var(--border-line)] bg-[#0A0A12] hover:border-[#8B5CF6] hover:bg-[#1E143B] flex items-center justify-center text-lg text-white hover:text-[#C4B5FD] transition-all duration-300 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
        >
          <span
            className={`inline-flex items-center justify-center transition-transform duration-500 ease-out ${
              isOpen ? "rotate-45 text-[#C4B5FD]" : "rotate-0 text-white"
            }`}
          >
            <Plus className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-[#E2E0F0]/80 leading-relaxed my-3 font-normal line-clamp-3">
        {project.description}
      </p>

      {/* Media or Visual Technical 1px Diagram */}
      <div className="border border-[var(--border-line)] rounded-xl overflow-hidden bg-[#0A0A12] mb-4 w-full h-auto relative flex items-center justify-center">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        ) : (
          /* Fallback 1px hairline SVG line-art diagram */
          <svg viewBox="0 0 280 130" className="w-full h-28" fill="none" aria-hidden="true">
            <rect x="20" y="25" width="50" height="75" rx="4" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="28" y1="40" x2="60" y2="40" stroke="#C4B5FD" strokeWidth="1" />
            <line x1="28" y1="55" x2="52" y2="55" stroke="#9E98B8" strokeWidth="1" />
            <line x1="28" y1="70" x2="56" y2="70" stroke="#9E98B8" strokeWidth="1" />
            <line x1="16" y1="36" x2="74" y2="36" stroke="#8B5CF6" strokeWidth="1.4" className="scan-line" />
            <line x1="70" y1="62" x2="110" y2="62" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3" />
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
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151328] via-transparent to-transparent pointer-events-none opacity-50" />
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between text-xs font-ui pt-2 border-t border-[var(--border-line)] gap-2">
        <span className="text-[var(--text-muted)] truncate max-w-[200px]">
          {project.technologies?.slice(0, 3).join(" • ")}
        </span>
        <div className="flex items-center gap-3 shrink-0">
          {primaryLiveLink && (
            <a
              href={primaryLiveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4B5FD] hover:text-white transition flex items-center gap-1 font-medium"
            >
              <span>{primaryLiveLink.label}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white hover:text-[#C4B5FD] transition underline flex items-center gap-1 shrink-0 whitespace-nowrap"
          >
            <span>Architecture</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Circular Expanding Drawer Overlay (clip-path circle pattern) */}
      <div className={`card-drawer ${isOpen ? "open" : ""} flex flex-col justify-between`}>
        {/* Drawer Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C4B5FD]">
              System Spec // {project.category || "Architecture"}
            </span>
            <h4 className="font-heading text-lg font-semibold text-white mt-1">
              {project.title}
            </h4>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close architecture panel"
            className="w-9 h-9 shrink-0 rounded-full border border-white/25 hover:border-white flex items-center justify-center text-lg text-white transition focus:outline-none"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Spec Body */}
        <div className="space-y-4 my-auto py-2 overflow-y-auto max-h-[220px] scrollbar-thin pr-1">
          <p className="text-xs text-[#E2E0F0] leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-ui uppercase tracking-wider text-[#C4B5FD] font-semibold block">
              Core Tech Stack &amp; Protocol
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-ui px-2.5 py-0.5 rounded-full bg-white/10 text-[#C4B5FD] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Categorized Actions (Hosted Deployments & Repositories) */}
        <div className="space-y-2 pt-3 border-t border-white/15">
          <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] font-ui">
            <span>Project Resources ({allLinks.length})</span>
            <span>Esc to close</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Live Hosted Sites */}
            {hosted.map((link, idx) => (
              <a
                key={`hosted-${idx}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-ui font-medium rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition shadow-md"
              >
                <ExternalLink className="w-3 h-3" />
                <span>{link.label}</span>
              </a>
            ))}

            {/* Repositories & Source Code */}
            {code.map((link, idx) => (
              <a
                key={`code-${idx}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-ui font-medium rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
              >
                <Github className="w-3 h-3 text-[#C4B5FD]" />
                <span>{link.label}</span>
              </a>
            ))}

            {allLinks.length === 0 && project.to && (
              <a
                href={project.to}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-ui font-medium rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition shadow-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Explore Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string,
    category: PropTypes.string,
    thumbnail: PropTypes.any,
    technologies: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        type: PropTypes.string,
      })
    ),
  }).isRequired,
  isFlagship: PropTypes.bool,
};
