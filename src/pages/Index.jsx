import React, { useState, useEffect, useContext, useRef } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import { AiOutlineUp, AiOutlineDownload } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import profile from "@/assets/Usama1.png";
import SplitText from "@/components/ui/SplitText";
import LogoWall from "@/components/ui/LogoWall";
import TrueFocus from "@/components/ui/TrueFocus";
import AnimatedText from "@/components/ui/AnimatedText";
import AnimatedProfile from "@/components/ui/AnimatedProfile";
import PortfolioCard from "@/components/ui/PortfolioCard";
import flatIcon from "@/assets/flat_icon";
import { portfolioData } from "../constants/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Index = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [setIsScrolled] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null);
  const [hoveredEducationIndex, setHoveredEducationIndex] = useState(null);
  const educationRef = useRef(null);
  const isInView3 = useInView(educationRef, { once: true });
  const { skills } = portfolioData;
  const { technologies } = portfolioData;
  const { socialLinks } = portfolioData;
  const { educations } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowDropdown(false);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsScrolled]);

  const cards = [
    {
      title: "Projects",
      image: !darkMode ? flatIcon.project_full : flatIcon.project_white,
      description:
        "Explore a showcase of my innovative projects, demonstrating technical expertise and problem-solving skills.",
      link: "/projects",
    },
    {
      title: "Certifications",
      image: !darkMode ? flatIcon.certificate_full : flatIcon.certificate_white,
      description:
        "Browse my certifications, highlighting my dedication to continuous learning and professional growth.",
      link: "/certifications",
    },
    {
      title: "Experiences",
      image: !darkMode ? flatIcon.quality_full : flatIcon.quality_white,
      description:
        "Discover my professional journey, including key roles and experiences that have shaped my expertise and skills.",
      link: "/experiences",
    },
  ];

  const resumeLinks = [
    {
      href: "/SE_CV.pdf",
      label: "Software Engineering",
      download: "Usama_Puward_Resume_SE.pdf",
    },
    {
      href: "/AI_ML_CV.pdf",
      label: "AI/ML Engineering",
      download: "Usama_Puward_Resume_ML.pdf",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={ref}>
        <div className=" p-7 flex flex-col xl:flex-row md:justify-between w-full bg-transparent">
          <div className="z-0 inline-block xl:w-2/3 xl:border-l-4 border-teal-400 dark:border-teal-400 justify-between order-2 xl:order-none relative py-5">
            {/* Gradient overlay - Visible only on xl devices */}
            <motion.div
              className="hidden xl:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-teal-400/30 to-transparent pointer-events-none"
              animate={{
                opacity: [1, 0.5, 1],
                transition: { duration: 1, repeat: Infinity },
              }}
            />

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={
                window.innerWidth > 1280 ? slideLeftVariants : slideUpVariants
              }
              transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
              className="text-center xl:text-left items-center justify-between mx-auto mt-6 xl:mt-0 xl:ps-28 relative z-10"
            >
              <AnimatedText texts={["AI/ML Engineer", "Software Developer"]} />
              <h1 className="text-[40px] sm:text-5xl px-2 xl:px-0 sm:py-2 :py-1 text-gray-800 dark:text-white md:text-6xl">
                Hello I’m
              </h1>
              <SplitText
                text="Usama Puward"
                className="text-[40px] sm:text-5xl px-2 xl:px-0 sm:py-2 py-1 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
              <motion.p
                className="text-center xl:text-left text-md py-2 sm:py-4 leading-8 text-gray-700 dark:text-gray-300 max-w-xl xl:mx-0 mx-auto md:text-xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Computer Science Graduate and current AI/ML Engineer and
                Software Developer, with a strong passion for Software
                Developing, Machine Learning, and Artificial Intelligence.
                Skilled in developing efficient and innovative solutions for
                real-world projects and building high-quality applications.
                Eager to tackle complex challenges in software development and
                drive innovation within the fields of AI and ML.
                <motion.span
                  className="inline-block w-0.5 h-5 bg-teal-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.p>
              <div className="flex flex-col xl:flex-row items-center  xl:gap-8 py-4 space-y-8 xl:space-y-0">
                <motion.div
                  ref={dropdownRef} // Add this ref
                  className="relative group xl:mb-0 order-none xl:order-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="shadow-xl dark:shadow-[#0c121d] font-bold text-gray-700 dark:text-white rounded-full xl:rounded-none xl:rounded-r-full border-dashed border-2 hover:text-teal-600 hover:dark:text-teal-400 border-gray-700 hover:border-teal-600 dark:border-white hover:dark:border-teal-400 py-4 px-6 relative transition-all duration-300 ease-in-out dropdown-button"
                  >
                    <div className="flex items-center transition-transform duration-300 hover:scale-[1.03] gap-3">
                      <span className="text-lg">Download CV</span>
                      {showDropdown ? (
                        <AiOutlineUp className="h-[26px] w-[26px] font-bold" />
                      ) : (
                        <AiOutlineDownload className="h-[26px] w-[26px] font-bold" />
                      )}
                    </div>
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 left-0 mt-2 w-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-[#0c121d]">
                      {resumeLinks.map((resume) => (
                        <a
                          key={resume.label}
                          href={resume.href}
                          download={resume.download}
                          className="block px-4 py-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-left"
                        >
                          {resume.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>

                <div className="relative z-0 flex justify-center gap-4 sm:gap-9 xl:gap-5 text-gray-700 dark:text-gray-300 xl:mb-0 order-none xl:order-2">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      {/* Holographic ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-teal-400/30"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10 + index * 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ scale: 1.2 }}
                      />

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-lg scale-0 group-hover:scale-100 transition-transform duration-300" />

                      <motion.a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full relative overflow-hidden shadow-xl dark:shadow-[#0c121d] border-2 border-teal-600 font-medium dark:border-teal-400 hover:border-black/50 hover:dark:border-white/50 bg-gray-100/10 dark:bg-gray-700/20 transition-colors duration-300"
                        whileHover={{ rotateY: 180 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {/* Scan lines */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent"
                          animate={{ y: [-56, 56] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />

                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gray-800 dark:bg-white scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-in-out"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        />

                        {/* Icon */}
                        <social.icon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white/50 transition-colors duration-300 rounded-[15px]" />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative mx-auto xl:w-1/3 flex justify-center items-center order-1 xl:order-none my-3 xl:my-0 py-4 xl:py-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedProfile imageSrc={profile} />

            {/* Top Right - Fast pulse */}
            <div className="hidden xl:block absolute top-7 right-0 w-16 h-16 border-t-2 border-r-2 border-teal-600 animate-pulse" />

            {/* Bottom Left - Slow fade in/out */}
            <div className="hidden xl:block absolute bottom-9 left-0 w-16 h-16 border-b-2 border-l-2 border-teal-600 animate-[fade_2s_ease-in-out_infinite]" />

            {/* Top Left - Quick flash */}
            <div className="hidden xl:block absolute top-7 left-0 w-16 h-16 border-t-2 border-l-2 border-teal-600 animate-[flash_0.5s_ease-in-out_infinite]" />

            {/* Bottom Right - Glitch effect */}
            <div className="hidden xl:block absolute bottom-9 right-0 w-16 h-16 border-b-2 border-r-2 border-teal-600 animate-[glitch_1.5s_ease-in-out_infinite]" />
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-7"
      >
        <div className="text-center pt-8 sm:pt-16 xl:pb-0 px-7 mb-10">
          <TrueFocus
            sentence="Welcome to My Portfolio"
            manualMode={false}
            blurAmount={0}
            borderColor="#0d9488"
            textColor="#0d9488"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 my-8"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PortfolioCard card={card} darkMode={darkMode} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-8"
        >
          Skills
        </motion.h2>
        <motion.div className="mx-auto my-6">
          <motion.div variants={slideUpVariants} className="text-center mb-12">
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              I have a diverse background in various domains of software
              development and machine learning. My expertise allows me to create
              visually appealing interfaces, build robust server-side
              applications, and develop intelligent systems using modern tools
              and frameworks.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={
                  index % 2 === 0 ? slideLeftVariants : slideRightVariants
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                }}
                onMouseEnter={() => setHoveredSkillIndex(index)}
                onMouseLeave={() => setHoveredSkillIndex(null)}
              >
                {/* Main container with matching border style and glass effect */}
                <motion.div
                  className="relative h-full overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-[30px] rounded-tl-none rounded-br-none shadow-xl dark:shadow-[#0c121d] transform"
                  animate={
                    hoveredSkillIndex === index
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
                    repeat: hoveredSkillIndex === index ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  {/* Border light effect */}
                  <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
                  </div>
                  
                  {/* Animated background grid */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  </div>

                  {/* Circuit pattern */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-teal-600 dark:text-teal-400"
                    >
                      <motion.path
                        d="M20,20 L80,20 L80,50 L50,50 L50,80 L80,80"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="3"
                        fill="currentColor"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </svg>
                  </div>

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

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {skill.category}
                    </h3>

                    {/* Progress bar container */}
                    <div className="relative mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Proficiency
                        </span>
                        <span className="text-sm font-mono text-teal-600 dark:text-teal-400 font-semibold">
                          {skill.progress}%
                        </span>
                      </div>

                      {/* Progress track */}
                      <div className="relative h-3 bg-gray-300/50 dark:bg-gray-600/50 rounded-full overflow-hidden">
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        {/* Progress fill */}
                        <motion.div
                          className="relative h-full bg-gradient-to-r from-teal-700 to-teal-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: index * 0.1,
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 1,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {skill.techs.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border border-teal-800 dark:border-teal-300 hover:border-teal-600 hover:dark:border-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800/40 transition-all duration-200 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="relative w-8 h-8">
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-teal-400/60 group-hover:bg-teal-400"
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-0.5 h-full bg-teal-400/60 group-hover:bg-teal-400"
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5 + 0.5,
                        }}
                      />
                    </div>
                  </div>

         
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={slideUpVariants}
          className="h-auto w-full relative my-6 group"
        >
          <motion.div
            className="relative overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-[30px] rounded-tl-none rounded-br-none shadow-xl dark:shadow-[#0c121d] transform"
            whileHover={{
              boxShadow: [
                "0 0 20px rgba(13,148,136,0.3)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Border light effect */}
            <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
            </div>
            
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

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

            <div className="relative z-10">
              <LogoWall
                items={technologies}
                direction="horizontal"
                size="clamp(6rem, 1rem + 25vmin, 22rem)"
                duration="60s"
                bgAccentColor="#2DD4BF"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-7 pt-7"
      >
        <motion.h2
          variants={slideUpVariants}
          className="text-[42px] md:text-5xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
        >
          Education
        </motion.h2>
        <motion.div variants={containerVariants} className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              ref={educationRef}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView3 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              onMouseEnter={() => setHoveredEducationIndex(index)}
              onMouseLeave={() => setHoveredEducationIndex(null)}
            >
              {/* Holographic timeline connector */}
              {index < educations.length - 1 && (
                <motion.div
                  className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-teal-400 to-cyan-400"
                  initial={{ height: 0 }}
                  animate={isInView3 ? { height: 96 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                />
              )}

              {/* Main container with matching border style and glass effect */}
              <motion.div
                className="relative overflow-hidden transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-[30px] rounded-tl-none rounded-br-none shadow-xl dark:shadow-[#0c121d] transform"
                animate={
                  hoveredEducationIndex === index
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
                  repeat: hoveredEducationIndex === index ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {/* Border light effect */}
                <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
                </div>
                
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

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

                {/* Animated neural network background */}
                <div className="absolute inset-0 opacity-15">
                  <svg
                    width="100%"
                    height="100%"
                    className="text-teal-600 dark:text-teal-400"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1={Math.random() * 100 + "%"}
                        y1={Math.random() * 100 + "%"}
                        x2={Math.random() * 100 + "%"}
                        y2={Math.random() * 100 + "%"}
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: hoveredEducationIndex === index ? 1 : 0.5 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                      />
                    ))}
                  </svg>
                </div>

                <div className="relative z-10 p-6 flex flex-col md:flex-row items-start gap-6">
                  {/* Icon container */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 p-0.5">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-600 rounded-full" />
                    </div>

                    {/* Icon background with pulse */}
                    <motion.div
                      className="relative w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-500 dark:from-teal-400 dark:to-cyan-500 rounded-full flex items-center justify-center"
                      animate={{
                        boxShadow: hoveredEducationIndex === index
                          ? [
                              "0 0 20px rgba(13,148,136,0.3)",
                              "0 0 40px rgba(13,148,136,0.6)",
                              "0 0 20px rgba(13,148,136,0.3)",
                            ]
                          : "0 0 20px rgba(13,148,136,0.3)",
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {React.createElement(edu.icon, {
                        size: 28,
                        className: "text-white",
                      })}
                    </motion.div>

                    {/* Orbital rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-teal-400/30"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ scale: 1.25 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-cyan-400/20"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ scale: 1.5 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>

                      {/* Institution with holographic effect */}
                      <motion.div
                        className="flex flex-col md:flex-row md:items-center gap-2 mb-2"
                        whileHover={{
                          textShadow: "0 0 10px rgba(13,148,136,0.5)",
                        }}
                      >
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">
                          {edu.institution}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 hidden md:inline">
                          •
                        </span>
                        <span className="text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300  font-mono bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/30 w-fit">
                          {edu.year}
                        </span>
                      </motion.div>

                      {/* Description with typing effect simulation */}
                      <motion.p
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView3 ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: index * 0.3 + 0.6 }}
                      >
                        {edu.description}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      className="mt-6 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.9 }}
                    >
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-teal-400/30"
                            animate={
                              hoveredEducationIndex === index
                                ? {
                                    backgroundColor: [
                                      "rgba(13,148,136,0.3)",
                                      "rgba(13,148,136,1)",
                                      "rgba(13,148,136,0.3)",
                                    ],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 0.8,
                              delay: i * 0.1,
                              repeat: hoveredEducationIndex === index ? Infinity : 0,
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        STATUS: COMPLETED
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Corner geometric elements with theme compatibility */}

                <div className="absolute bottom-0 right-0 p-4">
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute bottom-0 right-0 w-full h-0.5 bg-teal-400/60 group-hover:bg-teal-400"
                      animate={{ scaleX: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-0.5 h-full bg-teal-400/60 group-hover:bg-teal-400"
                      animate={{ scaleY: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5 + 0.5,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
