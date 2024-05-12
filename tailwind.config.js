/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  'custom-gradient': 'linear-gradient(90deg, hsla(207, 27%, 44%, 1) 0%, hsla(230, 33%, 47%, 1) 100%)',

      },
      colors: {
        'main-background': '#C6C5D8',
        'navbar': '#53748F', 
        'primary-text': '#4b6178', 
        'secondary-text': '#8594B1', 
        'button': '#B6B7CE',
        skyblue: '#cbe6f8',
        paleblue: '#e1efff'
      },
    },
  },
  plugins: [],
};
