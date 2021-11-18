<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg cursor-pointer bg-base-200" @click="$emit('toggleVisualization')">
      <div class="mb-10">
        <div class="flex justify-between w-full p-3">
          <span class="badge" style="background: #00b49a;">{{ result.type }}</span>
          <Action />
        </div>
        <div class="flex-row space-y-3 text-center">
          <div class="avatar indicator">
            <div class="w-24 h-24 rounded-full">
              <img src="/icons/bell.svg">
            </div>
          </div>
          <h3 class="text-lg">{{ result.title }}</h3>
          <h5 class="text-agatha-100">{{ result.description }}</h5>
          <h5 class="inline-block px-4 py-1 mt-3 text-center rounded-lg bg-base-300 text-agatha-400">{{ result.created }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/result/avatars/Action.vue'
export default {
  props: ['results'],
  emits: ['toggleVisualization'],
  components: {
    Action,
  },
}
</script>
