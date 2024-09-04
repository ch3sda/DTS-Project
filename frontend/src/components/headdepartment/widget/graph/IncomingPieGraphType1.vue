<template>
  <a class=" md:w-full w-full md:h-full block sm:p-4 p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-primary-blue dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-lg font-normal md:text-2xl tracking-tight text-primary-blue dark:text-white">Donut Graph<br>
      <span class="mb-2 text-xs font-thin md:text-lg tracking-tight text-gray-500 dark:text-gray-400"> 
        All of Incoming requests and status. 
      </span> 
    </h5> 
    <div class="flex md:block items-center justify-center" id="chart">
      <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
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
