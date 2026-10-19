/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(4rem, 1rem + 15vmin, 12rem)",
  duration = "60s",
}) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/20)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    "relative",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  const displayItems = items;

  return (
    <motion.article
      ref={containerRef}
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background with animated elements */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated data streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
              style={{
                top: `${25 + i * 20}%`,
                width: "100%",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Top Left - Quick flash */}
        <div className="absolute top-0 left-0">
          <motion.div
            className="w-20 h-20"
          />
          <div className="absolute top-4 left-4 w-10 h-10">
            <motion.div
              className="w-full h-0.5 bg-purple-400/50"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            <motion.div
              className="w-0.5 h-full bg-purple-400/50 absolute top-0 right-10"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5 + 0.5,
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <motion.div
            className="w-20 h-20"
          />
          <div className="absolute top-4 left-4 w-10 h-10">
            <motion.div
              className="w-full h-0.5 bg-purple-400/50 absolute -bottom-2 -right-2"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            <motion.div
              className="w-0.5 h-full bg-purple-400/50 absolute top-2 -right-2"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5 + 0.5,
              }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <div
          className={marqueeClass}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <div
            className={[
              "flex-shrink-0",
              "flex",
              "items-center",
              "justify-around",
              "gap-[calc(var(--size)/14)]",
              "min-w-full",
              "animate-scrollX",
              direction === "vertical" && "flex-col min-h-full animate-scrollY",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {displayItems.map((item, idx) => (
              <motion.img
                key={idx}
                src={item.imgUrl}
                alt={item.altText}
                className={[
                  "object-contain",
                  "aspect-square",
                  `w-[var(--size)] p-[calc(var(--size)/5)]`,
                  direction === "vertical" &&
                    "w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                  "small-device-logo",
                  "transition-all duration-300",
                ]
                  .filter(Boolean)
                  .join(" ")}
                whileHover={{
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.35))",
                }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className={[
              "flex-shrink-0",
              "flex",
              "items-center",
              "justify-around",
              "gap-[calc(var(--size)/14)]",
              "min-w-full",
              "animate-scrollX",
              direction === "vertical" && "flex-col min-h-full animate-scrollY",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {displayItems.map((item, idx) => (
              <motion.img
                key={`dup1-${idx}`}
                src={item.imgUrl}
                alt={item.altText}
                className={[
                  "object-contain",
                  "aspect-square",
                  `w-[var(--size)] p-[calc(var(--size)/5)]`,
                  direction === "vertical" &&
                    "w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                  "small-device-logo",
                  "transition-all duration-300",
                ]
                  .filter(Boolean)
                  .join(" ")}
                whileHover={{
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.35))",
                }}
              />
            ))}
          </div>
        </div>

        <div
          className={marqueeClass + " marquee--reverse"}
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <div
            className={[
              "flex-shrink-0",
              "flex",
              "items-center",
              "justify-around",
              "gap-[calc(var(--size)/14)]",
              "min-w-full",
              "animate-scrollX reverse-x",
              direction === "vertical" &&
                "flex-col min-h-full animate-scrollY reverse-x",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {displayItems.map((item, idx) => (
              <motion.img
                key={`rev-${idx}`}
                src={item.imgUrl}
                alt={item.altText}
                className={[
                  "object-contain",
                  "aspect-square",
                  `w-[var(--size)] p-[calc(var(--size)/5)]`,
                  direction === "vertical" &&
                    "w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                  "small-device-logo",
                  "transition-all duration-300",
                ]
                  .filter(Boolean)
                  .join(" ")}
                whileHover={{
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.35))",
                }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className={[
              "flex-shrink-0",
              "flex",
              "items-center",
              "justify-around",
              "gap-[calc(var(--size)/14)]",
              "min-w-full",
              "animate-scrollX reverse-x",
              direction === "vertical" &&
                "flex-col min-h-full animate-scrollY reverse-x",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {displayItems.map((item, idx) => (
              <motion.img
                key={`dup2-${idx}`}
                src={item.imgUrl}
                alt={item.altText}
                className={[
                  "object-contain",
                  "aspect-square",
                  `w-[var(--size)] p-[calc(var(--size)/5)]`,
                  direction === "vertical" &&
                    "w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                  "small-device-logo",
                  "transition-all duration-300",
                ]
                  .filter(Boolean)
                  .join(" ")}
                whileHover={{
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.35))",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced styles */}
      <style>{`
        .mask-horizontal {
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%);
          mask: linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%);
        }

        .mask-vertical {
          -webkit-mask: linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%);
          mask: linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%);
        }

        .animate-scrollX {
          animation: scrollX var(--duration) linear infinite;
        }

        .animate-scrollY {
          animation: scrollY var(--duration) linear infinite;
        }

        .reverse-x {
          animation-direction: reverse;
        }

        .paused * {
          animation-play-state: paused;
        }

        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes scrollY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @media (max-width: 768px) {
          .small-device-logo {
            width: calc(var(--size) * 1.2) !important;
            height: auto;
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            padding: 1.4rem;
          }
        }
      `}</style>
    </motion.article>
  );
}

export default LogoWall;
