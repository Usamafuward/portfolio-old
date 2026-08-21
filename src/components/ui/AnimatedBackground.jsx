import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";

import { DarkModeContext } from "@/context/DarkModeContext";

const FuturisticCyberBackground = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [particles, setParticles] = useState([]);
  const [, setGridLines] = useState([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Theme-based color schemes
  const theme = darkMode
    ? {
        background: "from-gray-900 via-gray-800 to-black",
        gridColors: {
          primary: "rgba(13,148,136,0.3)",
          secondary: "rgba(34,211,238,0.2)",
          tertiary: "rgba(59,130,246,0.3)",
        },
        particleColors: {
          primary: "rgba(13,148,136,0.8)",
          primaryLight: "rgba(13,148,136,0.2)",
          secondary: "rgba(34,211,238,1)",
          secondaryLight: "rgba(34,211,238,0.3)",
        },
        neon: {
          teal: "rgba(13,148,136,0.8)",
          cyan: "rgba(34,211,238,0.8)",
          blue: "rgba(59,130,246,0.8)",
        },
        shapeOpacity: "20",
        borderOpacity: "40",
        ambientGlow: "from-teal-500/5 via-transparent to-cyan-500/5",
      }
    : {
        background: "from-blue-50 via-cyan-50 to-teal-50",
        gridColors: {
          primary: "rgba(13,148,136,0.4)",
          secondary: "rgba(34,211,238,0.3)",
          tertiary: "rgba(59,130,246,0.4)",
        },
        particleColors: {
          primary: "rgba(13,148,136,0.9)",
          primaryLight: "rgba(13,148,136,0.3)",
          secondary: "rgba(34,211,238,1)",
          secondaryLight: "rgba(34,211,238,0.4)",
        },
        neon: {
          teal: "rgba(13,148,136,1)",
          cyan: "rgba(34,211,238,1)",
          blue: "rgba(59,130,246,1)",
        },
        shapeOpacity: "30",
        borderOpacity: "60",
        ambientGlow: "from-teal-200/10 via-transparent to-cyan-200/10",
      };

  // Update dimensions when window resizes
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize particles and grid lines
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const initializeParticles = () => {
      const newParticles = [];
      let particleCount = dimensions.width < 480 ? 20 : dimensions.width < 768 ? 30 : 60;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.5 + 0.3,
          type: Math.random() > 0.6 ? "node" : "particle",
        });
      }
      setParticles(newParticles);
    };

    const initializeGrid = () => {
      const newGridLines = [];
      // Responsive grid spacing
      const spacing = dimensions.width < 768 ? 60 : 80;

      // Vertical lines
      for (let x = 0; x < dimensions.width; x += spacing) {
        newGridLines.push({
          type: "vertical",
          position: x,
          opacity: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * 0.05,
        });
      }

      // Horizontal lines
      for (let y = 0; y < dimensions.height; y += spacing) {
        newGridLines.push({
          type: "horizontal",
          position: y,
          opacity: Math.random() * 0.1 + 0.05,
          pulse: Math.random() * 0.05,
        });
      }

      setGridLines(newGridLines);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    initializeParticles();
    initializeGrid();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dimensions]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          if (newY < 0) newY = dimensions.height;
          if (newY > dimensions.height) newY = 0;

          return { ...particle, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [dimensions]);

  // Responsive floating shapes data
  // const getFloatingShapes = () => {
  //   if (dimensions.width === 0) return [];
    
  //   let shapeCount;
  //   let baseSize;
  //   if (dimensions.width < 480) {
  //     shapeCount = 6;
  //     baseSize = 15;
  //   } else if (dimensions.width < 768) {
  //     shapeCount = 8;
  //     baseSize = 18;
  //   } else if (dimensions.width < 1024) {
  //     shapeCount = 12;
  //     baseSize = 20;
  //   } else {
  //     shapeCount = 15;
  //     baseSize = 20;
  //   }

  //   return Array.from({ length: shapeCount }, (_, i) => ({
  //     id: i,
  //     size: baseSize + Math.random() * 40,
  //     x: Math.random() * 100,
  //     y: Math.random() * 100,
  //     rotation: Math.random() * 360,
  //     duration: 20 + Math.random() * 20,
  //     delay: Math.random() * 5,
  //     shape: ['hexagon', 'triangle', 'diamond', 'circuit'][Math.floor(Math.random() * 4)],
  //   }));
  // };

  // const floatingShapes = getFloatingShapes();

  // Responsive connection distance
  const getConnectionDistance = () => {
    if (dimensions.width < 480) return 100;
    if (dimensions.width < 768) return 120;
    return 150;
  };

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br ${theme.background}`}
    >
      {/* Isometric Grid */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className={darkMode ? "opacity-15" : "opacity-25"}>
          <defs>
            <pattern id="isoGrid" width="60" height="35" patternUnits="userSpaceOnUse" patternTransform="skewY(-30)">
              <path d="M 0 0 L 60 0 L 60 35 L 0 35 Z" fill="none" stroke={theme.gridColors.primary} strokeWidth="0.5"/>
              <path d="M 0 0 L 30 17.5 L 60 0" fill="none" stroke={theme.gridColors.secondary} strokeWidth="0.3"/>
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#isoGrid)"/>
        </svg>
      </div>

      {/* Circuit Pattern Overlay */}
      <div
        className={`absolute inset-0 ${darkMode ? "opacity-10" : "opacity-15"}`}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: dimensions.width < 768 ? 12 : 20 }, (_, i) => {
            const cols = dimensions.width < 768 ? 3 : 4;
            const x = (i % cols) * (100 / cols);
            const y = Math.floor(i / cols) * (100 / Math.ceil((dimensions.width < 768 ? 12 : 20) / cols));
            return (
              <g key={i}>
                <motion.path
                  d={`M${x}% ${y}% L${x + (100 / cols) * 0.4}% ${y}% L${x + (100 / cols) * 0.4}% ${y + 5}% L${
                    x + (100 / cols) * 0.6
                  }% ${y + 5}%`}
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, darkMode ? 0.5 : 0.7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx={`${x + (100 / cols) * 0.6}%`}
                  cy={`${y + 5}%`}
                  r={dimensions.width < 768 ? "1.5" : "2"}
                  fill={
                    darkMode ? "rgba(13,148,136,0.6)" : "rgba(13,148,136,0.8)"
                  }
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </g>
            );
          })}
          <defs>
            <linearGradient id="circuitGradient">
              <stop offset="0%" stopColor={theme.particleColors.primary} />
              <stop offset="100%" stopColor={theme.particleColors.secondary} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      {/* {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-20, -dimensions.height - 20],
            rotate: [0, shape.rotation + 360],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {shape.shape === 'hexagon' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-teal-400/20 to-cyan-400/20 border-teal-400/40' : 'from-teal-500/30 to-cyan-500/30 border-teal-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              }}
            />
          )}
          {shape.shape === 'triangle' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-cyan-400/20 to-blue-400/20 border-cyan-400/40' : 'from-cyan-500/30 to-blue-500/30 border-cyan-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
          {shape.shape === 'diamond' && (
            <div
              className={`bg-gradient-to-r ${darkMode ? 'from-blue-400/20 to-purple-400/20 border-blue-400/40' : 'from-blue-500/30 to-purple-500/30 border-blue-500/60'} border`}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
          )}
          {shape.shape === 'circuit' && (
            <div className="relative" style={{ width: `${shape.size}px`, height: `${shape.size}px` }}>
              <div className={`absolute inset-0 ${darkMode ? 'border-teal-400/30 bg-teal-400/10' : 'border-teal-500/50 bg-teal-500/15'} border`}>
                <div className={`absolute top-1/2 left-0 w-full h-0.5 ${darkMode ? 'bg-teal-400/50' : 'bg-teal-500/70'}`} />
                <div className={`absolute left-1/2 top-0 h-full w-0.5 ${darkMode ? 'bg-teal-400/50' : 'bg-teal-500/70'}`} />
                <div className={`absolute top-1 left-1 w-2 h-2 ${darkMode ? 'bg-teal-400/60' : 'bg-teal-500/80'} rounded-full`} />
                <div className={`absolute bottom-1 right-1 w-2 h-2 ${darkMode ? 'bg-cyan-400/60' : 'bg-cyan-500/80'} rounded-full`} />
              </div>
            </div>
          )}
        </motion.div>
      ))} */}

      {/* Particle Network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <radialGradient id="particleGrad">
            <stop offset="0%" stopColor={theme.particleColors.primary} />
            <stop offset="100%" stopColor={theme.particleColors.primaryLight} />
          </radialGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor={theme.particleColors.secondary} />
            <stop offset="100%" stopColor={theme.particleColors.secondaryLight} />
          </radialGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle, i) =>
          particles.slice(i + 1).map((other, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - other.x, 2) + Math.pow(particle.y - other.y, 2)
            );
            const connectionDistance = getConnectionDistance();
            if (distance < connectionDistance) {
              const opacity = ((connectionDistance - distance) / connectionDistance) * (darkMode ? 0.4 : 0.5);
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={other.x}
                  y2={other.y}
                  stroke={theme.neon.cyan}
                  strokeWidth="1"
                  opacity={opacity}
                  filter="url(#neonGlow)"
                  animate={{ opacity: [opacity * 0.5, opacity, opacity * 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              );
            }
            return null;
          })
        )}

        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.type === "node" ? "url(#nodeGrad)" : "url(#particleGrad)"}
            filter="url(#neonGlow)"
            animate={{
              r: [particle.size, particle.size * 1.8, particle.size],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1,
            }}
          />
        ))}
      </svg>

      {/* Holographic Scan Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 98%, ${
            darkMode ? "rgba(13,148,136,0.1)" : "rgba(13,148,136,0.15)"
          } 100%)`,
          backgroundSize: `${dimensions.width < 768 ? "15px" : "20px"} 100%`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Data Stream Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(dimensions.width < 768 ? 3 : 5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-0.5 w-full bg-gradient-to-r from-transparent ${
              darkMode ? "via-teal-400/40" : "via-teal-500/60"
            } to-transparent`}
            style={{ top: `${20 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner UI Elements - Responsive sizing */}
      {!isScrolled && (
        <>
          <div className={`hidden sm:block absolute top-2 left-2 ${dimensions.width < 768 ? "w-12 h-12" : "w-16 h-16"} pointer-events-none`}>
            <motion.div
              className={`absolute inset-0 border-l-2 border-t-2 ${
                darkMode ? "border-teal-400/50" : "border-teal-500/70"
              }`}
              animate={{
                borderColor: darkMode
                  ? [
                      "rgba(13,148,136,0.5)",
                      "rgba(34,211,238,0.8)",
                      "rgba(13,148,136,0.5)",
                    ]
                  : [
                      "rgba(13,148,136,0.7)",
                      "rgba(34,211,238,1)",
                      "rgba(13,148,136,0.7)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className={`absolute ${dimensions.width < 768 ? "top-1.5 left-1.5 w-1.5 h-1.5" : "top-2 left-2 w-2 h-2"} ${
                darkMode ? "bg-teal-400" : "bg-teal-500"
              } rounded-full`}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className={`hidden sm:block absolute top-2 right-2 ${dimensions.width < 768 ? "w-12 h-12" : "w-16 h-16"} pointer-events-none`}>
            <motion.div
              className={`absolute inset-0 border-r-2 border-t-2 ${
                darkMode ? "border-cyan-400/50" : "border-cyan-500/70"
              }`}
              animate={{
                borderColor: darkMode
                  ? [
                      "rgba(34,211,238,0.5)",
                      "rgba(59,130,246,0.8)",
                      "rgba(34,211,238,0.5)",
                    ]
                  : [
                      "rgba(34,211,238,0.7)",
                      "rgba(59,130,246,1)",
                      "rgba(34,211,238,0.7)",
                    ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </>
      )}

      <div className={`hidden sm:block absolute bottom-2 left-2 ${dimensions.width < 768 ? "w-12 h-12" : "w-16 h-16"} pointer-events-none`}>
        <motion.div
          className={`absolute inset-0 border-l-2 border-b-2 ${
            darkMode ? "border-blue-400/50" : "border-blue-500/70"
          }`}
          animate={{
            borderColor: darkMode
              ? [
                  "rgba(59,130,246,0.5)",
                  "rgba(147,51,234,0.8)",
                  "rgba(59,130,246,0.5)",
                ]
              : [
                  "rgba(59,130,246,0.7)",
                  "rgba(147,51,234,1)",
                  "rgba(59,130,246,0.7)",
                ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className={`hidden sm:block absolute bottom-2 right-2 ${dimensions.width < 768 ? "w-12 h-12" : "w-16 h-16"} pointer-events-none`}>
        <motion.div
          className={`absolute inset-0 border-r-2 border-b-2 ${
            darkMode ? "border-purple-400/50" : "border-purple-500/70"
          }`}
          animate={{
            borderColor: darkMode
              ? [
                  "rgba(147,51,234,0.5)",
                  "rgba(13,148,136,0.8)",
                  "rgba(147,51,234,0.5)",
                ]
              : [
                  "rgba(147,51,234,0.7)",
                  "rgba(13,148,136,1)",
                  "rgba(147,51,234,0.7)",
                ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Central Holographic Ring - Responsive sizing */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className={`${
            dimensions.width < 768 ? "w-64 h-64" : dimensions.width < 1024 ? "w-80 h-80" : "w-96 h-96"
          } rounded-full border ${
            darkMode ? "border-teal-400/20" : "border-teal-500/30"
          }`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: darkMode ? [0.2, 0.4, 0.2] : [0.3, 0.5, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute ${
            dimensions.width < 768 ? "inset-6" : "inset-8"
          } rounded-full border ${
            darkMode ? "border-cyan-400/30" : "border-cyan-500/40"
          }`}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: darkMode ? [0.3, 0.5, 0.3] : [0.4, 0.6, 0.4],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Ambient glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${theme.ambientGlow} pointer-events-none`}
      />
    </div>
  );
};

export default FuturisticCyberBackground;