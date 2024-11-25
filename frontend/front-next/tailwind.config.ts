import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#120904',
        'background': '#fcf4f0',
        'primary': '#d26831',
        'secondary': '#e6d18f',
        'accent': '#dbd55c',
       },
                 
    },
  },
  plugins: [],
} satisfies Config;
