import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'rowdies': ['Rowdies', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'Bodoni': ['Bodoni Moda', 'serif'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Vollkorn': ['Vollkorn', 'serif'],
      'Lora': ['Lora', 'serif'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Yeseva': ['Yeseva One', 'serif'],
      'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      'roboto-condensed-light': ['Roboto Condensed', 'sans-serif'],
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'buttonColor': '#545AE8',
      'searchButtonColor': '#BCF3FF',
      'searchButtonColor1': '#B8FFEE',
      'searchButtonColor2': '#F1FFC8',
      'searchButtonColor3': '#E1BFFB',
      'bgGradientFrom': '#4856D0',
      'bgGradientTo': '#D17F51',
      'bgVia': '#8198C5',
      'DimGray' :'#6D6D64',
      "ChineseSilver" : '#CCCCCC',
      "Emerald" : "#41C787",
      "Slate" : "#F8FAFC",   
      "orange_hover_step1" : '#EAA27E',
      "greenLine_5Steps" : '#41C787'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
