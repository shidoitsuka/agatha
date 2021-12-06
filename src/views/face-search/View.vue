<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex mt-8">
    <SidebarLeft />
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <Table1 />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarLeft from '@/components/face-search/SidebarLeft.vue'
import Table1 from '@/components/face-search/Table1.vue'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'

export default {
  components: {
    SidebarLeft,
    Table1,
    GlobalSearchInput,
  },
  data() {
    return {}
  },
}
</script>
