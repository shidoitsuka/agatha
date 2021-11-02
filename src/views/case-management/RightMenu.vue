<template>
  <div v-show="isShow" class="flex-none hidden space-y-4 rounded-t-lg w-72 md:block bg-base-200">
    <div class="px-4 py-4 border-b-2 border-base-300">
      <h3 class="font-bold">Visualization</h3>
    </div>
    <VisualizationChart />
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
