/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        "jetbrains-mono": ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        midnight: {
          950: "#07040d",
          900: "#0b0818",
          850: "#100c22",
          800: "#150f2e",
          700: "#1e1540",
          600: "#2a1c58",
        },
        violet: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "violet-gradient":
          "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(126, 34, 206, 0.05) 50%, transparent 100%)",
        "violet-radial":
          "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.22), transparent 70%)",
        "custom-gradient":
          "linear-gradient(111.06deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
      },
    },
    keyframes: {
      zoomIn: {
        "0%": { transform: "scale(0.5)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      updown: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
      gradientFill: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      scrollX: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
      scrollY: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-100%)" },
      },
      shine: {
        "0%": { backgroundPosition: "100%" },
        "100%": { backgroundPosition: "-100%" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
      spinSlow: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      pingSlow: {
        "0%": { transform: "scale(0.9)", opacity: "0.7" },
        "50%": { transform: "scale(1.1)", opacity: "0.3" },
        "100%": { transform: "scale(0.9)", opacity: "0.7" },
      },
    },
    animation: {
      zoomIn: "zoomIn 1s ease-in-out",
      updown: "updown 3s linear infinite",
      gradientFill: "gradientFill 0.5s ease-in-out forwards",
      scrollX: "scrollX var(--duration) linear infinite",
      scrollY: "scrollY var(--duration) linear infinite",
      shine: "shine 5s linear infinite",
      spinSlow: "spin 15s linear infinite",
      pingSlow: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      float: "float 3s ease-in-out infinite",
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [
    import("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(168 85 247) rgb(243 232 255)",
        },
        ".dark .scrollbar-thin": {
          scrollbarColor: "rgb(168 85 247) rgb(16 12 34)",
        },
        ".scrollbar-thin::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar-thin::-webkit-scrollbar-track": {
          background: "rgb(243 232 255)",
          borderRadius: "10px",
        },
        ".dark .scrollbar-thin::-webkit-scrollbar-track": {
          background: "rgb(16 12 34)",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb": {
          background: "rgb(168 85 247)",
          borderRadius: "10px",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb:hover": {
          background: "rgb(147 51 234)",
        },
      };
      addUtilities(newUtilities, ["dark"]);
    },
  ],
};
