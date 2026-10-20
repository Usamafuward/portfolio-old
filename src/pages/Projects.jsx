import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Filter, Code2, Brain, Globe, Server, Monitor } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { portfolioData } from "@/constants/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI/ML", "Full-Stack", "Backend", "Frontend"];

  // Filtered project list
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
      {/* Page Header with Weight Contrast */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Portfolio &amp; Selected Work
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Featured projects &amp;{" "}
          <strong className="font-semibold text-white">software I&apos;ve built</strong>
        </h1>

        <p className="font-ui text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
          A collection of projects spanning autonomous AI agents, machine learning pipelines, full-stack web applications, and backend APIs. Click the{" "}
          <strong className="px-1.5 py-0.5 rounded border border-[var(--border-line)] text-[#C4B5FD] font-mono">+</strong> on any card to explore its
          architectural breakdown, live demo, and source code.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 p-4 rounded-2xl bg-[#151328] border border-[var(--border-line)] backdrop-blur-md">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium font-ui transition-all ${
                  isSelected
                    ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30 border border-[#A78BFA] font-semibold"
                    : "bg-[#0A0A12] text-[var(--text-muted)] hover:text-white hover:bg-[#1E143B] border border-[var(--border-line)]"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? "bg-black/30 text-white" : "bg-[#151328] text-[#C4B5FD]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C4B5FD] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search systems, frameworks, or keywords..."
            className="w-full pl-9 pr-8 py-2.5 text-xs font-ui rounded-full bg-[#0A0A12] border border-[var(--border-line)] text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C4B5FD] hover:text-white font-mono"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              isFlagship={idx === 0}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl bg-[#151328] border border-[var(--border-line)] space-y-3 font-ui">
          <Code2 className="w-10 h-10 text-[#8B5CF6] mx-auto opacity-70" />
          <h3 className="text-lg font-heading font-semibold text-white">No systems found</h3>
          <p className="text-xs text-[var(--text-muted)]">
            No projects match the current search query or filter selection.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2 text-xs font-medium text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-full transition-colors shadow-md"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
