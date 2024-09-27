<template>
    <a class="md:w-full w-full md:h-full block md:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-primary-blue dark:border-gray-700">
      <div class="lg:flex justify-between">
        <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">
        Bar Graph<br>
        <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
            Comparation of Incoming request of each class
        </span> 
      </h5>
      <div class="flex gap-4">
        <form class="max-w-sm ">
      <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="2024" selected>2024</option>
          <option value="2025">2025</option>
        </select>
      </form>
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
      </div>
    </div>
      <div class="flex md:block items-center justify-center" id="chart">
        <!-- Use ApexChart component for line chart -->
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>      
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
        return{
          
          series: [
                {
                    name: 'M1',
                    data: [12,12,12,44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'M2',
                    data: [12,12,12,76, 85, 101, 98, 87, 105, 91, 114, 94]
                }, {
                    name: 'M3',
                    data: [12,12,12,35, 41, 36, 26, 45, 48, 52, 53, 41]
                },{
                    name: 'A1',
                    data: [12,12,12,35, 41, 36, 26, 45, 48, 52, 53, 41]
                },{
                    name: 'A2',
                    data: [12,12,12,35, 41, 36, 26, 45, 48, 52, 53, 41]
                },{
                    name: 'A3',
                    data: [12,12,12,35, 41, 36, 26, 45, 48, 52, 53, 41]
                }
            ],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Jan' ,'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              labels: {
              style: {
                colors: '#9CA3AF',
              }
              }
            },
            yaxis: {
                title:{
                    text: 'Permission total in each class',
                    style: {
                        color: '#9CA3AF'  // Corrected from 'textcolors' to 'style'
                    } 
                },
              labels: {
                style: {
                    colors: '#9CA3AF',
                }
              }
            },
            fill: {
              opacity: 1    
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " Permissions"
                }
              }
            }
          },
        }
        },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  