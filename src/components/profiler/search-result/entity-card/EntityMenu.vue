<template>
  <div class="flex-none hidden space-y-4 rounded-t-lg w-72 md:block bg-base-200">
    <div class="px-8 py-4 border-b-2 border-base-300">
      <h3>Visualizations</h3>
    </div>
    <div class="px-8 space-y-4">
      <apexchart width="100%" type="donut" height="300" :options="chartOptions" :series="series"></apexchart>
      <div class="py-2 text-center border rounded-lg border-base-300">Social Networks</div>
      <div class="flex-row space-y-2">
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Twitter</h1>
            <div class="badge bg-base-300">63</div>
          </div>
          <progress class="progress progress-success bg-base-300" value="93" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Facebook</h1>
            <div class="badge bg-base-300">55</div>
          </div>
          <progress class="progress progress-success bg-base-300" value="55" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Instagram</h1>
            <div class="badge bg-base-300">52</div>
          </div>
          <progress class="progress progress-success bg-base-300" value="52" max="100"></progress>
        </div>
      </div>
    </div>
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
        labels: [
          'Crawling',
          'System Automation',
          'Target Crawling',
          'Cyber Attack',
        ],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: 'bottom',
        },
      },
      series: [44, 55, 41, 17],
    }
  },
}
</script>
