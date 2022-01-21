<template>
  <button
    class="px-3 py-2 text-sm bg-base-300 rounded-btn"
    @click="setIsOpen(true)"
  >
    Save as entity
  </button>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed z-20 inset-0 flex items-center justify-center px-8"
  >
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div
      class="dialog-wraper-saveentity rounded-dialog z-10 w-11/12 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200"
    >
      <div class="dialog-header-filter pt-5 pr-5" @click="setIsOpen(false)">
        <button tabindex="0">
          <img src="/icons/close-white.svg" alt="" />
        </button>
      </div>
      <DialogTitle>
        <h1 class="saveentity-dialog--title px-8">
          Are you sure you want to save profiles as one entity?
        </h1>
      </DialogTitle>
      <div class="px-8 grid grid-cols-3">
        <div class="p-2 bg-base-300 saveentity-dialog--card">
          <div class="saveentity-dialog--exit-btn">
            <img src="/icons/close-red.svg" alt="" srcset="" />
          </div>
          <div class="divide-gray-600 md:grid-cols-3">
            <div class="flex items-center">
              <div class="avatar mr-2">
                <div class="rounded-full">
                  <img
                    class="saveentity-dialog--card-img"
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
              <div>
                <h3 class="saveentity-dialog--card-title">David Snowden</h3>
                <p class="saveentity-dialog--card-subtitle">United States</p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 bg-base-300 saveentity-dialog--card">
          <div class="saveentity-dialog--exit-btn">
            <img src="/icons/close-red.svg" alt="" srcset="" />
          </div>
          <div class="divide-gray-600 md:grid-cols-3">
            <div class="flex items-center">
              <div class="avatar mr-2">
                <div class="rounded-full">
                  <img
                    class="saveentity-dialog--card-img"
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
              <div>
                <h3 class="saveentity-dialog--card-title">David Snowden</h3>
                <p class="saveentity-dialog--card-subtitle">United States</p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 bg-base-300 saveentity-dialog--card">
          <div class="saveentity-dialog--exit-btn">
            <img src="/icons/close-red.svg" alt="" srcset="" />
          </div>
          <div class="divide-gray-600 md:grid-cols-3">
            <div class="flex items-center">
              <div class="avatar mr-2">
                <div class="rounded-full">
                  <img
                    class="saveentity-dialog--card-img"
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
              <div>
                <h3 class="saveentity-dialog--card-title">David Snowden</h3>
                <p class="saveentity-dialog--card-subtitle">United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="saveentity-dialog--footer flex justify-between px-10 py-3">
        <div>
          <label class="flex space-x-3 cursor-pointer mt-3">
            <input type="checkbox" class="checkbox checkbox-primary" />
            <span class="text-sm">Set as target</span>
          </label>
        </div>
        <div>
          <button class="btn btn-outline mr-5">Cancel</button>
          <button class="saveentity-dialog--btn btn btn-primary">
            Save as entity
          </button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue'

export default {
  components: { Dialog, DialogOverlay, DialogTitle },
  data() {
    return {
      isActivePerson: true,
      isActiveVIN: false,
    }
  },
  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value
      },
    }
  },
  methods: {},
}
</script>
