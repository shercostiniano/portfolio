import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        teal: "#14b8a6",
        cyan: "#06b6d4",
        slate: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
