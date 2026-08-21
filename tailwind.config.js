/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(111.06deg, #004CEA 36.46%, rgba(193, 23, 85, 0.8) 93.8%, #3777FD 115.55%)",
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
          scrollbarColor: "rgb(20 184 166) rgb(229 231 235)",
        },
        ".dark .scrollbar-thin": {
          scrollbarColor: "rgb(20 184 166) rgb(31 41 55)",
        },
        ".scrollbar-thin::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar-thin::-webkit-scrollbar-track": {
          background: "rgb(229 231 235)",
          borderRadius: "10px",
        },
        ".dark .scrollbar-thin::-webkit-scrollbar-track": {
          background: "rgb(31 41 55)",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb": {
          background: "rgb(20 184 166)",
          borderRadius: "10px",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb:hover": {
          background: "rgb(13 148 136)",
        },
      };
      addUtilities(newUtilities, ["dark"]);
    },
  ],
};
