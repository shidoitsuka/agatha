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
          @click="$parent.setIsOpenMd(false)"
        >
          <button tabindex="0">
            <img src="/icons/close-white.svg" alt="" />
          </button>
        </div>
      </DialogTitle>
      <DialogDescription class="space-y-3">
        <TabGroup>
          <TabList class="tabs tab-bordered">
            <Tab v-slot="{ selected }" as="template" class="px-8 py-2">
              <button
                :class="[
                  selected
                    ? 'bg-secondary text-white rounded-t-lg tab-title'
                    : 'grey-text tab-title',
                ]"
              >
                Media
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template" class="px-10 py-2">
              <button
                :class="[
                  selected
                    ? 'bg-secondary text-white rounded-t-lg tab-title'
                    : 'grey-text tab-title',
                ]"
              >
                Face Picture
              </button>
            </Tab>
          </TabList>
          <TabPanels class="mt-5">
            <TabPanel>
              <div class="grid grid-cols-1 gap-2 mt-3">
                <div
                  class="grid w-full h-40 mt-5 border border-dashed border-base-300 place-items-center"
                >
                  <div class="text-center">
                    <h3 class="drag-and-drop--font">Drag & Drop</h3>
                    <h3 class="drag-and-drop--subfont">
                      your files here or <span class="text-info">browse</span>
                    </h3>
                  </div>
                </div>
                <div class="w-full space-y-2">
                  <div
                    class="flex items-center justify-between p-4 mt-5 bg-base-100 uploaded-media rounded-dialog"
                  >
                    <div class="flex space-x-4">
                      <img src="https://picsum.photos/40/20" alt="" />
                      <div>
                        <h5>image-01.png</h5>
                        <span class="text-xs text-agatha-200">1.3mb</span>
                      </div>
                    </div>
                    <button>
                      <img
                        src="/icons/delete.svg"
                        style="opacity: 0.2;"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div class="w-full space-y-2">
                  <div
                    class="flex items-center justify-between p-4 bg-base-100 uploaded-media rounded-dialog"
                  >
                    <div class="flex space-x-4">
                      <img src="https://picsum.photos/40/20" alt="" />
                      <div>
                        <h5>image-02.png</h5>
                        <span class="text-xs text-agatha-200">1.3mb</span>
                      </div>
                    </div>
                    <button>
                      <img
                        src="/icons/delete.svg"
                        style="opacity: 0.2;"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div class="w-full space-y-2">
                  <div
                    class="flex items-center justify-between p-4 mb-8 bg-base-100 uploaded-media rounded-dialog"
                  >
                    <div class="flex space-x-4">
                      <img src="https://picsum.photos/40/20" alt="" />
                      <div>
                        <h5>image-03.png</h5>
                        <span class="text-xs text-agatha-200">1.3mb</span>
                      </div>
                    </div>
                    <button>
                      <img
                        src="/icons/delete.svg"
                        style="opacity: 0.2;"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <button class="w-full btn btn-primary">
                  <img class="mr-3" src="/icons/uploading.svg" alt="" />
                  Uploading...
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="grid grid-cols-1 gap-2 mt-3">
                <div
                  class="grid w-full h-40 mt-5 border border-dashed border-base-300 place-items-center"
                >
                  <div class="text-center">
                    <h3 class="drag-and-drop--font">Drag & Drop</h3>
                    <h3 class="drag-and-drop--subfont">
                      your files here or <span class="text-info">browse</span>
                    </h3>
                  </div>
                </div>
                <div class="w-full space-y-2">
                  <div
                    class="flex items-center justify-between p-4 my-3 bg-base-100 uploaded-media rounded-dialog"
                  >
                    <div class="flex space-x-4">
                      <img src="https://picsum.photos/40/20" alt="" />
                      <div>
                        <h5>image-01.png</h5>
                        <span class="text-xs text-agatha-200">1.3mb</span>
                      </div>
                    </div>
                    <button>
                      <img
                        src="/icons/delete.svg"
                        style="opacity: 0.2;"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-8">
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">Full Name</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">National identity</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">Image path</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">Phone number</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">Driver license</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="media-facepicture--label-font">Email address</span>
                    </label>
                    <input type="text" class="input bg-base-300" />
                  </div>
                </div>
                <button class="w-full btn btn-primary">
                  <img class="mr-3" src="/icons/uploading.svg" alt="" />
                  Uploading...
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </DialogDescription>
    </div>
  </Dialog>
</template>
<script>
import {
  Dialog,
  DialogTitle,
  DialogOverlay,
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
    DialogTitle,
    DialogOverlay,
    DialogDescription,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
}
</script>
