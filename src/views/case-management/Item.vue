<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg cursor-pointer bg-base-200">
      <div>
        <div class="flex justify-between w-full p-3">
          <div>
            <img v-show="result.isVerif" src="/icons/verif-case.svg" alt="">
          </div>
          <Action />
        </div>
        <div class="flex-row mb-5 space-y-2 text-center">
          <div class="avatar indicator">
            <div class="w-24 h-24 rounded-full" @click="$emit('toggleVisualization')">
              <img :src="result.avatar">
            </div>
          </div>
          <h3 class="text-base">{{ result.title }}</h3>
          <span class="text-xs text-agatha-400">{{ result.created }}</span>
          <div class="grid px-3 sm:grid-cols-1 md:grid-cols-3">
            <div class="flex-row items-center space-y-1">
              <div class="text-agatha-200">Negative</div>
              <div class="badge bg-error">{{ result.negative }}</div>
            </div>
            <div class="flex-row items-center space-y-1">
              <div class="text-agatha-200">Neutral</div>
              <div class="badge bg-success">{{ result.neutral }}</div>
            </div>
            <div class="flex-row items-center space-y-1">
              <div class="text-agatha-200">Positive</div>
              <div class="badge bg-info">{{ result.positive }}</div>
            </div>
          </div>
        </div>
        <Chartitem />
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/result/avatars/Action.vue'
import Chartitem from './Chartitem.vue'
export default {
  props: ['results'],
  emits: ['toggleVisualization'],
  components: {
    Action,
    Chartitem,
  },
}
</script>
