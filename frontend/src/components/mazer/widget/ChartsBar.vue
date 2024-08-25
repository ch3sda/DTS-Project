<!-- src/components/ChartComponent.vue -->
<template>
  <div class="p-4 bg-white rounded shadow-md dark:bg-gray-800">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Sales Overview</h2>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Series data for the chart
      series: [
        {
          name: 'Sales',  // This is the name of the data series
          data: [30, 40, 45, 50, 49, 60, 70, 91], // This is the data for the bar chart
        },
      ],
      // Options for the chart
      chartOptions: {
        chart: {
          type: 'bar', // Ensure the chart type matches the component type
          height: 350,
          toolbar: {
            show: true, // Show the toolbar with zoom and export options
          },
        },
        plotOptions: {
          bar: {
            horizontal: false, // Set the bar orientation to vertical
          },
        },
        dataLabels: {
          enabled: false, // Disable data labels inside the bars
        },
        stroke: {
          show: true, // Show the stroke around bars
          width: 2,
          colors: ['transparent'], // Make the stroke transparent
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // X-axis categories
        },
        yaxis: {
          title: {
            text: 'Sales', // Title of the Y-axis
          },
        },
        fill: {
          opacity: 1, // Set the fill opacity of the bars
        },
        tooltip: {
          y: {
            formatter: function (val) { // Format the tooltip values
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Add any custom styles for your chart here */
</style>
