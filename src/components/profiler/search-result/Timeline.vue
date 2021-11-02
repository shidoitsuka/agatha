<template>
  <div v-show="isShow">
    <apexchart width="100%" type="line" height="200px" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
  props: ['isShow'],
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
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
}
</script>
