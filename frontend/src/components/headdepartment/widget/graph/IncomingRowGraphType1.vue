<template>
    <a class="md:w-full w-full md:h-full block md:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-primary-blue dark:border-gray-700">
      <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">
        Line Graph<br>
        <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
          Incoming request per months
        </span> 
      </h5> 
      <div class="flex md:block items-center" id="chart">
        <!-- Use ApexChart component for line chart -->
        <apexchart type="bar" height="1200" :options="chartOptions" :series="series"></apexchart>      
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
              height: 600
            },
            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: '80%',
                rowHeight: '100%',
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
            yaxis: {
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
  