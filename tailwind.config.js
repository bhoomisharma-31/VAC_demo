/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080C0B",
          deep: "#050807",
          surface: "#0F1714",
          surface2: "#15221E",
          surface3: "#1B2E28",
        },
        border: {
          DEFAULT: "#1A2E26",
          soft: "#12221B",
          emerald: "#22C55E",
          gold: "#22C55E",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#9CA3AF",
          faint: "#6B7280",
        },
        emerald: {
          DEFAULT: "#22C55E",
          neon: "#4ADE80",
          dim: "#15803D",
          glow: "rgba(34, 197, 94, 0.3)",
        },
        gold: {
          DEFAULT: "#22C55E",
          metallic: "#4ADE80",
          light: "rgba(34, 197, 94, 0.15)",
          dim: "#15803D",
          glow: "rgba(34, 197, 94, 0.25)",
        },
        teal: {
          DEFAULT: "#10B981",
          dim: "#047857",
          glow: "rgba(16, 185, 129, 0.2)",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          dim: "#6D28D9",
          glow: "rgba(139, 92, 246, 0.2)",
        },
        amber: {
          DEFAULT: "#F59E0B",
          dim: "#B45309",
          glow: "rgba(245, 158, 11, 0.2)",
        },
        coral: {
          DEFAULT: "#EF4444",
          dim: "#991B1B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -4px rgba(34, 197, 94, 0.35), 0 0 10px -2px rgba(34, 197, 94, 0.2)",
        glowEmerald: "0 0 35px -5px rgba(34, 197, 94, 0.4), 0 0 15px -3px rgba(74, 222, 128, 0.3)",
        glowViolet: "0 0 25px -4px rgba(139, 92, 246, 0.3)",
        glowGold: "0 0 25px -4px rgba(34, 197, 94, 0.35)",
        card: "0 10px 30px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(34,197,94,0.12)",
      },
    },
  },
  plugins: [],
};
