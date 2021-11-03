<template>
  <div class="flex flex-col w-4/5 mx-auto mt-5 space-y-5">
    <h1 class='text-2xl text-center'>Agatha <span class="text-xl text-gray-400">Search</span></h1>
    <ProfilerSearchInput />
    <p class="text-sm text-center text-gray-400">Profile a target with just a small lead such as a Name, Phone Number or Email using various open source data.</p>
  </div>
</template>

<script>
import ProfilerSearchInput from './ProfilerSearchInput.vue'
export default {
  components: {
    ProfilerSearchInput,
  },
}
</script>
