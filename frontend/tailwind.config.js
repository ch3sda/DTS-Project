// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        'primary-blue': '#27374D',
        'secondary-blue': '#34495E',
        'main-background': '#F1F1F1',
        // Add other custom colors here
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  
}


