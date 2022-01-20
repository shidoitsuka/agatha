<template>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed inset-0 z-20 flex items-center justify-center"
  >
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div
      class="dialog-wraper-rl z-10 w-11/12 px-8 py-6 space-y-5 rounded-dialog shadow-lg md:w-6/12 bg-base-200"
    >
      <DialogTitle class="flex flex-col items-center justify-center">
        <div
          class="dialog-header pt-5 pr-5"
          @click="$parent.setIsOpenRls(false)"
        >
          <button tabindex="0">
            <img src="/icons/close-white.svg" alt="" />
          </button>
        </div>
      </DialogTitle>
      <DialogDescription class="space-y-3">
        <TabGroup>
          <div class="w-full px-3 pt-3 text-sm rounded bg-base-200">
            <TabList class="tabs">
              <Tab
                v-slot="{ selected }"
                as="template"
                v-for="tab in tabs"
                :key="tab.id"
                class="tab pb-4"
                style="border-radius: 4px 4px 0 0"
              >
                <button
                  :class="[
                    selected ? 'text-white bg-base-300 px-5' : 'text-gray-400',
                  ]"
                >
                  {{ tab.name }}
                </button>
              </Tab>
            </TabList>
          </div>
          <TabPanels>
            <TabPanel>
              <div class="overflow-y-scroll h-96">
                <div
                  class="grid w-full h-40 border border-dashed border-base-300 place-items-center rounded"
                >
                  <div class="text-center">
                    <h3 class="text-2xl">Drag & Drop</h3>
                    <h3>
                      <span class="font-light text-gray-500"
                        >your files here or </span
                      >
                      <span class="text-info">browse</span>
                    </h3>
                  </div>
                </div>
                <div class="w-full space-y-2 mt-3">
                  <div
                    class="flex items-center justify-between p-4 rounded-dialog"
                    style="background: #18181F;"
                  >
                    <div class="flex space-x-4">
                      <img src="/icons/rl.svg" alt="" />
                      <div>
                        <h5>Relationship.csv</h5>
                        <span class="text-xs text-agatha-200">5.1mb</span>
                      </div>
                    </div>
                    <button>
                      <img src="/icons/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="overflow-y-scroll h-96">
                <div
                  class="grid w-full h-40 border border-dashed border-base-300 place-items-center rounded"
                >
                  <div class="text-center">
                    <h3 class="text-2xl">Drag & Drop</h3>
                    <h3>
                      <span class="font-light text-gray-500"
                        >your files here or </span
                      >
                      <span class="text-info">browse</span>
                    </h3>
                  </div>
                </div>
                <div class="grid grid-cols-2 space-x-5 mt-3">
                  <div>
                    <div class="form-control">
                      <label for="text" style="font: normal normal 600 13px/16px Mulish; letter-spacing: 0px; color: #92929D;">Country</label>
                      <input type="text" class="input bg-base-300" value="" />
                    </div>
                  </div>
                  <div>
                    <div class="form-control">
                      <label for="text" style="font: normal normal 600 13px/16px Mulish; letter-spacing: 0px; color: #92929D;">Vehicle Identification Number</label>
                      <input type="text" class="input bg-base-300" value="" />
                    </div>
                  </div>
                </div>
                <div class="w-full space-y-2 mt-3">
                  <div
                    class="flex items-center justify-between p-4 rounded-dialog"
                    style="background: #18181F;"
                  >
                    <div class="flex space-x-4">
                      <img src="/icons/rl.svg" alt="" />
                      <div>
                        <h5>VIN.csv</h5>
                        <span class="text-xs text-agatha-200">5.1mb</span>
                      </div>
                    </div>
                    <button>
                      <img src="/icons/delete.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <button class="w-full btn bg-base-300">
          <img class="mr-3" src="/icons/uploading.svg" alt="" />
          Upload
        </button>
      </DialogDescription>
    </div>
  </Dialog>
</template>
<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: 'Relationships' },
        { id: 2, name: 'VIN' },
      ],
    }
  },
}
</script>
