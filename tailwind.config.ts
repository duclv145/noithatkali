import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kali warm palette
        cream: "#F1E9DA",
        sand: "#E4D7C1",
        ochre: "#B5853A",
        gold: "#C8983D",
        clay: "#9A6A34",
        umber: "#1A1411",
        ink: "#12100D",
        brick: "#9E3A1F",
      },
      fontFamily: {
        // Elegant high-contrast serif (Cormorant Garamond)
        display: ["var(--font-display)", "Georgia", "serif"],
        // Bold neo-grotesque (Archivo) — the felix-nieto "sans" voice
        grotesk: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        // Body / UI (Be Vietnam Pro)
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
