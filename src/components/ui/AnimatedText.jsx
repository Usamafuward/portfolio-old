/* eslint-disable react/prop-types */
import { DarkModeContext } from "@/context/DarkModeContext";
import { useContext } from "react";

const AnimatedText = ({ texts = ["AI/ML Engineer", "Software Developer"] }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="relative h-[38px] overflow-hidden">
      {texts.map((text, index) => (
        <div
          key={text}
          className="absolute w-full text-2xl md:text-3xl font-medium"
          style={{
            color: "transparent",
            WebkitTextStroke: darkMode ? "0.5px #2DD4BF" : "0.7px #0d9488",
            animation: `displayText 8s linear infinite`,
            animationDelay: `calc(-4s * ${index})`,
          }}
        >
          <span className="relative inline-block">
            {text}
            <span
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap border-r-2 dark:border-teal-400 border-teal-600"
              style={{
                color: darkMode ? "#2DD4BF" : "#0d9488",
                width: 0,
                animation: "fillText 4s linear infinite",
                animationDelay: `calc(-4s * ${index})`,
              }}
            >
              {text}
            </span>
          </span>
        </div>
      ))}

      <style>{`
        @keyframes displayText {
          0%,
          50% {
            display: inline-block;
          }
          50.1%,
          100% {
            display: none;
          }
        }

        @keyframes fillText {
          0%,
          10% {
            width: 0;
          }
          70%,
          90% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
