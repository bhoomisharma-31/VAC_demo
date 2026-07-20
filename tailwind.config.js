/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAF8F5",
          deep: "#F4EFE6",
          surface: "#FFFFFF",
          surface2: "#F6F1E7",
          surface3: "#EDE5D4",
        },
        border: {
          DEFAULT: "#E5DEC9",
          soft: "#F0EAD9",
          gold: "#D4AF37",
        },
        text: {
          primary: "#1C1917",
          muted: "#57534E",
          faint: "#78716C",
        },
        gold: {
          DEFAULT: "#C59B27",
          metallic: "#D4AF37",
          light: "#FDF4DB",
          dim: "#92400E",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        teal: {
          DEFAULT: "#059669",
          dim: "#047857",
          glow: "rgba(5, 150, 105, 0.15)",
        },
        violet: {
          DEFAULT: "#7C3AED",
          dim: "#6D28D9",
          glow: "rgba(124, 58, 237, 0.15)",
        },
        amber: {
          DEFAULT: "#D97706",
          dim: "#B45309",
          glow: "rgba(217, 119, 6, 0.15)",
        },
        coral: {
          DEFAULT: "#DC2626",
          dim: "#991B1B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.3), 0 8px 25px -6px rgba(212,175,55,0.2)",
        glowViolet: "0 0 0 1px rgba(124,58,237,0.2), 0 8px 25px -6px rgba(124,58,237,0.15)",
        glowGold: "0 0 0 1px rgba(212,175,55,0.4), 0 12px 35px -8px rgba(197,155,39,0.3)",
        card: "0 2px 8px -2px rgba(180,150,90,0.08), 0 12px 32px -8px rgba(120,100,50,0.08)",
      },
    },
  },
  plugins: [],
};
