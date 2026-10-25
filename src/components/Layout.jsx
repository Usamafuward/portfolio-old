"use client";

import { MotionConfig } from "framer-motion";
import { AiOutlineUp } from "react-icons/ai";
import Header from "./Header";
import Footer from "./Footer";
import SiteBackground from "./ui/SiteBackground";
import ChatBot from "./ChatBot";
import ScrollReveal from "./ui/ScrollReveal";

export default function Layout({ children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen text-[#E2E0F0] bg-[#0A0A12]">
        {/* Scroll-triggered reveal animations for [data-reveal] elements */}
        <ScrollReveal />

        {/* Procedural Midnight Violet Backdrop */}
        <SiteBackground />

        {/* Standalone Modular Header */}
        <Header />

        {/* Main Page Content */}
        <main className="pt-16 z-10 relative">
          {children}
        </main>

        {/* Standalone Modular Footer */}
        <Footer />

        {/* Scroll to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-[88px] right-6 w-10 h-10 rounded-full bg-[#151328] hover:bg-[#8B5CF6] text-white border border-[var(--border-line)] flex items-center justify-center transition shadow-lg z-30"
        >
          <AiOutlineUp className="w-3.5 h-3.5" />
        </button>

        {/* AI Assistant */}
        <ChatBot />
      </div>
    </MotionConfig>
  );
}
