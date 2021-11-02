<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 px-8 py-6 space-y-5 overflow-y-scroll rounded shadow-lg md:w-7/12 bg-base-200" style="height: 600px">
      <DialogTitle class="flex flex-col items-center justify-center">
        <h1 class="text-xl">Upload Media</h1>
        <h3 class="text-agatha-100">Upload supported media files</h3>
        <hr class="w-8/12 my-2 border-1 border-agatha-100" />
      </DialogTitle>
      <DialogDescription class="space-y-3 ">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" class="input bg-base-300">
        </div>
        <div class="w-full space-y-2">
          <div class="flex items-center justify-between p-4 rounded-lg bg-base-100">
            <div class="flex space-x-4">
              <img src="/icons/file-png.svg" alt="">
              <div>
                <h5>Image01.png</h5>
                <span class="text-xs text-agatha-200">2.1mb</span>
              </div>
            </div>
            <button>
              <img src="/icons/delete.svg" alt="">
            </button>
          </div>
          <div class="flex items-center justify-between p-4 rounded-lg bg-base-100">
            <div class="flex space-x-4">
              <img src="/icons/file-png.svg" alt="">
              <div>
                <h5>Image01.png</h5>
                <span class="text-xs text-agatha-200">2.1mb</span>
              </div>
            </div>
            <button>
              <img src="/icons/delete.svg" alt="">
            </button>
          </div>
        </div>
        <div class="grid w-full h-40 border border-dashed border-base-300 place-items-center">
          <div class="text-center">
            <h3 class="text-2xl">Drag & Drop</h3>
            <h3 class="text-agatha-200">your files here or <span class="text-info">browse</span></h3>
          </div>
        </div>
        <button class="w-full btn btn-primary">
          <img class="mr-3" src="/icons/uploading.svg" alt="">
          Uploading...
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
