<template>
  <div class="rounded-b-lg bg-agatha-100">
    <apexchart width="100%" type="line" height="100px" :options="chartOptions" :series="series"></apexchart>
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
        tooltip: {
          enabled: false,
        },
        fill: {
          type: 'solid',
        },
        stroke: {
          width: 4,
          lineCap: 'round',
          curve: 'smooth',
          colors: ['#7735d5'],
        },
        yaxis: {
          show: true,
          tickAmount: 1,
          min: 0,
          max: 200,
          labels: {
            show: true,
            style: {
              colors: '#D5D5DC',
            },
          },
        },
        xaxis: {
          type: 'category',
          categories: [2018, 2019, 2020, 2021],
          position: 'bottom',
          labels: {
            show: true,
            style: {
              colors: '#D5D5DC',
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        grid: {
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          strokeDashArray: 0,
          yaxis: {
            lines: {
              show: true,
            },
          },
          borderColor: '#292932',
        },
      },
      series: [
        {
          name: 'series-1',
          data: [150, 200, 90, 100],
        },
      ],
    }
  },
}
</script>
