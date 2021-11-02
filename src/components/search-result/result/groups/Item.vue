<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg cursor-pointer bg-base-200" @click="$emit('toggleTarget')">
      <div class="mb-10">
        <div class="flex justify-between w-full p-3">
          <span class="badge bg-success">{{ result.type }}</span>
          <Action />
        </div>
        <div class="flex-row space-y-4 text-center">
          <div class="avatar">
            <div class="w-24 h-24 rounded-full">
              <img src="/icons/groups-alt1.svg" alt="">
            </div>
          </div>
          <h1 class="text-lg">{{ result.name }}</h1>
          <div class="flex items-center justify-center space-x-2">
            <h5 class="capitalize text-agatha-200">{{ result.type.toLowerCase() }}</h5>
            <span class="badge badge-primary">{{ result.count }}</span>
          </div>
          <div class="inline-block px-3 py-1 rounded-lg bg-base-300 text-agatha-400">
            {{ result.created }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/result/groups/Action.vue'
export default {
  props: ['results'],
  emits: ['toggleTarget'],
  components: {
    Action,
  },
}
</script>
