import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08090c",
        "bg-2": "#0b0d12",
        surface: "#11141d",
        "surface-2": "#1a1f2b",
        line: "#222836",
        "line-2": "#2d3445",
        text: "#e8e4d8",
        muted: "#9b94aa",
        dim: "#5a5666",
        amber: "#ffb259",
        "amber-2": "#ffd29a",
        patina: "#5fbfb0",
        "patina-2": "#8ad6c9",
        crimson: "#ef6b6b",
        violet: "#a584d6",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', "Georgia", "serif"],
        body: ['"Manrope"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"SF Mono"', "Menlo", "monospace"],
        zh: ['"Noto Sans SC"', '"Noto Serif SC"', "system-ui", "sans-serif"],
        zhDisplay: ['"Noto Serif SC"', "Georgia", "serif"],
      },
      animation: {
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "drift": "drift 22s linear infinite",
        "scan": "scan 6s ease-in-out infinite",
        "flicker": "flicker 4s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-40px, -40px)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(0%)", opacity: "0" },
          "50%": { transform: "translateY(100%)", opacity: ".4" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "47%": { opacity: "1" },
          "48%": { opacity: "0.4" },
          "49%": { opacity: "1" },
          "78%": { opacity: "1" },
          "79%": { opacity: "0.6" },
          "80%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
