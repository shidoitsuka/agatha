<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center min-h-full overflow-y-scroll">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 rounded shadow-lg md:w-10/12 bg-base-300">
      <TabGroup>
        <div class="flex bg-base-300">
          <div class="max-w-xs p-6 space-y-4 overflow-y-scroll bg-base-300" style="height: 600px">
            <h3 class="text-3xl">Run a Cyber mission</h3>
            <p>
              Use avatars for social engineering activities to automate tweets and likes that are of interest to you.
            </p>
            <TabList class="w-full space-y-3">
              <Tab v-for="tab in tabs" :key="tab" class="w-full" as="template" v-slot="{selected}">
                <div class="flex items-center justify-between px-4 py-2 border rounded-lg" :class="[selected ? 'border-accent text-accent' : '' ]">
                  {{ tab }}
                  <img v-show="selected" src="/icons/arrow.svg" alt="">
                </div>
              </Tab>
            </TabList>
          </div>
          <div class="w-full overflow-y-scroll bg-base-200" style="height: 600px">
            <TabPanels>
              <TabPanel>
                <TweetLikes />
              </TabPanel>
              <TabPanel>
                <BulkInfluence />
              </TabPanel>
              <TabPanel>
                <BulkText />
              </TabPanel>
            </TabPanels>
            <footer class="flex justify-between p-3 border-t border-base-300">
              <div></div>
              <button class="btn btn-primary">
                Run
              </button>
            </footer>
          </div>
        </div>
      </TabGroup>
    </div>
  </Dialog>
</template>
<script>
import {
  Dialog,
  DialogOverlay,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
import TweetLikes from '@/components/cyber-mission/stepform/TweetLikes.vue'
import BulkInfluence from '@/components/cyber-mission/stepform/BulkInfluence.vue'
import BulkText from './stepform/BulkText.vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TweetLikes,
    BulkInfluence,
    BulkText,
  },
  data() {
    return {
      currentStep: 0,
      tabs: ['Tweets & Likes', 'Bulk Influne', 'Bulk Text generator'],
    }
  },
}
</script>
