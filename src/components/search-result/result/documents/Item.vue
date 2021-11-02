<template>
  <div v-for="result in results" :key="result" class="flex-row p-3 space-x-3 rounded-lg md:flex bg-base-200">
    <div class="w-100">
      <div class="avatar">
        <div class="mb-2 w-100 h-100 rounded-btn">
          <img :src="result.avatar">
        </div>
      </div>
      <div class="w-full p-1 text-sm text-center rounded-md text-agatha-400 bg-base-300">{{ result.last_activity }}</div>
    </div>
    <div class="relative w-full space-y-2">
      <button class="absolute right-1 btn btn-sm" @click="$emit('toggleRightmenu')">
        <img src="/icons/dots.svg" alt="">
      </button>
      <div class="flex items-center mb-2 space-x-2 cursor-pointer text-info" @click="$emit('previewDocument')">
        <img :src="result.icon" :alt="result.title">
        <h3 class="text-sm">{{ result.title }}</h3>
        <div class="badge" :class="result.is_save ? 'badge-warning' : 'bg-base-300' ">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Save
        </div>
      </div>
      <h3 class="text-sm">{{ result.title1 }}</h3>
      <p class="text-xs text-agatha-200">{{ result.description }}</p>
      <div class="flex justify-between">
        <div class="mt-2 w-72">
          <div v-for="tag in result.tags" :key="tag" class="inline-block px-2 m-1 text-sm rounded-box bg-base-300">{{ tag }}</div>
        </div>
        <div class="flex space-x-2">
          <div class="flex items-center space-x-1 text-sm text-agatha-100">
            <img src="/icons/love.svg" alt="">
            <span>24.k</span>
          </div>
          <div class="flex items-center space-x-1 text-sm text-agatha-100">
            <img src="/icons/comment.svg" alt="">
            <span>210</span>
          </div>
          <div class="flex items-center space-x-1 text-sm text-agatha-100">
            <img src="/icons/share.svg" alt="">
            <span>83</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['results'],
  emits: ['toggleRightmenu', 'previewDocument'],
}
</script>
