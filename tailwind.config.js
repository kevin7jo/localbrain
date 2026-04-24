/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#f4f5f7",
          100: "#e4e6ea",
          200: "#c9ced6",
          300: "#a4adb9",
          400: "#7a8699",
          500: "#5c6575",
          600: "#424a58",
          700: "#313946",
          800: "#1e2329",
          900: "#12161a",
          950: "#0a0c0e",
        },
        electric: {
          50: "#eef8ff",
          100: "#d8edff",
          200: "#b3dbff",
          300: "#7ac0ff",
          400: "#3d9eff",
          500: "#0a84ff",
          600: "#0068d4",
          700: "#0052a8",
          800: "#003d7a",
          900: "#002a52",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,12,14,0) 0%, rgba(10,12,14,0.6) 40%, #0a0c0e 100%), linear-gradient(90deg, rgba(10,122,196,0.04) 1px, transparent 1px), linear-gradient(rgba(10,122,196,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
