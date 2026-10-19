import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export const menuItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Featured Systems" },
  { to: "/certifications", label: "Certifications" },
  { to: "/experiences", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export const resumeLinks = [
  {
    href: "/SE_CV.pdf",
    label: "Software Engineering CV",
    download: "Usama_Puward_Resume_SE.pdf",
  },
  {
    href: "/AI_ML_CV.pdf",
    label: "AI / ML Engineering CV",
    download: "Usama_Puward_Resume_ML.pdf",
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCvDropdown, setShowCvDropdown] = useState(false);
  const cvDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
    setShowCvDropdown(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
        setShowCvDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[var(--border-line)] bg-[#0A0A12]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] group-hover:scale-125 transition-transform" />
          <span className="font-heading font-semibold text-base tracking-tight text-white group-hover:text-[#C4B5FD] transition-colors">
            USAMA PUWARD
          </span>
          <span className="font-ui text-[11px] px-2.5 py-0.5 rounded-full border border-[var(--border-line)] text-[#C4B5FD] hidden sm:inline bg-[#151328]">
            AI/ML &amp; Full-Stack
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-ui text-xs font-medium text-[var(--text-muted)]">
          {menuItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
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

        {/* Right Action: Download CV Pill with Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative" ref={cvDropdownRef}>
            <button
              type="button"
              onClick={() => setShowCvDropdown(!showCvDropdown)}
              className="font-ui text-xs font-medium px-5 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition flex items-center gap-1.5 shadow-md"
            >
              <span>Download CV</span>
              <span className="text-[10px]" aria-hidden="true">↓</span>
            </button>

            <AnimatePresence>
              {showCvDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#160F2E] border border-[var(--border-line)] p-2 shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#C4B5FD] px-3 py-1.5 border-b border-[var(--border-line)] mb-1 font-ui">
                    Select Curriculum Vitae
                  </div>
                  {resumeLinks.map((cv, i) => (
                    <a
                      key={i}
                      href={cv.href}
                      download={cv.download}
                      className="flex items-center justify-between px-3 py-2 text-xs rounded-xl text-[#E2E0F0] hover:text-white hover:bg-[#1E143B] transition-colors"
                    >
                      <span>{cv.label}</span>
                      <AiOutlineDownload className="w-3.5 h-3.5 text-[#C4B5FD]" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                  to={item.to}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
