<template>
  <div>
    <apexchart width="100%" type="donut" height="300px" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false,
          },
        },
        labels: ['Crawling', 'System Automation', 'Target Crawling', 'Cyber Attack'],
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
              },
            },
          },
        },
        legend: {
          show: true,
          position: 'bottom',
          labels: {
            colors: '#fff',
            useSeriesColors: false,
          },
        },
      },
      series: [30, 70, 0, 0],
    }
  },
}
</script>
