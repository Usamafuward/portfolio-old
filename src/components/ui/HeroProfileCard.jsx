import React from "react";
import { motion } from "framer-motion";
import usamaPhoto from "@/assets/usama_midnight_violet.png";

/**
 * Executive Portrait Showcase for Usama Puward
 * - Features high-res midnight violet rim-lit portrait (usama_midnight_violet.png)
 * - Deep ambient violet back-glow matching portrait lighting
 * - Precision dual-layer architectural bezel with subtle corner CAD crosshairs
 * - Clean, confident, focused design with zero floating badges or clutter
 */
export default function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] select-none group"
    >
      {/* 1. Deep Atmospheric Violet Aura Glow matching the photo's rim-light */}
      <div
        className="absolute -inset-4 rounded-[36px] blur-[60px] pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139, 92, 246, 0.40) 0%, rgba(124, 58, 237, 0.18) 45%, transparent 75%)",
        }}
      />

      {/* 2. Precision Dual-Layer Architectural Bezel */}
      <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-[#8B5CF6]/35 via-white/[0.04] to-[#8B5CF6]/15 border border-[var(--border-line)]  backdrop-blur-md transition-all duration-500 group-hover:border-[#8B5CF6]/40">
        
        {/* Top Hairline Light Reflection */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4B5FD]/40 to-transparent pointer-events-none" />

        {/* 3. Inner Portrait Frame */}
        <div className="relative rounded-[20px] overflow-hidden aspect-square bg-[#0A0A12]">
          <img
            src={usamaPhoto}
            alt="Usama Puward - AI/ML Engineer & Full-Stack Architect"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="eager"
          />

          {/* Subtle bottom vignette to ensure perfect harmony with canvas */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A0A12]/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
