"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export const menuItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/experiences", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export const resumeLink = {
  href: "/resume.pdf",
  label: "Curriculum Vitae",
  download: "Usama_Puward_Resume.pdf",
};

export const resumeLinks = [resumeLink];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[var(--border-line)] bg-[#0A0A12]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/favicon.ico"
            alt="Usama Puward Logo"
            className="w-7 h-7 rounded-lg object-contain transition-transform"
          />
          <span className="font-heading font-semibold text-sm sm:text-base tracking-tight whitespace-nowrap text-white group-hover:text-[#C4B5FD] transition-colors">
            USAMA PUWARD
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-ui text-xs font-medium text-[var(--text-muted)]">
          {menuItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`transition-colors py-1 ${
                  active
                    ? "border-b border-[#8B5CF6] text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Direct Download CV Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={resumeLink.href}
            download={resumeLink.download}
            aria-label="Download CV"
            className="font-ui text-xs font-medium px-3.5 sm:px-5 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition flex items-center gap-1.5 shadow-md whitespace-nowrap"
          >
            {/* Short label on phones so the header stays on one line */}
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
            <AiOutlineDownload className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 rounded-full bg-[#151328] border border-[var(--border-line)] flex items-center justify-center text-[#C4B5FD]"
          >
            {showMenu ? <AiOutlineClose className="w-4 h-4" /> : <AiOutlineMenu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[var(--border-line)] bg-[#0A0A12]/95 backdrop-blur-xl px-6 py-4"
          >
            <div className="flex flex-col gap-2 font-ui">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setShowMenu(false)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isActive(item.to)
                      ? "bg-[#1E143B] text-white border border-[#8B5CF6]/40"
                      : "text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={resumeLink.href}
                download={resumeLink.download}
                onClick={() => setShowMenu(false)}
                className="mt-1 px-3 py-2.5 rounded-xl text-xs font-medium bg-[#8B5CF6] hover:bg-[#7C3AED] text-white flex items-center justify-center gap-2 transition"
              >
                <span>Download CV</span>
                <AiOutlineDownload className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
