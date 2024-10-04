<template>
    <a class="md:w-full w-full md:h-full block md:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-primary-blue dark:border-gray-700 ">
        <div class="lg:flex justify-between">
        <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">Bar Graph<br>
        <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
          Weekday permissions. 
        </span> 
      </h5> 
      <div class="flex gap-4">
        <form class="max-w-sm ">
      <label for="years-select" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <select id="years-select" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="2024" selected>2024</option>
          <option value="2025">2025</option>
        </select>
      </form>
        <form class="max-w-sm ">
      <label for="months-select" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Months</label>
        <select id="months-select" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="All" selected>All time</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>    
      </form>
      </div>
    </div>
      <div class="flex md:block items-center justify-center" id="chart">
        <!-- Use ApexChart component for line chart -->
        <apexchart height="500" type="bar" :options="chartOptions" :series="series"></apexchart>
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
          name: 'Permission',
          data: [1, 5, 3, 2, 3, 10] // Example data points for the line series
        }],
        chartOptions: {
          chart: {
            type: 'radar',
            toolbar: {
              show: true // Show the toolbar
            },
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
              bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
              }
          },
          colors: ['#5356FF'],
          dataLabels: {
            enabled: true
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
            categories: ['Monday', 'Tueday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'],
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
          },
          responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            }
          }
        }]
        }
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  