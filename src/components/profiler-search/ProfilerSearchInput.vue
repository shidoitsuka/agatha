<template>
  <div class="w-full shadow-lg form-control">
    <div class="relative flex items-center space-x-2 rounded-lg bg-base-200">
      <select @change="$router.push('global-search')" class="rounded-r-none bg-base-300 select focus:ring-0">
        <option selected>Profiler Search</option>
        <option>Global Search</option>
      </select>
      <div v-show="true" class="hidden px-2 py-1 text-sm font-bold rounded md:block bg-secondary"><ButtonFilter /></div>
      <img class="hidden md:block" src="/icons/search.svg" alt="">
      <input type="text" placeholder="Search" class="w-full p-0 rounded-l-none input focus:ring-0 bg-base-200">
      <div class="absolute top-0 right-0 rounded-l-none btn-group">
        <button class="px-8 btn btn-primary">
          <img class="block md:hidden" src="/icons/search.svg" alt="">
          <span class="hidden capitalize md:block">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonFilter from './ButtonFilter.vue'
export default {
  props: ['filter', 'type'],
  components: {
    ButtonFilter,
  },
}
</script>
