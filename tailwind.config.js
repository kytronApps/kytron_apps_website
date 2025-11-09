/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f3f0",
        foreground: "#3b2f26",
        primary: {
          DEFAULT: "#b86833", // café cálido
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e7e3df",
          foreground: "#3b2f26",
        },
        muted: {
          DEFAULT: "#a69486",
          foreground: "#4a3a2f",
        },
        accent: {
          DEFAULT: "#d9c3a8",
          foreground: "#3b2f26",
        },
        border: "#d6ccc2",
        card: "#ffffff",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};