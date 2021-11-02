<template>
  <div class="px-10 py-4 overflow-y-scroll pt-10 bg-base-200">
    <TabGroup>
      <TabList class="tabs tab-bordered">
        <Tab v-slot="{ selected }" as="template" class="px-8 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Social media</button>
        </Tab>
        <Tab v-slot="{ selected }" as="template" class="px-10 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Target</button>
        </Tab>
      </TabList>
      <TabPanels class="mt-5">
        <TabPanel>
          <div class="grid grid-cols-2 gap-5 mt-3 mb-5">
            <div class="space-y-3">
              <h1>Social Media Pages</h1>
              <div class="relative grid p-4 border rounded-lg border-primary place-items-center">
                <div class="absolute inset-0 z-0 bg-primary opacity-10"></div>
                <button>
                  <img src="/icons/plus.svg" alt="">
                </button>
              </div>
              <div class="grid w-full px-3 py-5 space-y-3 border border-dashed border-base-300 indicator">
                <div class="form-control">
                  <select name="social" class="select bg-base-300">
                    <option value="fb">Facebook</option>
                  </select>
                </div>
                <div class="form-control">
                  <input type="text" class="input bg-base-300" value="www.facebook.com/">
                </div>
                <div class="indicator-item indicator-bottom indicator-center badge">
                  <img src="/icons/delete.svg" alt="">
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <h1>Social Media Feedback</h1>
              <div class="relative grid p-4 border rounded-lg border-primary place-items-center">
                <div class="absolute inset-0 z-0 bg-primary opacity-10"></div>
                <button>
                  <img src="/icons/plus.svg" alt="">
                </button>
              </div>
              <div class="grid w-full px-3 py-5 space-y-3 border border-dashed border-base-300 indicator">
                <div class="form-control">
                  <select name="social" class="select bg-base-300">
                    <option value="fb">Pharse</option>
                  </select>
                </div>
                <div class="form-control">
                  <input type="text" class="input bg-base-300" value="type">
                </div>
                <div class="indicator-item indicator-bottom indicator-center badge">
                  <img src="/icons/delete.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid grid-cols-2 gap-5 mt-3 mb-5">
            <div class="space-y-3">
              <h1>Targets</h1>
              <div class="relative grid p-4 border rounded-lg border-primary place-items-center">
                <div class="absolute inset-0 z-0 bg-primary opacity-10"></div>
                <button>
                  <img src="/icons/plus.svg" alt="">
                </button>
              </div>
            </div>
            <div class="space-y-3">
              <h1>Targets / Entity Groups</h1>
              <div class="relative grid p-4 border rounded-lg border-primary place-items-center">
                <div class="absolute inset-0 z-0 bg-primary opacity-10"></div>
                <button>
                  <img src="/icons/plus.svg" alt="">
                </button>
              </div>
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
