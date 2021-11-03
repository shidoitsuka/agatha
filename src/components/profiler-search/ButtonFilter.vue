<template>
  <button @click="setIsOpen(true)" class="z-40 hidden text-gray-600 border-none rounded-l-none btn bg-base-200 md:block">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  </button>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 flex items-center justify-center">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 px-8 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200">
      <DialogTitle class="flex flex-col items-center justify-center space-y-4">
        <h1 class="text-xl">Profiler Filter</h1>
        <div class="flex space-x-8">
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/person-active.svg" alt="">
            <span class="text-base">Profile</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/organization.svg" alt="">
            <span class="text-base">Organization</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/location.svg" alt="">
            <span class="text-base">Location</span>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <img src="/icons/media.svg" alt="">
            <span class="text-base">Media</span>
          </div>
        </div>
      </DialogTitle>
      <div class="form-control">
        <div class="flex">
          <select class="rounded-r-none bg-base-300 select focus:ring-0">
            <option selected>Phone</option>
            <option>Home</option>
          </select>
          <input type="text" placeholder="(555) 519-3521" class="w-full border-l-0 rounded-l-none input-bordered input focus:ring-0 bg-base-200 border-base-300">
        </div>
      </div>
      <DialogDescription class="text-center">
        Add more detail for better search accuracy <span class='text-secondary'>(optional)</span>.
      </DialogDescription>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Other Search Formats</span>
          </label>
          <input type="text" placeholder="" class="input bg-base-300 focus:ring-0">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Other Search Formats</span>
          </label>
          <input type="text" placeholder="" class="input bg-base-300 focus:ring-0">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Other Search Formats</span>
          </label>
          <input type="text" placeholder="" class="input bg-base-300 focus:ring-0">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Other Search Formats</span>
          </label>
          <input type="text" placeholder="" class="input bg-base-300 focus:ring-0">
        </div>
      </div>
      <div class="flex space-x-4">
        <div class="flex-none w-10/12 ">
          <button class="w-full btn btn-primary">Search</button>
        </div>
        <div class="flex-grow">
          <button class="w-full btn btn-outline btn-primary">Clear</button>
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
