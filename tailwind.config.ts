import type { Config } from "tailwindcss";

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
      'primary': '#565C88',
      'secondary': '#051821',
      'third': '#0d0a0d',
      'contrast-prim': '#1d2b53', //this is the font foor
      'google-logo': '#ffca36',
      'wave-color': '#4F547C',
      'shape-color': '#dec59f',
      'button-color': '#80839D',
      'button-stroke': '#ABB1C7',
      'bgcolor': '#212544',
      'testColor': '#F1F1EF',
      'LoginBGColor': '#8A8EAE',
      'LoginBGColor2': '#D9D9D9',
      'borderColor': '#121212',
      'WhiteColor': '#F6F6F6',
      'DarkGrey': '#191919',
      'wave-secondary': '#3A3E60',
      'subtext': '#959595',
      'whiteBGColor': '#F5F5F5',
      'bannerColor': '#141414',
      '': '#41C686',
      'greyColor': '#2B2828',
      'wordGradient': '#2B2828',
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
