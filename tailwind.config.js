/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  // Automatically follow system dark/light theme
  darkMode: "media",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* Typography */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* Advanced audio waveform animation */
      keyframes: {
        wave: {
          "0%,100%": { transform: "scaleY(0.3)" },
          "25%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.8)" },
          "75%": { transform: "scaleY(1.2)" },
        },
      },

      animation: {
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },

  plugins: [forms, typography],
};
