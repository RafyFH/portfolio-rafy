import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spicy: ['SpicyRice', 'sans-serif'],
        silkscreen: ['SilkScreen', 'sans-serif'],
        firasans: ['FiraSans', 'sans-serif'],// Menambahkan font baru
      },
      backgroundImage: {
        'custom-gradient-dark': 'linear-gradient(to bottom, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(12 9 50) 98.6%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "transparent-30": "rgba(12, 9, 50, 0.50)",
        "bg-dark-mode": "rgb(12 9 50)",
        "bg-light-mode": "#4e4376",
      },
    },
  },
  plugins: [],
};
export default config;
