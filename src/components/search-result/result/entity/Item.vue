<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg bg-base-200">
      <div class="mb-10">
        <div class="flex justify-between w-full p-3">
          <span class="flex badge bg-secondary">{{ result.type }}</span>
          <Action />
        </div>
        <div class="flex-row space-y-2 text-center">
          <div class="avatar indicator">
            <span class="border-none indicator-bottom indicator-center indicator-item badge bg-success badge-lg">{{ result.status }}</span>
            <div class="w-24 h-24 rounded-full">
              <img :src="result.avatar">
            </div>
          </div>
          <div class="flex items-center justify-center text-lg">
            {{ result.name }}
            <img v-show="result.isVerif" src="/icons/verif.svg" alt="">
          </div>
          <span class="text-agatha-100">{{ result.address }}</span>
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
import Chartitem from './Chartitem.vue'
import Action from './Action.vue'
export default {
  props: ['results'],
  components: {
    Chartitem,
    Action,
  },
}
</script>
