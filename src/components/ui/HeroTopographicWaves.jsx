import React, { useEffect, useRef } from "react";

/**
 * Algorithmic Topographic Wave Field (AI Loss Landscape & Latent Manifold)
 * - Zero particles: purely mathematical harmonic contour lines and undulating wave ribbons
 * - Multi-frequency sinusoidal equations simulating a continuous AI loss surface
 * - Gradient strokes from Electric Violet (#8B5CF6) to Soft Lavender Quartz (#C4B5FD)
 * - Subtle travelling light crests gliding across contour ribbons
 * - High-DPI canvas rendering at 60 FPS
 */
export default function HeroTopographicWaves() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let time = 0;

    // Harmonic wave definitions: distinct amplitudes, frequencies, speeds, and vertical baselines
    const waves = [
      { baseRatio: 0.38, amp: 42, freq: 0.0018, speed: 0.009, stroke: "rgba(139, 92, 246, 0.18)", fill: "rgba(139, 92, 246, 0.025)", width: 1.2 },
      { baseRatio: 0.44, amp: 54, freq: 0.0022, speed: 0.007, stroke: "rgba(167, 139, 250, 0.22)", fill: "rgba(139, 92, 246, 0.03)", width: 1.3 },
      { baseRatio: 0.50, amp: 62, freq: 0.0016, speed: 0.011, stroke: "rgba(196, 181, 253, 0.28)", fill: "rgba(167, 139, 250, 0.035)", width: 1.5 },
      { baseRatio: 0.57, amp: 70, freq: 0.0025, speed: 0.008, stroke: "rgba(139, 92, 246, 0.32)", fill: "rgba(139, 92, 246, 0.04)", width: 1.6 },
      { baseRatio: 0.64, amp: 58, freq: 0.0019, speed: 0.012, stroke: "rgba(196, 181, 253, 0.26)", fill: "rgba(196, 181, 253, 0.03)", width: 1.4 },
      { baseRatio: 0.72, amp: 48, freq: 0.0021, speed: 0.006, stroke: "rgba(139, 92, 246, 0.20)", fill: "rgba(139, 92, 246, 0.02)", width: 1.2 },
      { baseRatio: 0.80, amp: 38, freq: 0.0017, speed: 0.010, stroke: "rgba(167, 139, 250, 0.16)", fill: "transparent", width: 1.1 },
    ];

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Draw each topographic wave ribbon
      for (let i = 0; i < waves.length; i++) {
        const w = waves[i];
        const baseY = height * w.baseRatio;
        const step = 8; // Step size along x axis for smooth curve

        ctx.beginPath();
        let prevY = baseY;

        for (let x = 0; x <= width + step; x += step) {
          // Multi-frequency harmonic superposition for organic mathematical curves
          const y1 = Math.sin(x * w.freq + time * w.speed) * w.amp;
          const y2 = Math.cos(x * w.freq * 1.6 - time * w.speed * 0.7) * (w.amp * 0.45);
          const y3 = Math.sin(x * w.freq * 0.5 + time * w.speed * 1.4) * (w.amp * 0.25);
          const y = baseY + y1 + y2 + y3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            const cx = (x + (x - step)) / 2;
            const cy = (y + prevY) / 2;
            ctx.quadraticCurveTo(x - step, prevY, cx, cy);
          }
          prevY = y;
        }

        // Stroke line with wave styling
        ctx.strokeStyle = w.stroke;
        ctx.lineWidth = w.width;
        ctx.stroke();

        // Optional translucent ribbon fill down to baseline
        if (w.fill !== "transparent") {
          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();
          ctx.fillStyle = w.fill;
          ctx.fill();
        }
      }

      // Travelling crest light beams along 2 prominent waves
      const crestWaves = [waves[2], waves[3]];
      crestWaves.forEach((cw, idx) => {
        const baseY = height * cw.baseRatio;
        const crestCycle = ((time * (idx === 0 ? 0.7 : 0.9)) % (width + 400)) - 200;
        const crestLength = 180;

        ctx.beginPath();
        for (let x = Math.max(0, crestCycle - crestLength); x <= Math.min(width, crestCycle + crestLength); x += 6) {
          const y1 = Math.sin(x * cw.freq + time * cw.speed) * cw.amp;
          const y2 = Math.cos(x * cw.freq * 1.6 - time * cw.speed * 0.7) * (cw.amp * 0.45);
          const y3 = Math.sin(x * cw.freq * 0.5 + time * cw.speed * 1.4) * (cw.amp * 0.25);
          const y = baseY + y1 + y2 + y3;

          if (x === Math.max(0, crestCycle - crestLength)) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const grad = ctx.createLinearGradient(crestCycle - crestLength, 0, crestCycle + crestLength, 0);
        grad.addColorStop(0, "rgba(196, 181, 253, 0)");
        grad.addColorStop(0.5, idx === 0 ? "rgba(196, 181, 253, 0.85)" : "rgba(139, 92, 246, 0.9)");
        grad.addColorStop(1, "rgba(196, 181, 253, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = cw.width + 1.2;
        ctx.shadowColor = "rgba(196, 181, 253, 0.75)";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Deep Atmospheric Radial Violet Nebula Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[360px] sm:h-[460px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.16) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 75%)",
        }}
      />

      {/* 2. Mathematical Topographic Wave Field Canvas (Zero Particles) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 3. Bottom Dissolve Gradient into Obsidian Void */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/80 to-transparent pointer-events-none" />
    </div>
  );
}
