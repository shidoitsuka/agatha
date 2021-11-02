<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-4 ">
    <div v-for="result in results" :key="result" class="rounded-lg bg-base-200">
      <div class="relative rounded-lg">
        <span class="absolute z-10 left-2 badge top-2">{{ result.type }}</span>
        <div class="relative grid w-full rounded-t-lg place-items-center">
          <img v-show="result.type == 'VIDEO'" src="/icons/video.svg" alt="" class="absolute">
          <img class="object-cover w-full h-40" :src="result.thumbnail" alt="">
        </div>
        <div class="px-2 py-4">
          <div class="flex justify-between">
            <h1>{{ result.title }}</h1>
            <Action />
          </div>
          <p class="text-xs text-agatha-100">File Size: {{ result.fileSize }}</p>
          <p class="text-xs text-agatha-100">Uploaded: {{ result.uploaded }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/result/media/Action.vue'
export default {
  props: ['results'],
  components: {
    Action,
  },
}
</script>
