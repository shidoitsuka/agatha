<template>
  <div class="dropdown dropdown-end">
    <button tabindex="0">
      <img src="/icons/cloud.svg" alt="">
    </button>
    <ul tabindex="0" class="divide-y-2 rounded-lg shadow w-292 divide-agatha-100 menu dropdown-content bg-base-300 divide-opacity-25">
      <li>
        <a class="text-xs md:text-sm">
          <img class="w-6 h-6 mr-2 md:w-8 md:h-8" src="/icons/image.svg" alt="">
          Upload Media
        </a>
      </li>
      <li>
        <a as="button" class="text-xs md:text-sm" @click="setIsOpenRl(true)">
          <img class="w-6 h-6 mr-2 md:w-8 md:h-8" src="/icons/upload-rl.svg" alt="">
          Upload Relationships
        </a>
      </li>
      <li>
        <a class="text-xs md:text-sm">
          <img class="w-6 h-6 mr-2 md:w-8 md:h-8" src="/icons/download.svg" alt="">
          Download
        </a>
      </li>
    </ul>
  </div>
  <DialogRl :setIsOpen="setIsOpenRl" :isOpen="isOpenRl" />
</template>

<script>
import { ref } from 'vue'
import DialogRl from './upload/relationship/Dialog.vue'

export default {
  setup() {
    const isOpenRl = ref(false)

    return {
      isOpenRl,
      setIsOpenRl(value) {
        isOpenRl.value = value
      },
    }
  },
  components: {
    DialogRl,
  },
}
</script>
