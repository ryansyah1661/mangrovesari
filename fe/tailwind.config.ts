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
        primary: "#023625",
        "primary-container": "#1f4d3a",
        "on-primary": "#ffffff",
        "on-primary-container": "#8dbda4",
        secondary: "#186c40",
        "secondary-container": "#a1f1ba",
        "on-secondary-container": "#1e7044",
        "secondary-fixed": "#a3f4bd",
        "on-secondary-fixed": "#00210f",
        tertiary: "#521f00",
        "tertiary-container": "#753000",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#ffdbca",
        background: "#fdf9f0",
        surface: "#fdf9f0",
        "surface-bright": "#fdf9f0",
        "surface-container": "#f1eee5",
        "surface-container-low": "#f7f3ea",
        "surface-container-high": "#ece8df",
        "surface-container-highest": "#e6e2d9",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1c1c16",
        "on-surface-variant": "#414944",
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        margin: "3rem",
      },
      fontFamily: {
        display: ["Newsreader", "serif"],
        headline: ["Newsreader", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        label: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
