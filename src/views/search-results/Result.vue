<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex">
    <SidebarLeft />
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="flex items-center justify-between">
        <select class="select bg-base-200">
          <option disabled="disabled" selected="selected">Sort By</option>
          <option>Time</option>
        </select>
        <small class="text-sm">Records: 141</small>
      </div>
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <div class="flex items-center justify-between">
          <div class="flex space-x-3">
            <h3>Confirmed Selected</h3>
            <div class="px-2 bg-info rounded-box">3</div>
          </div>
          <button class="flex items-center px-3 py-2 text-sm capitalize border border-base-300 rounded-btn">
            <img class="mr-2" src="/icons/groups.svg" alt=""> Merge entites
          </button>
        </div>
        <div v-for="item in confirmed_matches" :key="item.id">
          <SearchItem :item="item" />
        </div>
      </div>
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <div class="flex items-center justify-between">
          <div class="flex space-x-3">
            <h3>Possible Matches</h3>
            <div class="px-2 bg-info rounded-box">3</div>
          </div>
        </div>
        <div v-for="item in possible_matches" :key="item.id">
          <SearchItem :item="item" :isPossible="true" />
        </div>
      </div>
    </div>
    <SidebarRight />
  </div>
</template>

<script>
import confirmedMatchData from '@/data/profiler/confirmed-matches.json'
import possibleMatchesData from '@/data/profiler/possible-matches.json'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'
import SidebarLeft from '@/components/profiler/search-result/SidebarLeft.vue'
import SearchItem from '@/components/profiler/search-result/SearchItem.vue'
import SidebarRight from '@/components/profiler/search-result/SidebarRight.vue'
export default {
  components: {
    GlobalSearchInput,
    SidebarLeft,
    SidebarRight,
    SearchItem,
  },
  data() {
    return {
      confirmed_matches: confirmedMatchData,
      possible_matches: possibleMatchesData,
    }
  },
}
</script>
