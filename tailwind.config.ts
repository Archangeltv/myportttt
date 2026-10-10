import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14", deep: "#07090D", glacier: "#F2F4F1", soft: "#FAFBFA", accent: "#FF4D00",
      },
      fontFamily: { display: ["var(--font-archivo)", "Arial Narrow", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
    },
  },
  plugins: [],
};
export default config;
