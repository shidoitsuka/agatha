<template>
  <div class="w-full shadow-lg form-control">
    <div class="relative flex items-center bg-base-300 space-x-2 rounded-lg bg-base-200">
      <select ref="searchType" @change="typeChanged()" class="rounded-r-none bg-base-300 select focus:ring-0">
        <option value="global" selected>Global</option>
        <option value="profiler">Profiler</option>
      </select>
      <div
        v-show="isProfilerSearch"
        class="px-2 py-1 text-sm font-bold rounded md:block bg-secondary"
        @click="filter = true"
      >
        <ButtonFilter />
      </div>
      <input
        type="text"
        :placeholder="isProfilerSearch ? 'Phone' : 'Search...'"
        class="w-full rounded-l-none input focus:ring-0 bg-base-300 nav-search"
      />
    </div>
  </div>
</template>

<script>
import ButtonFilter from './ButtonFilter.vue'
export default {
  components: {
    ButtonFilter,
  },
  data() {
    return {
      filter: false,
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
