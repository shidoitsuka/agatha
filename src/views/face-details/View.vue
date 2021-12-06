<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex mt-8">
    <SidebarLeft />
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <Table1 />
        <Table2 />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLeft from '@/components/face-details/SidebarLeft.vue'
import Table1 from '@/components/face-details/Table1.vue'
import Table2 from '@/components/face-details/Table2.vue'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'

export default {
  components: {
    SidebarLeft,
    Table1,
    Table2,
    GlobalSearchInput,
  },
  data() {
    return {}
  },
}
</script>
