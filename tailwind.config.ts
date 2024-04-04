import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      'xs': '320px',
      "2xl": "1400px",
    ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'custom-blue': '#03045E',
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/Eléments_Graphiques/Eléments_Graphiques/Plan de travail 108.svg')",
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
        "color":{
          from: { color: "bg-blue-0" },
          to: { color: "bg-blue-800" },
        },
        "rotateYoyo": {
          '0%, 100%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
        "moveUpAndDown": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        slideAndWave: {
          '0%': { transform: 'translateX(-100%) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-50%) translateY(-20px) rotate(-10deg)' },
          '50%': { transform: 'translateX(-25%) translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateX(-12.5%) translateY(-20px) rotate(10deg)' },
          '100%': { transform: 'translateX(0%) translateY(0) rotate(0deg)' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "flip": {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "color": "color 0.2s ease-out",
        'rotate-yoyo': 'rotateYoyo 3s infinite ease',
        'move-up-and-down': 'moveUpAndDown 4s infinite ease-in-out',
        'slideAndWave': 'slideAndWave 4s ease-in-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'flip': 'flip 2s ease',
      },
      fontFamily: {
        pinkerston: ["'Pinkerston'", 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config