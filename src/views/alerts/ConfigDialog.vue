<template>
  <Dialog
    :open="isOpen"
    @close="setIsOpen"
    class="fixed inset-0 z-20 flex items-center justify-center"
  >
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div
      class="dialog-wraper-alert z-10 w-11/12 px-8 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200 rounded-dialog"
    >
      <div class="dialog-header pt-5 pr-5" @click="$parent.closeDialog()">
        <button tabindex="0">
          <img src="/icons/close-white.svg" alt="" />
        </button>
      </div>
      <DialogTitle class="flex flex-col items-center justify-center">
        <h1 class="alert-dialog--text">Configure an Alert</h1>
        <h3 class="alert-dialog--subtext mt-2">
          Make certain documents flag as notifaction whe we log into the system.
        </h3>
        <hr class="w-8/12 my-5 border-1 border-agatha-100" />
      </DialogTitle>
      <DialogDescription class="space-y-2">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-agatha-400">Name</span>
          </label>
          <input type="text" class="input bg-base-300" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-agatha-400">Alert Type</span>
          </label>
          <select class="w-full select bg-base-300 select-bordered">
            <option selected="selected">Keyword</option>
            <option>invisibility</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-agatha-400">Description</span>
          </label>
          <textarea class="h-24 textarea bg-base-300 textarea-bordered">Midst Fourth Whose Greater Appear Female Dominion You'll Were Is Fourth. Sea For God Had His Multiply Moved Waters You Beast Subdue. </textarea>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-agatha-400">Date Range</span>
          </label>
          <input type="text" class="input bg-base-300" />
        </div>
        <div class="py-5">
          <button class="w-full capitalize btn btn-primary">
            Submit
          </button>
        </div>
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
