<template>
  <TabGroup>
    <div class="w-full px-3 mb-4 border-t md:px-8 border-base-300 bg-base-200">
      <div class="py-4 mb-4">
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
              <button class="px-8 rounded-l-none btn btn-primary">
                <img class="block md:hidden" src="/icons/search.svg" alt="">
                <span class="hidden capitalize md:block">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabList class="tabs">
          <!-- <Tab v-slot="{selected}" as="template" class="tab pb-10">
            <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
              <img class="mr-3" src="/icons/documents-alt.svg" alt="">
              Documents
            </button>
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

import ButtonFilter from '@/components/search-result/result/ButtonFilter.vue'
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
    ButtonFilter,
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
