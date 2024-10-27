/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
colors:{
  'hr': '#DD2242',
  'tt': 'rgba(255, 255, 255, 0.80)',
  'tg': '#939393',
  'tb': '#010A20',
}
    },
  },
  plugins: [],
}

