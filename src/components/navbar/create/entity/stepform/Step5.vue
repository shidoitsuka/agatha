<template>
  <div class="px-10 py-4 overflow-y-scroll pt-10 bg-base-200" style="height: 560px;">
    <TabGroup>
      <TabList class="tabs tab-bordered">
        <Tab v-slot="{ selected }" as="template" class="px-8 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">General Information</button>
        </Tab>
        <Tab v-slot="{ selected }" as="template" class="px-10 py-2">
          <button :class="[selected ? 'bg-secondary text-white rounded-t-lg' : 'grey-text']">Target</button>
        </Tab>
      </TabList>
      <TabPanels class="mt-5">
        <TabPanel>
          <div class="grid grid-cols-2 gap-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Full Name</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Gender</span>
              </label>
              <select class="w-full bg-base-300 select">
                <option selected="selected">Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email Address</span>
              </label>
              <input type="email" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">City</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">State Province</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Zip Code</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Country</span>
              </label>
              <select name="country" class="select bg-base-300">
                <option value="">-- Select --</option>
                <option value="jpn">Jepang</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Fax</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div class="grid grid-cols-2 gap-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Frequency</span>
              </label>
              <input type="text" class="input bg-base-300">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Time</span>
              </label>
              <input type="text" class="input bg-base-300" value="00:00">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input type="text" class="input bg-base-300" placeholder="- Select date range -">
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
