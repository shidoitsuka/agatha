<template>
  <div class="flex-grow px-8 mb-5 space-y-5">
    <div class="flex items-center justify-between">
      <select class="select bg-base-200">
        <option disabled="disabled" selected="selected">Sort By</option>
        <option>Time</option>
      </select>
      <div class="flex items-center space-x-2">
        <small class="text-sm">Records: 141</small>
        <div class="btn-group">
          <button class="btn btn-sm btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button class="btn btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
      <ItemEntityCard />
      <ItemEntityCard />
      <ItemEntityCard />
      <ItemEntityCard />
    </div>
  </div>
</template>

<script>
import ItemEntityCard from '@/components/profiler/search-result/entity-card/Item.vue'
export default {
  components: {
    ItemEntityCard,
  },
}
</script>
