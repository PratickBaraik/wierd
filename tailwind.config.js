/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",

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
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* Advanced audio waveform animation */
      keyframes: {
        wave: {
          "0%,100%": { transform: "scaleY(0.35)" },
          "20%": { transform: "scaleY(1.1)" },
          "40%": { transform: "scaleY(1.8)" },
          "60%": { transform: "scaleY(1.3)" },
          "80%": { transform: "scaleY(0.7)" },
        },
      },

      animation: {
        wave: "wave 1.05s cubic-bezier(0.4,0,0.2,1) infinite",
      },
    },
  },

  plugins: [forms, typography],
};
