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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(90deg, hsla(207, 27%, 34%, 1) 0%, hsla(230, 33%, 37%, 1) 100%)',
        'test-grad': 'linear-gradient(90deg, hsla(223, 23%, 24%, 1) 0%, hsla(220, 25%, 46%, 1) 40%, hsla(219, 50%, 31%, 1) 62%, hsla(0, 0%, 21%, 1) 99%)',
        'text-gradient': 'radial-gradient(circle, hsla(256, 100%, 94%, 1) 0%, hsla(229, 100%, 96%, 1) 100%)',
      },
      colors: {
        'main-background': '#C6C5D8',
        'navbar': '#53748F', 
        'primary-text': '#f0f0f0', 
        'secondary-text': '#8594B1', 
        'button': '#B6B7CE',
        skyblue: '#cbe6f8',
        paleblue: '#e1efff'
      },
      textShadow: {
        'default': '2px 2px 5px rgba(0, 0, 0, 0.4)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.6)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.7)',
      },
  
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.7)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
