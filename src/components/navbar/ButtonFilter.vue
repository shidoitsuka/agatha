<template>
  <div @click="setIsOpen(true)" class="font-filter">
    PERSON
  </div>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed inset-0 flex items-center justify-center"
  >
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="dialog-header-filter pt-5 pr-5" @click="setIsOpen(false)">
            <button tabindex="0">
              <img src="/icons/close-white.svg" alt="" />
            </button>
    </div>
    <div
      class="z-10 w-11/12 px-8 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200"
    >
      <DialogTitle class="flex flex-col items-center justify-center space-y-4">
        <h1 class="text-xl">Profiler Filter</h1>
        <div class="flex space-x-8">
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/person-active.svg" alt="" />
            <span class="font-light text-gray-400">Profile</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/organization.svg" alt="" />
            <span class="font-light text-gray-400">Organization</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/location.svg" alt="" />
            <span class="font-light text-gray-400">Location</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/media.svg" alt="" />
            <span class="font-light text-gray-400">Media</span>
          </div>
          <!-- <div class="flex flex-col items-center space-y-1">
            <img src="/icons/media.svg" alt="" />
            <span class="font-light text-gray-400">VIN</span>
          </div> -->
        </div>
      </DialogTitle>
      <div class="form-control btn-group">
        <div class="flex">
          <select class="rounded-r-none bg-base-300 select focus:ring-0">
            <option selected>Face</option>
            <option>Home</option>
          </select>
          <input
            type="text"
            placeholder="Paste URL or Upload Image"
            class="w-full border-l-0 rounded-l-none input-bordered input focus:ring-0 bg-base-200 border-base-300"
          />
          <span
            class="px-2 focus:ring-0 text-sm font-bold flex justify-center items-center rounded bg-base-300"
          >
            Upload
          </span>
        </div>
      </div>
      <div class="hidden">
        <DialogDescription class="text-center">
          Add more detail for better search accuracy
          <span class="text-secondary">(optional)</span>.
        </DialogDescription>
        <div class="grid grid-cols-2 gap-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Other Search Formats</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="input bg-base-300 focus:ring-0"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Other Search Formats</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="input bg-base-300 focus:ring-0"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Other Search Formats</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="input bg-base-300 focus:ring-0"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Other Search Formats</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="input bg-base-300 focus:ring-0"
            />
          </div>
        </div>
      </div>
      <div class="flex space-x-4 justify-end">
        <div class="">
          <button class="w-full btn btn-outline">Cancel</button>
        </div>
        <div class="flex-none w-2/12 ">
          <button class="w-full btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

export default {
  components: { Dialog, DialogOverlay, DialogTitle, DialogDescription },
  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value
      },
    }
  },
}
</script>
