<template>
  <div class="w-full shadow-lg form-control">
    <div class="mb-4">
        <div class="w-full border rounded-lg border-agatha-100 form-control">
          <div class="relative flex items-center space-x-2 rounded-lg bg-base-200">
            <select ref="searchType" @change="typeChanged()" class="rounded-r-none bg-base-300 select focus:ring-0">
              <option value="global" selected>Global Search</option>
              <option value="profiler">Profiler Search</option>
            </select>
            <div v-show="isProfilerSearch" @click="showFilter()" class="hidden px-2 py-1 text-sm font-bold rounded md:block bg-secondary font-filter"><ButtonFilter /></div>
            <img class="hidden md:block" src="/icons/search.svg" alt="">
            <input type="text" placeholder="Search" class="w-full p-0 rounded-l-none input focus:ring-0 bg-base-200">
            <div class="absolute top-0 right-0 rounded-l-none btn-group">
              <img class="hidden md:block mr-3" src="/icons/bookmark-search.svg" alt="">
              <button class="px-8 rounded-l-none btn btn-primary">
                <img class="block md:hidden" src="/icons/search.svg" alt="">
                <span class="hidden capitalize md:block">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import ButtonFilter from './ButtonFilter.vue'
export default {
  props: ['filter', 'type'],
  data() {
    return {
      isProfilerSearch: false,
      isOpenFilter: false,
    }
  },
  components: {
    ButtonFilter,
  },
  methods: {
    typeChanged() {
      const currentValue = this.$refs.searchType.value
      if (currentValue === 'profiler') this.isProfilerSearch = true
      else this.isProfilerSearch = false
    },
    showFilter() {
      this.isOpenFilter = !this.isOpenFilter
    },
  },
}
</script>
