<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200">
    <TabGroup>
      <TabList class="tabs tab-bordered">
        <Tab v-slot="{ selected }" as="template" class="px-8 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Case Info</button>
        </Tab>
        <Tab v-slot="{ selected }" as="template" class="px-10 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Scheduler Settings</button>
        </Tab>
        <Tab v-slot="{ selected }" as="template" class="px-10 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Crawling Sources</button>
        </Tab>
      </TabList>
      <TabPanels class="mt-5">
        <TabPanel>
          <div class="grid grid-cols-2 gap-2 mt-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Title</span>
              </label>
              <input type="text" class="input bg-base-300" value="this is my case title">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Documents Published Date Range</span>
              </label>
              <select name="daterage" class="select bg-base-300">
                <option value="">- Select date range -</option>
              </select>
            </div>
            <div class="col-span-2 form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <textarea name="description" class="w-full textarea bg-base-300" rows="3">Midst Fourth Whose Greater Appear Female Dominion You'll Were Is Fourth. Sea For God Had His Multiply Moved Waters You Beast Subdue. </textarea>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid grid-cols-2 gap-2 mt-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Frequency</span>
              </label>
              <select name="daterage" class="select bg-base-300">
                <option value="">Daily</option>
                <option value="">Weekly</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Time</span>
              </label>
              <input type="text" value="00.00" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input bg-base-300" placeholder="- Select date range -">
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="w-40 p-2 border card border-base-300">
            <div class="form-control">
              <label class="cursor-pointer label">
                <input type="checkbox" checked="checked" class="toggle toggle-primary">
                <span class="label-text">Select All</span>
              </label>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-3 mt-5">
            <div v-for="source in sources" :key="source" class="flex items-center p-3 rounded-lg cursor-pointer bg-base-300">
              <div class="mr-3 avatar">
                <div class="w-6 h-6 rounded-full">
                  <img :src="source.icons">
                </div>
              </div>
              {{ source.name }}
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      sources: [
        {
          icons: '/social-media/facebook.svg',
          name: 'Facebook',
        },
        {
          icons: '/social-media/twitter.svg',
          name: 'Twitter',
        },
        {
          icons: '/social-media/telegram.svg',
          name: 'Telegram',
        },
        {
          icons: '/social-media/path.svg',
          name: 'Pinterest',
        },
        {
          icons: '/social-media/whatsapp.svg',
          name: 'whatsapp',
        },
        {
          icons: '/social-media/youtube.svg',
          name: 'Youtube',
        },
        {
          icons: '/social-media/apple.svg',
          name: 'Apple',
        },
        {
          icons: '/social-media/google.svg',
          name: 'Google',
        },
        {
          icons: '/social-media/linkedin.svg',
          name: 'Linkedin',
        },
        {
          icons: '/social-media/microsoft.svg',
          name: 'Microsoft',
        },
        {
          icons: '/social-media/yahoo.svg',
          name: 'Yahooo',
        },
      ],
    }
  },
}
</script>
