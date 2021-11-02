<template>
  <TabGroup>
    <div class="w-full px-32 pt-5 text-sm border-t border-base-300 bg-base-200">
      <TabList class="tabs">
        <Tab v-slot="{selected}" as="template" v-for="tab in tabs" :key="tab.id" class="pb-10 tab">
          <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
            {{ tab.name }}
          </button>
        </Tab>
      </TabList>
    </div>
    <TabPanels>
      <TabPanel>
        <CaseInfo />
      </TabPanel>
      <TabPanel>
        <Summary />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import CaseInfo from '@/components/case-dashboard/info/Index.vue'
import Summary from '@/components/case-dashboard/summary/Index.vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CaseInfo,
    Summary,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: 'Case Info' },
        { id: 2, name: 'Summary' },
        { id: 3, name: 'Top Influencers' },
        { id: 4, name: 'Top Posts' },
        { id: 5, name: 'Recent Post' },
        { id: 6, name: 'Popular Words' },
        { id: 7, name: 'Charts' },
      ],
    }
  },
}
</script>
