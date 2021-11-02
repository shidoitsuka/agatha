<template>
  <div class="min-h-full pt-6 text-center rounded-xl bg-base-200">
    <div class="flex items-center justify-between px-3">
      <div class="text-xs badge badge-success">PERSON</div>
      <div class="dropdown">
        <button tabindex="0" class="btn btn-ghost btn-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
        <ul tabindex="0" class="rounded-lg shadow menu dropdown-content bg-base-300 w-72">
          <li class="bg-success hover:bg-success">
            <a href="#" class="flex">
              <button class="mr-4 btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
              </button>
              Access
            </a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-4 avatar indicator">
      <div class="indicator-item indicator-bottom indicator-center badge badge-secondary">N/A</div>
      <div class="w-24 h-24 rounded-full">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
      </div>
    </div>
    <div class="flex items-center justify-center">
      David Snowden
      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5 ml-2 text-info" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <h3 class="text-gray-600">UAE - SINGAPORE</h3>
    <div class="flex justify-center mt-4 space-x-1">
      <img src="/social-media/facebook.png" alt="">
      <img src="/social-media/apple.png" alt="">
      <img src="/social-media/youtube.png" alt="">
      <img src="/social-media/google.png" alt="">
    </div>
    <apexchart width="100%" type="line" height="100px" :options="chartOptions" :series="series"></apexchart>
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
          categories: [2018, 2019, 2020, 2021],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [10, 8, 5, 1],
        },
      ],
    }
  },
}
</script>
