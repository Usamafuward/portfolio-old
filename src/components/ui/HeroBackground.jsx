import React, { useEffect, useRef } from "react";

/**
 * Bespoke Interactive Neural Architecture & Synapse Vector Canvas
 * Engineered specifically for an AI/ML Engineer & Full-Stack Architect:
 * - Interactive HTML5 Canvas with floating neural nodes & dynamic synaptic lines
 * - Travelling data photon pulses between connected vector nodes
 * - Interactive mouse attraction & synapse nexus
 * - Architectural CAD blueprint underlay with subtle coordinate crosshairs
 * - Radial atmospheric violet nebula aura
 * - Monochrome Midnight Violet (#8B5CF6) & Soft Lavender Quartz (#C4B5FD)
 */
export default function HeroBackground() {
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
    let dpr = window.devicePixelRatio || 1;

    // Mouse state relative to canvas
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 170,
    };

    // Node definitions
    const NODE_COUNT_DESKTOP = 65;
    const NODE_COUNT_MOBILE = 32;
    let nodes = [];
    let pulses = [];

    const colors = [
      { r: 139, g: 92, b: 246 },  // #8B5CF6 Electric Violet
      { r: 196, g: 181, b: 253 }, // #C4B5FD Soft Lavender
      { r: 167, g: 139, b: 250 }, // #A78BFA Medium Violet
      { r: 255, g: 255, b: 255 }, // White core nodes
    ];

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initNodes();
    };

    const initNodes = () => {
      const isMobile = width < 768;
      const count = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
      nodes = [];
      pulses = [];

      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius: Math.random() * 1.6 + 1.2,
          radius: Math.random() * 1.6 + 1.2,
          color,
          alpha: Math.random() * 0.45 + 0.35,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseAngle: Math.random() * Math.PI * 2,
        });
      }
    };

    // Spawn a data pulse along a connection
    const maybeSpawnPulse = (n1, n2) => {
      if (pulses.length < 18 && Math.random() < 0.035) {
        pulses.push({
          from: n1,
          to: n2,
          progress: 0,
          speed: Math.random() * 0.025 + 0.015,
          color: Math.random() > 0.4 ? "rgba(196, 181, 253, 0.9)" : "rgba(255, 255, 255, 0.95)",
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("mousemove", handleMouseMove);
      containerEl.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", resize);
    resize();

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      const connectionDist = width < 768 ? 100 : 135;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 0) { node.x = 0; node.vx *= -1; }
        if (node.x > width) { node.x = width; node.vx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; }
        if (node.y > height) { node.y = height; node.vy *= -1; }

        // Subtle organic breathing
        node.pulseAngle += node.pulseSpeed;
        node.radius = node.baseRadius + Math.sin(node.pulseAngle) * 0.4;

        // Mouse interaction (gentle attraction)
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 0.35;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // Draw connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();

            // Chance to spawn travelling data pulse
            maybeSpawnPulse(node, other);
          }
        }

        // Connect node to active mouse
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(196, 181, 253, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${node.alpha})`;
        ctx.fill();

        // Subtle glow halo for larger nodes
        if (node.baseRadius > 2.0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0.08)`;
          ctx.fill();
        }
      }

      // Update and draw travelling pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = "rgba(196, 181, 253, 0.9)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (containerEl) {
        containerEl.removeEventListener("mousemove", handleMouseMove);
        containerEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Architectural CAD Blueprint Grid Underlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 2. Soft Technical Crosshairs (+) at key architectural coordinates */}
      <div className="absolute top-10 left-8 text-[11px] font-mono text-[#8B5CF6]/30 pointer-events-none hidden md:block">
        + 01.SYS_ROOT
      </div>
      <div className="absolute top-10 right-8 text-[11px] font-mono text-[#8B5CF6]/30 pointer-events-none hidden md:block">
        + 02.VEC_DIM:1536
      </div>
      <div className="absolute bottom-12 left-8 text-[11px] font-mono text-[#8B5CF6]/30 pointer-events-none hidden md:block">
        + LATENT_FLOW
      </div>
      <div className="absolute bottom-12 right-8 text-[11px] font-mono text-[#8B5CF6]/30 pointer-events-none hidden md:block">
        + STATUS:ACTIVE
      </div>

      {/* 3. Deep Atmospheric Radial Violet Nebula Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[920px] h-[360px] sm:h-[460px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.16) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 75%)",
        }}
      />

      {/* 4. Interactive Neural Architecture & Synapse Vector Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Bottom Dissolve Gradient into Obsidian Void */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/80 to-transparent pointer-events-none" />
    </div>
  );
}
