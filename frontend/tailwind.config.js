// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // Include paths to your source files
    "./node_modules/flowbite/**/*.js", // Include Flowbite plugin scripts
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#27374D',   // Custom primary blue color
        'secondary-blue': '#34495E', // Custom secondary blue color
        'main-background': '#F1F1F1',// Custom main background color
        'my-green': '#419958',       // Custom green color
        'my-red': '#EB455F',         // Custom red color
        'my-yellow': '#F5943F', 
        'my-blue': '#7579E7',
        'my-green-2': '#399918',       // Custom green color
        'my-red-2': '#C7253E',         // Custom red color
        'my-yellow-2': '#FABC3F', 
        'my-blue-2': '#5356FF'     // Custom yellow color
        // Add other custom colors here
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true, // Enable charts functionality in Flowbite
    }),
  ],
  darkMode: 'class',  // Enable dark mode using a class
};
