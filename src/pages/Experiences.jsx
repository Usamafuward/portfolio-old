import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Zap } from "lucide-react";
import PropTypes from "prop-types";
import { portfolioData } from "../constants/portfolioData";

// Enhanced Experience Card Component
const FuturisticExperienceCard = ({ experience, index, isLeft }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        x: isLeft ? -100 : 100,
        scale: 0.8,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}
    >
      <motion.div
        className={`relative overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md group rounded-[30px] ${
          isLeft
            ? "rounded-tr-none rounded-bl-none md:rounded-tr-none md:rounded-bl-none"
            : "rounded-tl-none rounded-br-none md:rounded-tl-none md:rounded-br-none"
        } transform`}
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
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {/* Border light effect */}
        <div className={`absolute inset-0 rounded-[30px] ${
            isLeft
              ? "rounded-tr-none rounded-bl-none"
              : "rounded-tl-none rounded-br-none"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
          <div className={`absolute inset-0 rounded-[30px] ${
            isLeft
              ? "rounded-tr-none rounded-bl-none"
              : "rounded-tl-none rounded-br-none"
          } bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm`} />
        </div>
        
        {/* Animated background grid */}
        <div
          className={`absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] ${
            isLeft
              ? "rounded-tr-none rounded-bl-none"
              : "rounded-tl-none rounded-br-none"
          } overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Floating particles */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-[30px] ${
            isLeft
              ? "rounded-tr-none rounded-bl-none"
              : "rounded-tl-none rounded-br-none"
          }`}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              style={{
                left: `${Math.random() * 50}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                x: [Math.random() * 300, Math.random() * 300],
                y: [Math.random() * 200, Math.random() * 200],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100"
          animate={isHovered ? { y: [0, 300, 0] } : {}}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Content section */}
        <div className="relative z-10 p-6 pl-7 group-hover:pt-12 transition-all duration-300">
          {/* Title with arrow icon */}
          <div className="flex items-start justify-between mb-3">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 pr-2"
              animate={
                isHovered
                  ? {
                      textShadow: "0 0 20px rgba(13,148,136,0.3)",
                    }
                  : {}
              }
            >
              {experience.title}
            </motion.h3>

            <motion.div
              className="w-6 flex-shrink-0"
              animate={
                isHovered
                  ? {
                      rotate: 45,
                      scale: 1.2,
                      x: 5,
                    }
                  : {
                      rotate: 0,
                      scale: 1,
                      x: 0,
                    }
              }
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>

          {/* Company with icon */}
          <div className="flex items-center gap-2 mb-3">
            <motion.p
              className="text-sm font-semibold text-teal-600 dark:text-teal-400 transition-colors duration-300"
              animate={
                isHovered
                  ? {
                      textShadow: "0 0 10px rgba(13,148,136,0.3)",
                    }
                  : {}
              }
            >
              {experience.company}
            </motion.p>
          </div>

          {/* Duration badge */}
          <div className="mb-4">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/50 rounded-full border border-teal-200 dark:border-teal-700 backdrop-blur-sm"
              animate={
                isHovered
                  ? {
                      boxShadow: "0 0 20px rgba(13,148,136,0.4)",
                    }
                  : {}
              }
            >
              <Calendar
                size={12}
                className="text-teal-600 dark:text-teal-400"
              />
              <span className="whitespace-nowrap">{experience.duration}</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
            animate={
              isHovered
                ? {
                    textShadow: "0 0 10px rgba(13,148,136,0.1)",
                  }
                : {}
            }
          >
            {experience.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Timeline Dot Component - Fixed positioning
const FuturisticTimelineDot = ({ index, isInView }) => {
  return (
    <motion.div
      className="absolute left-[49.25%] -top-1 transform -translate-x-1/2 z-30"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
    >
      <div className="relative">
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute inset-0 w-6 h-6 rounded-full bg-teal-400/30"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />

        {/* Main dot */}
        <motion.div
          className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 border-4 border-white dark:border-gray-900 shadow-lg shadow-teal-400/50"
          whileHover={{ scale: 1.3, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Zap size={10} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

FuturisticExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isLeft: PropTypes.bool.isRequired,
};

FuturisticTimelineDot.propTypes = {
  index: PropTypes.number.isRequired,
  isInView: PropTypes.bool.isRequired,
};

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { experiences } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen relative" ref={ref}>
      <div className="px-7">
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
          Experiences
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto relative"
        >
          {/* Enhanced Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-lg shadow-teal-400/30"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
          />

          {/* Animated particles along timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-1 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-60"
                animate={{
                  y: ["-10px", "100vh", "-10px"],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
                style={{ left: "-4px" }}
              />
            ))}
          </div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-start relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } ${index === 0 ? "" : "md:mt-16 mt-6"}`}
            >
              {/* Enhanced Timeline dot - Fixed positioning */}
              <div className="hidden md:block">
                <FuturisticTimelineDot index={index} isInView={isInView} />
              </div>

              {/* Enhanced Content */}
              <FuturisticExperienceCard
                experience={experience}
                index={index}
                isLeft={index % 2 !== 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/40 rounded-full"
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
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
