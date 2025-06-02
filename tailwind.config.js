/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#7F55B1",
          50: "#f3eefd",
          100: "#e3d8f9",
          200: "#c3aaf1",
          300: "#a37de9",
          400: "#885fe0",
          500: "#7F55B1",
          600: "#6b479a",
          700: "#593a81",
          800: "#472d68",
          900: "#362050",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9B7EBD",
          100: "#e8def5",
          200: "#d0bee9",
          300: "#b79edc",
          400: "#9B7EBD",
          500: "#886da8",
          600: "#745d92",
          700: "#604d7d",
          800: "#4c3d67",
          900: "#382d52",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#F49BAB",
          100: "#ffeef1",
          200: "#fcd4db",
          300: "#fbb9c5",
          400: "#F49BAB",
          500: "#e67d93",
          600: "#d85e75",
          700: "#ca4057",
          800: "#bc2139",
          900: "#ae021b",
          foreground: "#4a0e17",
        },
        background: "#FDF3F0",
        foreground: "#3a2e3a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#3a2e3a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#3a2e3a",
        },
        muted: {
          DEFAULT: "#f3eaf5",
          foreground: "#7a6b85",
        },
        destructive: {
          DEFAULT: "#f87171",
          foreground: "#fff1f2",
        },
        border: "#e5e5e5",
        input: "#e5e5e5",
        ring: "#7F55B1",
        chart: {
          1: "#7F55B1",
          2: "#9B7EBD",
          3: "#F49BAB",
          4: "#FFE1E0",
          5: "#e8def5",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
