<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <div class="w-full form-control">
      <div class="relative flex items-center space-x-2 rounded-lg bg-base-300">
        <select ref="searchType" @change="typeChanged()" class="rounded-r-none bg-base-300 select focus:ring-0">
          <option value="global" selected>Global Search</option>
          <option value="profiler">Profiler Search</option>
        </select>
        <div v-show="isProfilerSearch" class="hidden px-2 py-1 text-sm font-bold rounded md:block bg-secondary font-filter">PERSON</div>
        <img class="hidden md:block" src="/icons/search.svg" alt="">
        <input type="text" placeholder="Search" class="w-full p-0 rounded-l-none input focus:ring-0 bg-base-300">
        <div class="absolute top-0 right-0 rounded-l-none btn-group">
          <div v-show="filter">
            <ButtonFilter />
          </div>
          <button class="px-8 btn btn-primary">
            <img class="block md:hidden" src="/icons/search.svg" alt="">
            <span class="hidden capitalize md:block">Search</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="hidden min-h-screen rounded-t-lg w-286 md:block bg-base-200">
      <div class="px-8 py-4 border-b-2 border-base-300">
        <h3 class="text-sm font-bold">Filters</h3>
      </div>
      <div class="flex-row divide-y divide-base-300">
        <div class="collapse collapse-arrow">
          <input type="checkbox">
          <div class="collapse-title">
            Profiler Group
          </div>
          <div class="collapse-content">
            <a class="w-full">Child</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="flex items-center justify-between">
        <select class="select bg-base-200">
          <option disabled="disabled" selected="selected">Sort By</option>
          <option>Time</option>
        </select>
        <small class="text-sm">Records: 141</small>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/views/search-results/history/Card.vue'
export default {
  components: {
    Card,
  },
  data() {
    return {
      isProfilerSearch: false,
    }
  },
  methods: {
    typeChanged() {
      const currentValue = this.$refs.searchType.value
      if (currentValue === 'profiler') this.isProfilerSearch = true
      else this.isProfilerSearch = false
    },
  },
}
</script>
