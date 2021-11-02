<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 px-8 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200">
      <DialogTitle class="flex flex-col items-center justify-center">
        <h1 class="text-xl">Create Group</h1>
        <h3 class="text-agatha-200">Select which targets to assign to the group</h3>
        <hr class="w-8/12 my-2 border-1 border-agatha-100" />
      </DialogTitle>
      <DialogDescription class="space-y-3">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" class="input bg-base-300">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Group Type</span>
          </label>
          <select class="w-full select bg-base-300">
            <option selected="selected">Select</option>
            <option>invisibility</option>
          </select>
        </div>
        <div class="py-5">
          <button class="w-full btn btn-primary">
            Create
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
