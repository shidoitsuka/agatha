<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" class="m-1 ">
      <img src="/icons/dots.svg" alt="">
    </div>
    <ul tabindex="0" class="rounded-lg shadow menu dropdown-content bg-base-300 w-72">
      <li>
        <a>
          <img class="mr-3" src="/icons/access.svg" alt="">
          Access
        </a>
      </li>
      <li>
        <a as="button" @click="setIsOpen(true)">
          <img class="mr-3" src="/icons/launch.svg" alt="">
          Launch
        </a>
      </li>
      <li>
        <a>
          <img class="mr-3" src="/icons/bookmark.svg" alt="">
          Bookmark
        </a>
      </li>
      <li>
        <a>
          <img class="mr-3" src="/icons/edit.svg" alt="">
          Edit
        </a>
      </li>
      <li>
        <a>
          <img class="mr-3" src="/icons/unlock.svg" alt="">
          Unlock
        </a>
      </li>
      <li>
        <a>
          <img class="mr-3" src="/icons/delete.svg" alt="">
          <span class="text-error">Delete</span>
        </a>
      </li>
    </ul>
  </div>
  <LaunchDialog :is-open="isOpen" :set-is-open="setIsOpen" />
</template>
<script>
import { ref } from 'vue'
import LaunchDialog from './LaunchDialog.vue'
export default {
  setup() {
    const isOpen = ref(false)
    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value
      },
    }
  },
  components: {
    LaunchDialog,
  },
}
</script>
