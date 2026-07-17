/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0F1C",
          deep: "#070B14",
          surface: "#111A2E",
          surface2: "#182339",
          surface3: "#1F2C46",
        },
        border: {
          DEFAULT: "#212C46",
          soft: "#182339",
        },
        text: {
          primary: "#E8ECF6",
          muted: "#8794AD",
          faint: "#5A6685",
        },
        teal: {
          DEFAULT: "#2DD9C4",
          dim: "#1B8577",
          glow: "#2DD9C433",
        },
        violet: {
          DEFAULT: "#8B7FF6",
          dim: "#544CB3",
          glow: "#8B7FF633",
        },
        amber: {
          DEFAULT: "#F5A93F",
          dim: "#A9762F",
          glow: "#F5A93F33",
        },
        coral: {
          DEFAULT: "#F0645F",
          dim: "#A64743",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,217,196,0.15), 0 8px 30px -8px rgba(45,217,196,0.25)",
        glowViolet: "0 0 0 1px rgba(139,127,246,0.15), 0 8px 30px -8px rgba(139,127,246,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
