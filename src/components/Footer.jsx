import React from "react";
import Link from "next/link";
import { menuItems, resumeLink } from "./Header";
import { portfolioData } from "@/constants/portfolioData";

export default function Footer() {
  const { socialLinks } = portfolioData;

  return (
    <footer className="border-t border-[var(--border-line)] bg-[#0F0E1C] py-14 z-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-line)]" data-reveal-stagger="up">
          {/* Identity & Bio */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <img
                src="/favicon.ico"
                alt="Usama Puward Logo"
                className="w-7 h-7 rounded-lg object-contain transition-transform"
              />
              <span className="font-heading font-semibold text-base text-white tracking-tight group-hover:text-[#C4B5FD] transition-colors">
                USAMA PUWARD
              </span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] max-w-sm leading-relaxed font-ui">
              AI/ML Engineer &amp; Full-Stack Developer and a Computer Science Graduate. Passionate about building intelligent systems,
              autonomous AI agents, and modern web applications.
            </p>
            <div className="text-[11px] font-ui text-[#C4B5FD] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD]" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-ui font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] block">
              Navigation
            </span>
            <ul className="space-y-0.5 font-ui text-xs">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="inline-block py-1.5 text-[var(--text-muted)] hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels & Social */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-ui font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] block">
              Direct Channels
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform || social.label}
                    className="w-9 h-9 rounded-full bg-[#151328] hover:bg-[#8B5CF6] border border-[var(--border-line)] text-[#C4B5FD] hover:text-white flex items-center justify-center transition"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:usamafuward2001@gmail.com"
              className="text-xs text-[var(--text-muted)] hover:text-white font-ui block pt-1 underline"
            >
              usamafuward2001@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Resumes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] font-ui gap-3" data-reveal="fade">
          <p>© {new Date().getFullYear()} Usama Puward. Quiet and Confident Engineering.</p>
          <div className="flex items-center gap-4">
            <a
              href={resumeLink.href}
              download={resumeLink.download}
              className="hover:text-white transition"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
