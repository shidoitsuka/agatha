<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg bg-base-200">
      <div class="mb-4">
        <div class="flex justify-between w-full p-3">
          <div>
            <img v-show="result.isPrivate" src="/icons/private.svg" alt="">
          </div>
          <Action />
        </div>
        <div class="flex-row space-y-2 text-center">
          <div class="avatar indicator">
            <span class="bg-transparent border-none rounded-sm indicator-bottom indicator-center indicator-item badge">
              <img :src="result.social.icons" alt="">
            </span>
            <div class="w-24 h-24 rounded-full">
              <img :src="result.avatar">
            </div>
          </div>
          <div class="flex items-center justify-center text-base cursor-pointer" @click="$emit('toggleVisualization')">{{ result.name }}
            <img v-show="result.isVerif" src="/icons/verif.svg" alt="">
          </div>
          <span class="text-xs text-agatha-100">{{ result.address }}</span>
          <h5 class="text-xs">Crawled Documents <span class="badge bg-success">{{ result.crawled }}</span> </h5>
          <div class="flex justify-center space-x-2">
            <img v-for="icon in result.socials" :key="icon" :src="icon" />
          </div>
        </div>
      </div>
      <Chartitem />
    </div>
  </div>
</template>

<script>
import Chartitem from '@/components/search-result/result/avatars/Chartitem.vue'
import Action from '@/components/search-result/result/avatars/Action.vue'
export default {
  props: ['results'],
  emits: ['toggleVisualization'],
  components: {
    Chartitem,
    Action,
  },
}
</script>
