/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'sky-500': '#0ea5e9',
      'blueSite': '#0DA6E9',
      'blueLink': '#0E5F86',
      'orangeSite': '#FBAF00',
      'greenSite': '#6EEB83',
      'greySite': '#625F63',
      'blackSite': '#1B1B1E',
      'slate-300': '#cbd5e1'
    },
    boxShadow: {
      '3xl': '0 0px 60px -15px rgba(0, 0, 0, 0.5)',
    }

  },
  plugins: [],

}

