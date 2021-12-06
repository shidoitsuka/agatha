<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex">
    <SidebarLeft />
    <div
      class="profiler-profile--container bg-base-200 rounded-dialog mx-auto p-5"
    >
      <Table1 />
      <Table2 />
    </div>
  </div>
</template>

<script>
import confirmedMatchData from '@/data/profiler/confirmed-matches.json'
import possibleMatchesData from '@/data/profiler/possible-matches.json'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'
import SidebarLeft from '@/components/profiler-profile/SidebarLeft.vue'
import Table1 from '@/components/profiler-profile/Table1.vue'
import Table2 from '@/components/profiler-profile/Table2.vue'

export default {
  components: {
    GlobalSearchInput,
    SidebarLeft,
    Table1,
    Table2,
  },
  data() {
    return {
      confirmed_matches: confirmedMatchData,
      possible_matches: possibleMatchesData,
    }
  },
}
</script>
