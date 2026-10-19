import React from "react";

/**
 * 1px Technical Line-Art Vector Diagrams
 * Directly inspired by ProductArt.tsx from Kainovation website docs.
 * Rendered in elegant hairline strokes with subtle violet pulse animations.
 */

export function AgenticAIArt({ className = "w-full h-44" }) {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 340 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Background micro grid */}
        <path
          d="M20 90H320M170 20V160M95 30V150M245 30V150"
          stroke="#9333ea"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          strokeOpacity="0.25"
        />

        {/* Outer Orbit Rings */}
        <circle
          cx="170"
          cy="90"
          r="60"
          stroke="#a855f7"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          className="animate-spinSlow"
        />
        <circle
          cx="170"
          cy="90"
          r="42"
          stroke="#c084fc"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />

        {/* Central Agent Core Node */}
        <circle
          cx="170"
          cy="90"
          r="18"
          fill="#1b0e38"
          stroke="#c084fc"
          strokeWidth="1.4"
        />
        <circle
          cx="170"
          cy="90"
          r="8"
          fill="#a855f7"
          className="animate-pulse-slow"
        />

        {/* Orbiting Sub-Agent 1 (NLP / Tool Calling) */}
        <g>
          <line
            x1="170"
            y1="90"
            x2="95"
            y2="55"
            stroke="#a855f7"
            strokeWidth="0.9"
            strokeDasharray="3 3"
          />
          <circle cx="95" cy="55" r="11" fill="#140b2b" stroke="#d8b4fe" strokeWidth="1" />
          <circle cx="95" cy="55" r="4" fill="#c084fc" />
          <text x="75" y="40" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">Tool Ex</text>
        </g>

        {/* Orbiting Sub-Agent 2 (RAG & Embeddings) */}
        <g>
          <line
            x1="170"
            y1="90"
            x2="245"
            y2="55"
            stroke="#a855f7"
            strokeWidth="0.9"
            strokeDasharray="3 3"
          />
          <circle cx="245" cy="55" r="11" fill="#140b2b" stroke="#d8b4fe" strokeWidth="1" />
          <circle cx="245" cy="55" r="4" fill="#a855f7" />
          <text x="235" y="40" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">Vector DB</text>
        </g>

        {/* Orbiting Sub-Agent 3 (Reasoning Engine) */}
        <g>
          <line
            x1="170"
            y1="90"
            x2="170"
            y2="150"
            stroke="#c084fc"
            strokeWidth="0.9"
            strokeDasharray="3 3"
          />
          <circle cx="170" cy="150" r="11" fill="#140b2b" stroke="#e9d5ff" strokeWidth="1" />
          <circle cx="170" cy="150" r="4" fill="#9333ea" />
          <text x="145" y="170" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">LLM Reason</text>
        </g>

        {/* Data Stream Particle */}
        <circle cx="132" cy="72" r="2.5" fill="#ffffff" className="animate-pingSlow" />
        <circle cx="208" cy="72" r="2.5" fill="#c084fc" className="animate-pingSlow" />
      </svg>
    </div>
  );
}

export function FullStackArt({ className = "w-full h-44" }) {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 340 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Pipeline Bus Bar */}
        <line
          x1="30"
          y1="90"
          x2="310"
          y2="90"
          stroke="#a855f7"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Client Interface (Left) */}
        <rect
          x="30"
          y="60"
          width="65"
          height="60"
          rx="10"
          fill="#140b2b"
          stroke="#c084fc"
          strokeWidth="1.2"
        />
        <rect x="38" y="70" width="49" height="6" rx="3" fill="#6b21a8" />
        <rect x="38" y="82" width="35" height="4" rx="2" fill="#9333ea" />
        <rect x="38" y="92" width="42" height="4" rx="2" fill="#581c87" />
        <text x="43" y="112" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">Client UI</text>

        {/* API Gateway / FastAPI Core (Center) */}
        <circle
          cx="170"
          cy="90"
          r="26"
          fill="#1c0f38"
          stroke="#a855f7"
          strokeWidth="1.4"
        />
        <circle cx="170" cy="90" r="14" fill="#7e22ce" stroke="#d8b4fe" strokeWidth="0.8" />
        <text x="145" y="130" fill="#c084fc" fontSize="8" fontFamily="sans-serif">FastAPI / Node</text>

        {/* Database & Storage (Right) */}
        <rect
          x="245"
          y="62"
          width="65"
          height="56"
          rx="8"
          fill="#140b2b"
          stroke="#c084fc"
          strokeWidth="1.2"
        />
        <ellipse cx="277" cy="72" rx="22" ry="5" fill="#4c1d95" stroke="#a855f7" strokeWidth="0.8" />
        <ellipse cx="277" cy="88" rx="22" ry="5" fill="#4c1d95" stroke="#a855f7" strokeWidth="0.8" />
        <ellipse cx="277" cy="104" rx="22" ry="5" fill="#4c1d95" stroke="#a855f7" strokeWidth="0.8" />
        <text x="254" y="130" fill="#d8b4fe" fontSize="8" fontFamily="sans-serif">PostgreSQL</text>

        {/* Data Stream Signal Traveling */}
        <circle cx="118" cy="90" r="3" fill="#ffffff" className="animate-pingSlow" />
        <circle cx="222" cy="90" r="3" fill="#c084fc" className="animate-pingSlow" />
      </svg>
    </div>
  );
}
