import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, ExternalLink, Zap } from "lucide-react";
import PropTypes from "prop-types";
import { portfolioData } from "../constants/portfolioData";

// Enhanced Certification Card Component
const FuturisticCertificationCard = ({ cert, index, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
        type: "spring",
        stiffness: 120,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="space-y-10"
    >
      <a
        href={cert.to}
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-full"
      >
        <motion.div 
          className="relative h-full p-6 transition-all duration-300 border-2 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden"
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
          <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-[30px] rounded-tl-none rounded-br-none bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
          </div>
          
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 rounded-[30px] rounded-tl-none rounded-br-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.3)_1px,transparent_1px)] bg-[size:15px_15px]" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
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

          {/* Scan line effect - properly contained */}
          <motion.div
            className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100"
            animate={isHovered ? { y: [0, 250, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              clipPath: "inset(0 0 0 0)",
            }}
          />

          {/* Content section */}
          <div className="relative z-10">
            {/* Title with external link icon */}
            <div className="flex justify-between items-start mb-4">
              <motion.h3
                className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 pr-2"
                animate={
                  isHovered
                    ? {
                        textShadow: "0 0 20px rgba(13,148,136,0.3)",
                      }
                    : {}
                }
              >
                {cert.title}
              </motion.h3>

              <motion.div
                className="w-6 flex-shrink-0"
                animate={
                  isHovered
                    ? { rotate: 45, scale: 1.1 }
                    : { rotate: 0, scale: 1 }
                }
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 mt-1 shadow-xl dark:shadow-[#0c121d] transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-300 lg:line-clamp-3 lg:group-hover:line-clamp-none transition-all duration-300"
              animate={
                isHovered
                  ? {
                      textShadow: "0 0 10px rgba(13,148,136,0.1)",
                    }
                  : {}
              }
            >
              {cert.description}
            </motion.p>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

FuturisticCertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  delay: PropTypes.number,
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("All");

  const { certifications } = portfolioData;

  const organizations = [
    "All",
    ...new Set(certifications.map((cert) => cert.organization)),
  ];

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedOrg === "All" || cert.organization === selectedOrg)
  );

  const groupedCertifications = filteredCertifications.reduce((acc, cert) => {
    if (!acc[cert.organization]) {
      acc[cert.organization] = [];
    }
    acc[cert.organization].push(cert);
    return acc;
  }, {});

  return (
    <section className="min-h-screen relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="mx-auto px-7"
      >
        {/* Enhanced Title Section */}
        <motion.h1
          className="flex items-center justify-center py-7 mb-5 text-[42px] md:text-5xl font-bold text-teal-600 dark:text-teal-400"
          animate={{
            textShadow: [
              "0 0 20px rgba(13,148,136,0.3)",
              "0 0 30px rgba(13,148,136,0.4)",
              "0 0 20px rgba(13,148,136,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Certifications
        </motion.h1>

        {/* Enhanced Controls Section */}
        <motion.div
          className="mb-10 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-blue-400/10 rounded-lg opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300"
              whileHover={{ scale: 1.02 }}
            />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <motion.input
                type="text"
                placeholder="Search certifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 transition-all duration-300 border-2 border-gray-300 dark:border-gray-500 hover:border-teal-400 hover:dark:border-teal-400 text-gray-600 dark:text-gray-300 focus:outline-none focus:border-teal-500 focus:shadow-lg focus:shadow-teal-400/20"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
          </div>

          {/* Enhanced Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {organizations.map((org, index) => (
              <motion.div
                key={org}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.button
                  onClick={() => setSelectedOrg(org)}
                  className={`relative overflow-hidden px-4 py-2 transition-all duration-300 shadow-xl dark:shadow-[#0c121d] border-2 ${
                    selectedOrg === org
                      ? "bg-teal-600/90 dark:bg-teal-500/90 backdrop-blur-md text-white border-teal-400/50 dark:border-teal-300/50"
                      : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-600 dark:text-gray-300 border-teal-500/40 dark:border-teal-400/40 hover:border-teal-500/50 dark:hover:border-teal-400/50"
                  } rounded-full`}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Border light effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm" />
                  </div>

                  {/* Active button glow effect */}
                  {selectedOrg === org && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-lg"
                      layoutId="activeFilter"
                    />
                  )}

                  <span className="relative z-10 font-medium">{org}</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Results Section */}
        {Object.entries(groupedCertifications).map(([org, certs], orgIndex) => (
          <motion.div
            key={org}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: orgIndex * 0.1 }}
            className="mb-12"
          >
            {/* Organization Header */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: orgIndex * 0.1 + 0.2 }}
            >
              <div className="flex-wrap flex items-center gap-3">
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Zap size={16} className="text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {org}
                </h2>
              </div>
              <motion.div
                className="hidden lg:block flex-1 h-0.5 bg-gradient-to-r from-teal-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: orgIndex * 0.1 + 0.4 }}
              />
              <motion.span
                className="hidden lg:block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm border border-teal-300 dark:border-teal-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: orgIndex * 0.1 + 0.6 }}
              >
                {certs.length}{" "}
                {certs.length === 1 ? "certification" : "certifications"}
              </motion.span>
            </motion.div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, index) => (
                <FuturisticCertificationCard
                  key={index}
                  cert={cert}
                  index={index}
                  delay={orgIndex * 0.2}
                />
              ))}
            </div>
          </motion.div>
        ))}

        {/* No results message */}
        {Object.keys(groupedCertifications).length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
              <Search size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              No certifications found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
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
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
