<template>
  <div class="flex w-full mt-5 text-sm px-5">
    <LeftMenu>
      <template #left-menu-item>
        <div
          class="grid gap-4 px-6 py-5 rounded-lg h-96 bg-base-200 place-items-center"
        >
          <div class="avatar indicator">
            <div class="w-32 h-32 rounded-full">
              <img src="https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
          <div class="text-center">
            <h3 class="text-lg">Dashboard Title</h3>
            <p class="text-sm text-agatha-400">
              This is the dashboard layout. the data should be changed based on
              which card was clicked.
            </p>
          </div>
          <div class="flex user-dashboard--button-container space-x-3">
            <div class="flex flex-col items-center space-y-1">
              <img src="/icons/launch-alt.svg" alt="" />
              <span class="font-light text-gray-400">Launch</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <img src="/icons/edit-alt.svg" alt="" />
              <span class="font-light text-gray-400">Edit</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <img src="/icons/report-alt.svg" alt="" />
              <span class="font-light text-gray-400">Report</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <img src="/icons/bookmark-alt2.svg" alt="" />
              <span class="font-light text-gray-400">Save</span>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <img src="/icons/delete-alt2.svg" alt="" />
              <span class="font-light text-gray-400">Delete</span>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-3 space-y-5">
      <TabGroup>
        <div class="w-full px-3 pt-3 text-sm rounded bg-base-200">
          <TabList class="tabs">
            <Tab
              v-slot="{ selected }"
              as="template"
              v-for="tab in tabs"
              :key="tab.id"
              class="pb-10 tab"
            >
              <button
                :class="[
                  selected
                    ? 'text-accent border-b border-accent'
                    : 'text-white',
                ]"
              >
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
    </div>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import CaseInfo from '@/components/user-dashboard/info/Index.vue'
import Summary from '@/components/user-dashboard/summary/Index.vue'
import LeftMenu from '@/components/user-dashboard/LeftMenu.vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CaseInfo,
    Summary,
    LeftMenu,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: 'Info' },
        { id: 2, name: 'Summary' },
      ],
    }
  },
}
</script>
