import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-serif-jp)", "serif"],
        heading: ["var(--font-serif-jp)", "serif"],
        body:    ["var(--font-sans-jp)", "sans-serif"],
        elegant: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        brand: {
          primary:   "var(--primary)",
          accent:    "var(--accent)",
          secondary: "var(--secondary)",
          muted:     "var(--muted)",
          blush:     "var(--blush)",
          pearl:     "var(--pearl)",
          gold:      "var(--gold-accent)",
        },
      },
      borderRadius: {
        brand: "var(--radius)",
      },
    },
  },
} satisfies Config;
