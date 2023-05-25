// /** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    fontFamily: {
      'sans': ['Gabriela'],
      'serif': ['Elsie'],
      'mono': ['Raleway'],
      'montserrat': ['Montserrat'],
      'poppins': ['Poppins'], 
      'playfair': ['Playfair Display'],
      
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'green-300': '#84d9bc',
      'green-500': '#10b981',
      'orange-400': '#fb923c',
      'orange-600': '#ea580c',
      'oscuro': '#262626',
      'indigo-200': '#c7d2fe',
      'indigo-500': '#6366f1',
      'gray-600': '#4b5563',
      'pink-600': '#db2777',
      'green-700': '#15803d',
      'principal': '#fff5eb',
      'fecha': '#a5c0c9',
      'footer': '#e5e7eb',
      'red-600': '#dc2626',
    },

    backgroundImage: {
      'css': "url('../img/css3.svg')",
      'html': "url('../img/html5.svg')",
      'bootstrap': "url('../img/bootstrap.svg')",
      'js': "url('../img/js.svg')",
      'birrete': "url('../img/birrete.png')",
      'react': "url('../img/react.svg')",
    },
    extend: {},
  },
  plugins: [],
}

