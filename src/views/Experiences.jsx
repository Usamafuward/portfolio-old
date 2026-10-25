"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, Building, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/constants/portfolioData";

export default function Experiences() {
  const { experiences } = portfolioData;

  // Timeline line fills from top to bottom as the list scrolls through the viewport
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const lineFill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Stop the line at the centre of the last dot instead of the bottom of the last card
  const [lineBottom, setLineBottom] = useState(0);
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const measure = () => {
      const nodes = timeline.querySelectorAll("[data-timeline-node]");
      const last = nodes[nodes.length - 1];
      if (!last) return;
      // Layout offsets (not getBoundingClientRect) so the cards' reveal slide doesn't skew it
      const item = last.offsetParent;
      const centre = item.offsetTop + last.offsetTop + last.offsetHeight / 2;
      setLineBottom(Math.max(0, timeline.offsetHeight - centre));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 pb-20 space-y-14">
      {/* Page Header with Weight Contrast */}
      <div className="space-y-4 max-w-3xl" data-reveal-stagger="up">
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
      <div ref={timelineRef} className="relative pl-6 sm:pl-10 space-y-10">
        {/* Line track + scroll-driven violet fill (centred under the node dots) */}
        <div
          aria-hidden="true"
          style={{ bottom: lineBottom }}
          className="absolute left-[2px] top-0 w-0.5 rounded-full bg-[var(--border-line)]"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: lineFill, bottom: lineBottom }}
          className="absolute left-[2px] -top-6 w-0.5 rounded-full origin-top bg-gradient-to-b from-[#C4B5FD] via-[#8B5CF6] to-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.6)]"
        />

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
              {/* Timeline Spine Node Indicator (lights up as the line fill reaches it) */}
              <motion.div
                data-timeline-node
                {...(!isCurrent && {
                  initial: { borderColor: "rgba(139, 92, 246, 0.18)" },
                  whileInView: { borderColor: "#8B5CF6" },
                  viewport: { once: true, margin: "0px 0px 0% 0px" },
                  transition: { duration: 0.4 },
                })}
                className={`absolute -left-[31px] sm:-left-[47px] w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                  isCurrent
                    ? "bg-[#8B5CF6] border-[#C4B5FD] shadow-[0_0_15px_rgba(139,92,246,0.7)]"
                    : "bg-[#0A0A12]"
                }`}
              >
                {isCurrent && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </motion.div>

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
