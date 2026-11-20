/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          primary: "#5645d4",
          "primary-pressed": "#4534b3",
          navy: "#0a1530",
          "navy-deep": "#070f24",
          "navy-mid": "#1a2a52",
          canvas: "#ffffff",
          surface: "#f6f5f4",
          "surface-soft": "#fafaf9",
          hairline: "#e5e3df",
          "hairline-soft": "#ede9e4",
          "hairline-strong": "#c8c4be",
          ink: "#1a1a1a",
          charcoal: "#37352f",
          slate: "#5d5b54",
          steel: "#787671",
          stone: "#a4a097",
          // Dark Mode Specific Tokens
          "dark-bg": "#191919",
          "dark-surface": "#202020",
          "dark-card": "#252525",
          "dark-card-hover": "#2c2c2c",
          "dark-hairline": "#2e2e2e",
          "dark-hairline-soft": "#373737",
          "dark-text": "#ebebeb",
          "dark-muted": "#9b9a97",
          "dark-subtle": "#6e6e6e",
          // Pastel Tints
          peach: "#ffe8d4",
          rose: "#fde0ec",
          mint: "#d9f3e1",
          lavender: "#e6e0f5",
          sky: "#dcecfa",
          yellow: "#fef7d6",
          "yellow-bold": "#f9e79f",
          cream: "#f8f5e8",
          gray: "#f0eeec",
          // Brand Accents
          purple: "#7b3ff2",
          "purple-tag": "#391c57",
          green: "#1aae39",
          orange: "#dd5b00",
          "orange-deep": "#793400",
        },
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px", // Notion button standard
        lg: "12px", // Notion card standard
        xl: "16px",
        xxl: "20px",
      },
      boxShadow: {
        notion: "rgba(15, 15, 15, 0.08) 0px 4px 12px 0px",
        "notion-mockup": "rgba(15, 15, 15, 0.20) 0px 24px 48px -8px",
        "notion-subtle": "rgba(15, 15, 15, 0.04) 0px 1px 2px 0px",
      },
    },
  },
  plugins: [],
}
