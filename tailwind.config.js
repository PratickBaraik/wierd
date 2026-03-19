/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    /* ================================
       CONTAINER SYSTEM
    ================================ */
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* ================================
         FONT SYSTEM
      ================================ */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* ================================
         COLOR SYSTEM (DESIGN TOKENS)
      ================================ */
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
        },

        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        border: {
          DEFAULT: "var(--border)",
        },

        glass: {
          DEFAULT: "var(--glass-bg)",
          border: "var(--glass-border)",
        },
      },

      /* ================================
         BORDER RADIUS SYSTEM
      ================================ */
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      /* ================================
         SHADOW SYSTEM (DEPTH SCALE)
      ================================ */
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        medium: "0 10px 40px rgba(0,0,0,0.2)",
        strong: "0 20px 60px rgba(0,0,0,0.35)",
      },

      /* ================================
         BACKDROP BLUR
      ================================ */
      backdropBlur: {
        xs: "2px",
      },

      /* ================================
         SPACING SCALE EXTENSIONS
      ================================ */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      /* ================================
         GENERIC ANIMATIONS ONLY
         (Reusable across app)
      ================================ */
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
      },
    },
  },

  plugins: [forms, typography],
};
