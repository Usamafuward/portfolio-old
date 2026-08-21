import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Brain,
  Globe,
  Monitor,
  Server,
  Code,
} from "lucide-react";
import PropTypes from "prop-types";
import { portfolioData } from "../constants/portfolioData";

// Enhanced Project Card Component
const FuturisticProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return Brain;
      case "Full-Stack":
        return Globe;
      case "Frontend":
        return Monitor;
      case "Backend":
        return Server;
      default:
        return Code;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-6"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.to}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <motion.div
          className="relative overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-[30px] rounded-tl-none rounded-br-none transform"
          animate={
            isHovered
              ? {
                  boxShadow: [
                    "0 0 20px rgba(13,148,136,0.3)",
                  ],
                }
              : {
                  boxShadow: "0 0 0px rgba(13,148,136,0)",
                }
          }
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {/* Border light effect */}
          <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
          </div>
          
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>

          {/* Category badge with icon */}
          <div className="absolute top-4 right-4 z-20">
            <motion.div
              className="flex items-center gap-2 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/50 rounded-full border border-teal-200 dark:border-teal-700"
              animate={
                isHovered
                  ? {
                      boxShadow: "0 0 20px rgba(13,148,136,0.4)",
                    }
                  : {}
              }
            >
              <CategoryIcon
                size={12}
                className="text-teal-600 dark:text-teal-400"
              />
              <span>{project.category}</span>
            </motion.div>
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100"
            animate={isHovered ? { y: [250, 700, 250] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Image section with enhanced effects */}
          <div className="relative bg-gray-200/30 dark:bg-gray-600/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <svg width="100%" height="100%" className="text-teal-400/50">
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={`${Math.random() * 100}%`}
                    y1={`${Math.random() * 100}%`}
                    x2={`${Math.random() * 100}%`}
                    y2={`${Math.random() * 100}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isHovered
                        ? { pathLength: 1, opacity: 0.3 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                ))}
              </svg>
            </div>

            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Enhanced hover overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20"
              initial={{ scale: 0.8 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
            >
              <motion.div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-teal-400/30"
                animate={
                  isHovered
                    ? {
                        rotate: [0, 10, -10, 0],
                        scale: [0.75, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.8 }}
              >
                <ExternalLink className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </motion.div>

              {/* Energy rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-teal-400/50"
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.5, 2],
                        opacity: [0.5, 0.2, 0],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Content section */}
          <div className="relative z-10 p-6">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-[30px] rounded-tl-none rounded-br-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-teal-400 rounded-full"
                  style={{
                    left: `${Math.random() * 50}%`,
                    top: `${Math.random() * 50}%`,
                  }}
                  animate={{
                    x: [Math.random() * 200, Math.random() * 200],
                    y: [Math.random() * 150, Math.random() * 150],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            {/* Title with external link icon */}
            <div className="flex justify-between items-start mb-4">
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300"
                animate={
                  isHovered
                    ? {
                        textShadow: "0 0 20px rgba(13,148,136,0.3)",
                      }
                    : {}
                }
              >
                {project.title}
              </motion.h3>

              <motion.div className="w-6 flex-shrink-0 ml-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-gray-400 mt-1" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-700 dark:text-gray-200 mb-4 transition-all duration-300"
              animate={isHovered ? {} : {}}
            >
              {project.description}
            </motion.p>

            {/* Technologies with enhanced animations */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300 transition-all duration-300 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + techIndex * 0.05,
                  }}
                  whileHover={{
                    boxShadow: "0 0 15px rgba(13,148,136,0.3)",
                    borderColor: "rgb(13,148,136)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

FuturisticProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="min-h-screen relative" ref={ref}>
      {/* Enhanced Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                textShadow: [
                  "0 0 20px rgba(13,148,136,0.3)",
                  "0 0 30px rgba(13,148,136,0.4)",
                  "0 0 20px rgba(13,148,136,0.3)",
                ],
              }
            : {
                opacity: 0,
                y: 20,
              }
        }
        className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 py-7 mb-5"
      >
        Projects
      </motion.h1>

      {/* Projects Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="px-7 mx-auto justify-between columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 z-10 relative"
      >
        {projects.map((project, index) => (
          <FuturisticProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            animate={{
              x: [
                Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
                Math.random() *
                  (typeof window !== "undefined" ? window.innerWidth : 1000),
              ],
              y: [
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1000),
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1000),
              ],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
