<template>
    <a class="md:w-full w-full md:h-full block md:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-primary-blue dark:border-gray-700">
      <div class="nd:flex justify-between">
        <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">
        Line Graph<br>
        <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
          Incoming request per months
        </span> 
      </h5>
      <div class="flex gap-4">
        <form class="max-w-sm ">
      <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>
        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="G9" selected>G9</option>
          <option value="G10">G10</option>
          <option value="G11">G11</option>
          <option value="G12">G12</option>
          <option value="G13">G13</option>
        </select>    
      </form>
      <form class="max-w-sm ">
      <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="M1" selected>M1</option>
          <option value="M2">M2</option>
          <option value="M3">M3</option>
          <option value="M4">M4</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
        </select>
      </form>
      </div>
    </div>
      <div class="flex md:block items-center justify-center" id="chart">
        <!-- Use ApexChart component for line chart -->
        <apexchart class="w-full w-100" height="200" type="line" :options="chartOptions" :series="series"></apexchart>
      </div>
    </a>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts'
  
  export default {
    components: {
      apexchart: VueApexCharts
    },
    data() {
      return {
        series: [{
          name: 'Desktops',
          data: [40, 30, 70, 55, 60, 75, 45, 85, 25, 65, 50, 55] // Example data points for the line series
        }],
        chartOptions: {
          chart: {
            type: 'line',
            toolbar: {
              show: true // Show the toolbar
            },
            zoom: {
              enabled: false
            }
          },
          colors: ['#FF4560'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 4,
            colors: '#1C64F2',
          },
          grid: {
            row: {
              colors: ['transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
              style: {
                colors: '#9CA3AF',
                fontSize: '12px'
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: '#9CA3AF',
                fontSize: '12px'
              }
            }
          }
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  