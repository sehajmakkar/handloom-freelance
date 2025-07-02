import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: {
          50: "#fefcf8",
          100: "#fdf8f0",
          200: "#faf2e4",
        },
        earth: {
          50: "#f9f7f4",
          100: "#f5f1eb",
          200: "#e8ddd0",
          300: "#d4c4a8",
          400: "#b8a082",
          500: "#9d7c5c",
          600: "#8b6b4a",
          700: "#6d5238",
          800: "#4a3626",
          900: "#2d1f15",
        },
        terracotta: {
          50: "#fdf6f3",
          100: "#fbeae3",
          200: "#f6d1c1",
          300: "#efb091",
          400: "#e68b5f",
          500: "#d4704f",
          600: "#c4593a",
          700: "#a3472f",
          800: "#853c2b",
          900: "#6d3426",
        },
        sage: {
          50: "#f6f8f6",
          100: "#e8f0e8",
          200: "#d1e1d1",
          300: "#a8c8a8",
          400: "#7ba87b",
          500: "#5a8a5a",
          600: "#456b45",
          700: "#3a5a3a",
          800: "#2f4a2f",
          900: "#283d28",
        },
        rust: {
          400: "#cd7f32",
          500: "#b8691a",
          600: "#a0570f",
        },
        ochre: {
          400: "#cc8e35",
          500: "#b8791f",
          600: "#a0650f",
        },
        indigo: {
          400: "#4f6b8e",
          500: "#3d5a7a",
          600: "#2d4866",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config