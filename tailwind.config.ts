import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        "2xl": "5rem"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "rgb(6, 7, 11)",
        foreground: "rgb(244, 245, 248)",
        accent: {
          DEFAULT: "rgb(93, 214, 255)",
          foreground: "rgb(4, 16, 26)"
        },
        muted: {
          DEFAULT: "rgba(255,255,255,0.06)",
          foreground: "rgba(229, 231, 235, 0.64)"
        }
      },
      borderRadius: {
        "4xl": "2.25rem"
      },
      boxShadow: {
        glass: "0 2px 40px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(93,214,255,0.25), transparent 60%), radial-gradient(circle at 80% 10%, rgba(255,97,209,0.18), transparent 55%), radial-gradient(circle at 50% 80%, rgba(105,117,255,0.22), transparent 60%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scroll-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "scroll-marquee 18s linear infinite"
      },
      transitionTimingFunction: {
        "spring-snappy": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: [animate]
};

export default config;

