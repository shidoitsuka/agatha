<template>
  <TabGroup>
    <div class="w-full px-3 mb-4 border-t md:px-8 border-base-300 bg-base-200">
      <GlobalSearchInput class="mt-3" />
      <div>
        <TabList class="tabs">
          <!-- <Tab v-slot="{selected}" as="template" class="tab pb-10">
            <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
              <img class="mr-3" src="/icons/documents-alt.svg" alt="">
              Documents
          </Tab>
          <Tab v-slot="{selected}" as="template" class="tab pb-10">
            <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
              <img class="mr-3" src="/icons/entity-alt.svg" alt="">
              Entity Cards
            </button>
          </Tab>
          <Tab v-slot="{selected}" as="template" class="tab pb-10">
            <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
              <img class="mr-3" src="/icons/entity-alt.svg" alt="">
              Entity Cards
            </button>
          </Tab> -->
          <Tab v-slot="{selected}" as="template" class="pb-10 tab" v-for="tab in tabs" :key="tab.id">
            <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
              <img class="mr-3" :src="tab.icons" alt="">
              {{ tab.name }}
            </button>
          </Tab>
        </TabList>
      </div>
    </div>
    <TabPanels>
      <TabPanel>
        <div class="flex">
          <ResultDocument :results="results" />
        </div>
      </TabPanel>
      <TabPanel>
        <div class="flex">
          <ResultEntityCard :results="resultEnities" />
        </div>
      </TabPanel>
      <TabPanel>
        <div class="flex">
          <ResultAvatar :results="resultAvatars" />
        </div>
      </TabPanel>
      <TabPanel>
        <div class="flex">
          <ResultMedia :results="resultMedia" />
        </div>
      </TabPanel>
      <TabPanel>
        <div class="flex">
          <ResultGroup :results="resultGroups" />
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'
import ResultDocument from '@/components/search-result/result/documents/Index.vue'
import ResultEntityCard from '@/components/search-result/result/entity/Index.vue'
import ResultAvatar from '@/components/search-result/result/avatars/Index.vue'
import ResultMedia from '@/components/search-result/result/media/Index.vue'
import ResultGroup from '@/components/search-result/result/groups/Index.vue'

import resultsData from '@/data/profiler/result-documents.json'
import resultEnitityData from '@/data/profiler/result-entity.json'
import resultAvatarData from '@/data/profiler/result-avatar.json'
import resultMediaData from '@/data/profiler/result-media.json'
import resultGroupData from '@/data/profiler/result-groups.json'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ResultDocument,
    ResultEntityCard,
    ResultAvatar,
    ResultMedia,
    ResultGroup,
    GlobalSearchInput,
  },
  data() {
    return {
      isProfilerSearch: false,
      results: resultsData,
      resultEnities: resultEnitityData,
      resultAvatars: resultAvatarData,
      resultMedia: resultMediaData,
      resultGroups: resultGroupData,
      isOpenFilter: false,

      tabs: [
        { id: 1, name: 'Documents', icons: '/icons/documents-alt.svg' },
        { id: 2, name: 'Entity Cards', icons: '/icons/entity-alt.svg' },
        { id: 3, name: 'Avatars', icons: '/icons/avatar-alt.svg' },
        { id: 4, name: 'Media', icons: '/icons/media-alt.svg' },
        { id: 5, name: 'Groups', icons: '/icons/groups-alt.svg' },
      ],
    }
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
