<template>
  <Header />
  <div class="flex">
    <SidebarLeftDocument :menus="menus" />
    <ResultEntityCard />
  </div>
</template>

<script>
import menusData from '@/data/profiler/left-menus-documents.json'
import menusData1 from '@/data/profiler/right-menus-documents.json'
import resultsData from '@/data/profiler/result-documents.json'
import SidebarLeftDocument from '@/components/profiler/search-result/documents/LeftMenu.vue'
import Header from '@/components/profiler/search-result/documents/Header.vue'
import ResultEntityCard from '@/components/profiler/search-result/entity-card/Result.vue'
export default {
  components: {
    SidebarLeftDocument,
    Header,
    ResultEntityCard,
  },
  data() {
    return {
      menus: menusData,
      menus1: menusData1,
      results: resultsData,
    }
  },
}
</script>
