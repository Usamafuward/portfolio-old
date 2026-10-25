import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import usamaPortrait from "@/assets/usama_portrait.webp";

const PHOTO_ALT = "Usama Puward - AI/ML Engineer & Full-Stack Developer";

/**
 * Hero portrait (desktop): a 4:5 photo in the same card style used across the site
 * (1px hairline border, #151328 surface, 20px radius, violet border on hover).
 */
export default function HeroProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] xl:max-w-[360px] select-none"
    >
      <div className="rounded-[20px] p-2 bg-[#151328] border border-[var(--border-line)] transition-colors duration-300 hover:border-[#8B5CF6]">
        <div className="relative rounded-[14px] overflow-hidden aspect-[4/5] bg-[#100D24]">
          <Image
            src={usamaPortrait}
            alt={PHOTO_ALT}
            sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, 260px"
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

