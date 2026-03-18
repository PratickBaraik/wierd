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
         COLOR SYSTEM (FULL TOKENS)
      ================================ */
      colors: {
        /* Backgrounds */
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
        },

        /* Text */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },

        /* Accent */
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        /* Borders */
        border: {
          DEFAULT: "var(--border)",
        },

        /* Glass */
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
         SHADOW SYSTEM (CINEMATIC)
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
         SPACING EXTENSIONS
      ================================ */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      /* ================================
         ANIMATIONS
      ================================ */
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "25%": { transform: "scaleY(0.7)" },
          "50%": { transform: "scaleY(1.8)" },
          "75%": { transform: "scaleY(1.2)" },
        },

        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        wave: "wave 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },

  plugins: [forms, typography],
};
