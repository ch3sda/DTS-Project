<template>
  <a class=" md:w-full w-full md:h-full block sm:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-primary-blue dark:border-gray-700">
    <div class="md:flex justify-between">
        <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">Donut Graph<br>
        <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
          All of Incoming requests and status. 
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
      <apexchart type="donut" width="400" :options="chartOptions" :series="series"></apexchart>
    </div>
  </a>
</template>

//Graph's Formart [Approved(Green) , Declined(Red), Pending(Yellow)]

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [23, 2, 4],
      chartOptions: {
        chart: {
          type: 'donut',
          toolbar: {
                show: true // Disable the toolbar (removes the three-dot menu)
            },
        },
        colors: ["#419958", "#EB455F", "#F5943F"],
        labels: ['Approved','Declined','Pending'],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          colors: ["#419958", "#EB455F", "#F5943F"],
          type: 'normal',
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }
};
</script>

<style scoped>
  /* Your styles here */
</style>
