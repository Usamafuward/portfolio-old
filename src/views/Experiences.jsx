import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/constants/portfolioData";

export default function Experiences() {
  const { experiences } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-14">
      {/* Page Header with Weight Contrast */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Career Journey &amp; Work Experience
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
          Work experience &amp;{" "}
          <strong className="font-semibold text-white">roles I&apos;ve held</strong>
        </h1>

        <p className="font-ui text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-normal">
          A timeline of my professional roles, internships, and engineering contributions across AI development,
          full-stack applications, and research labs.
        </p>
      </div>

      {/* Chronological Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-10 border-l border-[var(--border-line)]">
        {experiences.map((exp, index) => {
          const isCurrent = exp.duration.toLowerCase().includes("present");

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Spine Node Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCurrent
                    ? "bg-[#8B5CF6] border-[#C4B5FD] shadow-[0_0_15px_rgba(139,92,246,0.7)]"
                    : "bg-[#0A0A12] border-[var(--border-line)] group-hover:border-[#8B5CF6]"
                }`}
              >
                {isCurrent && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
                  isCurrent
                    ? "k-card-flagship p-7 border-[#8B5CF6]/50 shadow-[0_12px_36px_-10px_rgba(139,92,246,0.3)]"
                    : "k-card p-7 border-[var(--border-line)] hover:border-[#8B5CF6] hover:-translate-y-1"
                }`}
              >
                {/* Top Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[#C4B5FD] transition-colors">
                        {exp.title}
                      </h2>
                      {isCurrent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-ui bg-[#8B5CF6]/30 text-white border border-[#C4B5FD]/40">
                          <span>Active Role</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1.5 text-xs sm:text-sm font-ui font-medium text-[#8B5CF6]">
                      <Building className="w-4 h-4 text-[#C4B5FD]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A12] border border-[var(--border-line)] text-xs font-ui text-[#C4B5FD] w-fit self-start sm:self-auto shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-[#E2E0F0]/85 leading-relaxed pt-2 font-ui">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
