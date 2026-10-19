import React, { useMemo } from "react";

/**
 * Hydration-Safe Ambient Starfield & Obsidian Backdrop
 * Matches the refined Monochrome Midnight Violet token system.
 */
export default function SiteBackground() {
  const stars = useMemo(() => {
    const list = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const randX = Math.abs(Math.sin(i * 127.1 + 311.7) * 43758.5453) % 1;
      const randY = Math.abs(Math.sin(i * 269.5 + 183.3) * 23421.6312) % 1;
      const randR = (Math.abs(Math.sin(i * 419.2 + 71.9) * 19283.4123) % 1) * 1.4 + 0.6;
      const duration = 3.5 + (i % 5) * 0.8;
      const delay = (i % 7) * 0.6;
      const opacity = 0.15 + (i % 4) * 0.12;

      list.push({
        id: i,
        x: (randX * 100).toFixed(2),
        y: (randY * 100).toFixed(2),
        r: randR.toFixed(2),
        duration: duration.toFixed(1),
        delay: delay.toFixed(1),
        opacity: opacity.toFixed(2),
      });
    }
    return list;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep Obsidian Canvas Background */}
      <div className="absolute inset-0 bg-[#0A0A12]" />

      {/* Atmospheric Luminous Violet Nebula Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-[#7C3AED]/08 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-[#6B21A8]/06 rounded-full blur-[160px]" />

      {/* Procedural Lavender Starfield */}
      <svg className="w-full h-full absolute inset-0 opacity-70">
        {stars.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="#C4B5FD"
            opacity={star.opacity}
            style={{
              animation: `siteTwinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
