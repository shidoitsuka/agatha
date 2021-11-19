<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" class="m-1 ">
      <img src="/icons/dots.svg" alt="">
    </div>
    <ul
      tabindex="0"
      style="overflow: visible;"
      class="rounded-lg shadow menu dropdown-content bg-base-300 w-72"
    >
      <li @click="showSubMenu()">
        <a>
          <img class="mr-3" src="/icons/access.svg" alt="" />
          Access
        </a>
        <div
          v-show="isShownSubMenu"
          style="position: absolute; left: 100%; overflow-x: hidden;"
          class="rounded-lg shadow menu bg-base-300 w-72"
        >
          <ul style="padding: 0;">
            <li>
              <a>
                <img class="mr-3" src="/icons/docs-sm.svg" alt="" />
                Documents
              </a>
            </li>
            <li>
              <a>
                <img class="mr-3" src="/icons/media-sm.svg" alt="" />
                Media
              </a>
            </li>
            <li>
              <a>
                <img class="mr-3" src="/icons/docs-sm.svg" alt="" />
                Report
              </a>
            </li>
            <li>
              <a>
                <img class="mr-3" src="/icons/timeline-sm.svg" alt="" />
                Timeline
              </a>
            </li>
            <li>
              <a>
                <img class="mr-3" src="/icons/analysis-sm.svg" alt="" />
                Link Analysis
              </a>
            </li>
          </ul>
        </div>
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
  data() {
    return {
      isShownSubMenu: false,
    }
  },
  methods: {
    showSubMenu() {
      this.isShownSubMenu = !this.isShownSubMenu
    },
  },
}
</script>
