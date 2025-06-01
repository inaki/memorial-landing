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
          50: "#e7eaec",
          100: "#cfd5da",
          200: "#aab7c0",
          300: "#7a8d9b",
          400: "#4d5e6b",
          500: "#232e36", // main navy
          600: "#1c242a",
          700: "#151b1f",
          800: "#0e1214",
          900: "#080a0b",
          DEFAULT: "#232e36",
          foreground: "#f5f2ea",
        },
        secondary: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d2d9e5",
          300: "#acbad0",
          400: "#8095b5",
          500: "#5e759b",
          600: "#485e80",
          700: "#3a4b68",
          800: "#334058",
          900: "#2d384a",
          950: "#1c2331",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          50: "#fdf8ec",
          100: "#faedce",
          200: "#f5e0a6",
          300: "#eed17a",
          400: "#e7c25a",
          500: "#d4b063", // main gold
          600: "#b4954b",
          700: "#8e7137",
          800: "#6b5227",
          900: "#4d391a",
          DEFAULT: "#d4b063",
          foreground: "#232e36",
        },
        background: "#f5f2ea", // soft cream
        foreground: "#232e36", // navy for text
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
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
