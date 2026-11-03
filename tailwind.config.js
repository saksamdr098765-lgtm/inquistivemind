/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tutor: {
          cream: "var(--tutor-cream, #FFF8EC)",
          ink: "var(--tutor-ink, #111111)",
          mint: "var(--tutor-mint, #BAEDD0)",
          lemon: "var(--tutor-lemon, #FDF082)",
          peach: "var(--tutor-peach, #FFD4BC)",
          lavender: "var(--tutor-lavender, #E4D2FF)",
          sky: "var(--tutor-sky, #BFE6FF)",
          rose: "var(--tutor-rose, #FFD2DF)",
        },
      },
      boxShadow: {
        "hard-sm": "var(--shadow-hard-sm, 2px 2px 0 0 #111111)",
        hard: "var(--shadow-hard, 4px 4px 0 0 #111111)",
        "hard-md": "var(--shadow-hard-md, 5px 5px 0 0 #111111)",
        "hard-lg": "var(--shadow-hard-lg, 6px 6px 0 0 #111111)",
        "hard-xl": "var(--shadow-hard-xl, 8px 8px 0 0 #111111)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
