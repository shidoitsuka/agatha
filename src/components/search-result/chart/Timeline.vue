<template>
  <div v-show="isShow">
    <apexchart width="100%" type="area" height="200px" :options="chartOptions" :series="series"></apexchart>
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
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
          colors: ['#7735d5'],
        },
        stroke: {
          width: 4,
          lineCap: 'round',
          curve: 'smooth',
          colors: ['#7735d5'],
        },
        xaxis: {
          categories: [
            2007, 2008, 2009, 2010, 2011, 2012, 2013, 1014, 2015, 2016, 2017,
            2018, 2019, 2020, 2021,
          ],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [
            100, 130, 150, 120, 160, 150, 110, 120, 100, 150, 150, 140, 130,
            110, 100,
          ],
        },
      ],
    }
  },
}
</script>
