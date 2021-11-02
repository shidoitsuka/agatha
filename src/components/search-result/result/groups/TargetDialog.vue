<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center text-sm">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 overflow-y-scroll rounded shadow-lg md:w-6/12 bg-base-200" style="height: 600px">
      <DialogTitle class="flex flex-col items-center justify-center py-5 rounded-t bg-base-300">
        <h1 class="text-xl">Target Group</h1>
        <h3 class="text-agatha-200">Select which targets to assign to the group</h3>
      </DialogTitle>
      <div class="flex items-center justify-between w-full p-6">
        <div class="w-full form-control">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" checked="checked" class="mr-3 toggle toggle-primary">
            <span class="label-text">Select All</span>
          </label>
        </div>
        <div class="w-full shadow-lg form-control">
          <div class="relative flex items-center space-x-2 rounded-lg bg-base-300">
            <img class="hidden pl-2 md:block" src="/icons/search.svg" alt="">
            <input type="text" placeholder="Search" class="w-full px-0 input focus:ring-0 bg-base-300">
            <div class="absolute top-0 right-0 btn-group">
              <button class="capitalize rounded-l-none btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 px-6 py-2 md:grid-cols-3">
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
        <div class="flex-row p-3 rounded-lg bg-base-300">
          <input type="checkbox" class="checkbox checkbox-accent">
          <div class="grid gap-3 mb-6 place-items-center">
            <img src="/profile/profile.png" alt="">
            <h3>David Snowden</h3>
            <div class="text-xs badge bg-success">PERSON</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between p-6">
        <button @click="setIsOpen(false)" class="capitalize btn btn-primary btn-outline">Cancel</button>
        <button class="capitalize btn btn-primary">Assign</button>
      </div>
    </div>
  </Dialog>
</template>
<script>
import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
}
</script>
