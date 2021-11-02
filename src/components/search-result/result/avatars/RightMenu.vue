<template>
  <div v-show="isShow" class="flex-none hidden space-y-4 rounded-t-lg w-72 md:block bg-base-200">
    <div class="px-8 py-4 border-b-2 border-base-300">
      <h3 class="text-sm font-bold">Visualization</h3>
    </div>
    <VisualizationChart />
    <div class="px-8 py-2 space-y-4">
      <div class="px-4 py-2 text-center border rounded-box border-base-300">Social Networks</div>
      <div class="flex-row space-y-2">
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Twitter</h1>
            <div class="badge bg-base-300">63</div>
          </div>
          <progress class="progress progress-accent bg-base-300" value="63" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Facebook</h1>
            <div class="badge bg-base-300">55</div>
          </div>
          <progress class="progress progress-accent bg-base-300" value="55" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Instagram</h1>
            <div class="badge bg-base-300">52</div>
          </div>
          <progress class="progress progress-accent bg-base-300" value="52" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Linkedin</h1>
            <div class="badge bg-base-300">34</div>
          </div>
          <progress class="progress progress-accent bg-base-300" value="34" max="100"></progress>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h1>Pinterest</h1>
            <div class="badge bg-base-300">30</div>
          </div>
          <progress class="progress progress-accent bg-base-300" value="30" max="100"></progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisualizationChart from '@/components/search-result/chart/Visualization.vue'
export default {
  props: ['isShow'],
  components: {
    VisualizationChart,
  },
}
</script>
