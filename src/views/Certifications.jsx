"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Award, ExternalLink, ShieldCheck, CheckCircle2, GraduationCap } from "lucide-react";
import { portfolioData } from "@/constants/portfolioData";

export default function Certifications() {
  const { certifications, educations } = portfolioData;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("All");

  const issuers = [
    "All",
    "Meta",
    "DeepLearning.AI",
    "Google Cloud",
    "Microsoft",
    "IBM",
    "Packt",
    "Stanford University",
  ];

  const filteredCerts = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesIssuer =
        selectedIssuer === "All" ||
        cert.organization.toLowerCase().includes(selectedIssuer.toLowerCase());
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesIssuer && matchesSearch;
    });
  }, [certifications, selectedIssuer, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 pb-20 space-y-14">
      {/* Page Header with Weight Contrast */}
      <div className="space-y-4 max-w-3xl" data-reveal-stagger="up">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Education &amp; Certifications
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Certifications &amp;{" "}
          <strong className="font-semibold text-white">academic degrees</strong>
        </h1>

        <p className="font-ui text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
          A collection of verified specializations and credentials I&apos;ve earned across autonomous
          AI frameworks, machine learning, cloud architecture, and modern full-stack development, authorized by Meta, Google, Stanford, Microsoft, and DeepLearning.AI.
        </p>
      </div>

      {/* University Degree Programs */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Academic Degrees &amp; Education
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-reveal-stagger="up">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="k-card p-7 space-y-3 flex flex-col justify-between"
            >
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

      {/* Filter and Search Bar */}
      <div data-reveal="up" className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 p-4 rounded-2xl bg-[#151328] border border-[var(--border-line)] backdrop-blur-md">
        {/* Issuer Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {issuers.map((issuer) => {
            const isSelected = selectedIssuer === issuer;
            const count =
              issuer === "All"
                ? certifications.length
                : certifications.filter((c) =>
                    c.organization.toLowerCase().includes(issuer.toLowerCase())
                  ).length;

            return (
              <button
                key={issuer}
                type="button"
                onClick={() => setSelectedIssuer(issuer)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium font-ui transition-all ${
                  isSelected
                    ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30 border border-[#A78BFA] font-semibold"
                    : "bg-[#0A0A12] text-[var(--text-muted)] hover:text-white hover:bg-[#1E143B] border border-[var(--border-line)]"
                }`}
              >
                <span>{issuer}</span>
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
            placeholder="Search credential, authority, or topic..."
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

      {/* Certifications Grid */}
      {filteredCerts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
              className="k-card p-6 flex flex-col justify-between group hover:border-[#8B5CF6] transition-all hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Organization Badge with Favicon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-ui tracking-wide text-[#C4B5FD] bg-[#0A0A12] border border-[var(--border-line)]">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt=""
                        className="w-3.5 h-3.5 rounded-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    )}
                    <span>{cert.organization}</span>
                  </span>
                  <Award className="w-4 h-4 text-[#C4B5FD]/50 group-hover:text-[#C4B5FD] transition-colors" />
                </div>

                {/* Certification Title */}
                <h3 className="font-heading text-lg font-semibold text-white tracking-tight group-hover:text-[#C4B5FD] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#E2E0F0]/80 leading-relaxed font-ui">
                  {cert.description}
                </p>
              </div>

              {/* Action row with verified credential link */}
              <div className="pt-4 mt-4 border-t border-[var(--border-line)] flex items-center justify-between">
                <span className="text-[11px] font-ui text-[var(--text-muted)] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Credential</span>
                </span>

                <a
                  href={cert.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-ui font-medium text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all shadow-sm"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl bg-[#151328] border border-[var(--border-line)] space-y-3 font-ui">
          <Award className="w-10 h-10 text-[#8B5CF6] mx-auto opacity-70" />
          <h3 className="text-lg font-heading font-semibold text-white">No certifications found</h3>
          <p className="text-xs text-[var(--text-muted)]">
            No certifications match the selected issuer or query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedIssuer("All");
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
