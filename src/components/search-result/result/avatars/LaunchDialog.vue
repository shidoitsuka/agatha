<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center overflow-y-scroll">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 rounded shadow-lg md:w-6/12 bg-base-200" style="height:600px">
      <DialogTitle class="px-10 py-5 rounded-t-lg bg-base-300">
        <h3 class="text-xl">Launch Avatar</h3>
      </DialogTitle>
      <DialogDescription class="px-10 py-5 space-y-3">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Web Accounts</span>
          </label>
          <select class="w-full select bg-base-300">
            <option selected>Facebook</option>
            <option>Twitter</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Filed</span>
          </label>
          <input type="text" class="input bg-base-300" value="gs-singapore-6">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">User Agent</span>
          </label>
          <input type="text" class="input bg-base-300" value="chrome on windows">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Launch With</span>
          </label>
          <input type="text" class="input bg-base-300" value="proxy">
        </div>
        <div class="form-control">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" checked="checked" class="mr-3 checkbox checkbox-primary">
            <span class="label-text">Use Mobile User Agent</span>
          </label>
        </div>
        <div class="form-control">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="mr-3 checkbox checkbox-primary">
            <span class="label-text">Open in avatar browser</span>
          </label>
        </div>
        <button class="w-full mt-5 btn btn-primary">Launch Now</button>
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
} from '@headlessui/vue'

export default {
  props: ['isOpen', 'setIsOpen'],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  },
}
</script>
