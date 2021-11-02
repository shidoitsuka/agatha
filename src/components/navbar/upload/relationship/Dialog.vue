<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0 z-20 flex items-center justify-center">
    <DialogOverlay class="fixed inset-0 opacity-90 bg-base-100" />
    <div class="z-10 w-11/12 px-8 py-6 space-y-5 rounded shadow-lg md:w-6/12 bg-base-200">
      <DialogTitle class="flex flex-col items-center justify-center">
        <h1 class="text-xl">Upload Relationships</h1>
        <hr class="w-8/12 my-2 border-1 border-agatha-100" />
      </DialogTitle>
      <DialogDescription class="space-y-3">
        <div class="overflow-y-scroll h-96">
          <div class="w-full space-y-2">
            <div class="flex items-center justify-between p-4 rounded-lg bg-base-100">
              <div class="flex space-x-4">
                <img src="/icons/rl.svg" alt="">
                <div>
                  <h5>Relationship.csv</h5>
                  <span class="text-xs text-agatha-200">5.1mb</span>
                </div>
              </div>
              <button>
                <img src="/icons/delete.svg" alt="">
              </button>
            </div>
          </div>
          <div class="grid w-full h-40 mt-5 border border-dashed border-base-300 place-items-center">
            <div class="text-center">
              <h3 class="text-2xl">Drag & Drop</h3>
              <h3 class="text-agatha-200">your files here or <span class="text-info">browse</span></h3>
            </div>
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
