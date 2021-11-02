<template>
  <TabGroup>
    <div class="w-full px-5 pt-5 border-t border-base-300 bg-base-200">
      <TabList class="tabs">
        <Tab v-slot="{selected}" as="template" v-for="tab in tabs" :key="tab.id" class="pb-10 tab">
          <button :class="[selected ? 'text-accent border-b border-accent' : 'text-white' ]">
            <img v-show='tab.icon' class="mr-2" :src="tab.icon" alt="">  {{ tab.name }}
          </button>
        </Tab>
      </TabList>
    </div>
    <TabPanels>
      <TabPanel>
        <AllTopics />
      </TabPanel>
      <TabPanel>
        <TopicOverview />
      </TabPanel>
      <TabPanel>
        <TopicProfiles />
      </TabPanel>
      <TabPanel>
        <TopicContent />
      </TabPanel>
      <TabPanel>
        <TopicLiveMonitor />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import AllTopics from '@/components/topics/all-topics/Index.vue'
import TopicOverview from '@/components/topics/overview/Index.vue'
import TopicProfiles from '@/components/topics/profiles/Index.vue'
import TopicContent from '@/components/topics/content/Index.vue'
import TopicLiveMonitor from '@/components/topics/live-monitor/Index.vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    AllTopics,
    TopicOverview,
    TopicProfiles,
    TopicContent,
    TopicLiveMonitor,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: 'All Topics' },
        { id: 2, name: 'Topic Overview' },
        { id: 3, name: 'Profiles' },
        { id: 4, name: 'Content' },
        {
          id: 5,
          name: 'Live Monitor',
          icon: '/icons/eclipse.svg',
          color: 'error',
        },
      ],
    }
  },
}
</script>
