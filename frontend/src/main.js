// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css' // Import your Tailwind CSS styles
import 'flowbite/dist/flowbite.min.js'; // Import Flowbite JavaScript
import VueApexCharts from 'vue3-apexcharts'; // Import VueApexCharts

// Create the Vue application instance
const app = createApp(App);

// Register the ApexCharts component globally
app.component('ApexChart', VueApexCharts);

// Mount the Vue application to the DOM element with the id "app"
app.mount('#app');
