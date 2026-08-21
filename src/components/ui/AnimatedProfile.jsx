import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const AnimatedProfile = ({ imageSrc }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center">
      {/* Glowing border */}
      <div className="absolute inset-4 rounded-full bg-transparent blur-lg" />

      {/* Outer rotating ring */}
      <div className="absolute w-[310px] h-[310px] sm:w-[400px] sm:h-[400px]">
        <div
          className="w-full h-full rounded-full border-4 border-dashed border-teal-600 dark:border-teal-400 opacity-50"
          style={{
            animation: "rotate 15s linear infinite",
          }}
        />
      </div>

      {/* Inner static container */}
      <div className="relative">
        {/* Decorative circles */}
        <div
          className="block xl:hidden absolute -top-2 -left-2 w-8 h-8 rounded-full bg-teal-600 dark:bg-teal-400 opacity-40"
          style={{
            animation: "pulsate 3s ease-in-out infinite",
          }}
        />
        <div
          className="block xl:hidden absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-teal-600 dark:bg-teal-400 opacity-40"
          style={{
            animation: "pulsate 3s ease-in-out infinite",
            animationDelay: "0.3s",
          }}
        />

        {/* Energy particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              animate={{
                x: [
                  Math.cos(i * 30 * (Math.PI / 180)) * 150 + 150,
                  Math.cos((i * 30 + 180) * (Math.PI / 180)) * 150 + 150,
                  Math.cos(i * 30 * (Math.PI / 180)) * 150 + 150,
                ],
                y: [
                  Math.sin(i * 30 * (Math.PI / 180)) * 150 + 150,
                  Math.sin((i * 30 + 180) * (Math.PI / 180)) * 150 + 150,
                  Math.sin(i * 30 * (Math.PI / 180)) * 150 + 150,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Main image container */}
        <motion.div 
          className="relative h-[270px] w-[270px] sm:h-[360px] sm:w-[360px] rounded-full overflow-hidden border-4 border-teal-400/60 bg-transparent"
          animate={{
            boxShadow: ["0 0 30px rgba(13,148,136,0.4)", "0 0 60px rgba(13,148,136,0.6)", "0 0 30px rgba(13,148,136,0.4)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-transparent rounded-full" />


          {/* Image */}
          <img
            src={imageSrc}
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-full"
          />

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal-400/20 to-transparent rounded-full" />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 -right-8 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-transparent"
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-8 w-16 h-0.5 bg-gradient-to-l from-teal-400 to-transparent"
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />

      {/* Floating dots */}
      <div
        className="block xl:hidden absolute -top-4 -right-4 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 opacity-70"
        style={{
          animation: "float_1 3s ease-in-out infinite",
        }}
      />
      <div
        className="block xl:hidden absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 opacity-70"
        style={{
          animation: "float_1 3s ease-in-out infinite",
          animationDelay: "0.15s",
        }}
      />
    </div>
  );
};

export default AnimatedProfile;
