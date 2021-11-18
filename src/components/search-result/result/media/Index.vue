<template>
  <div class="flex w-full text-sm">
    <LeftMenu>
      <template #action-menu>
        <div class="p-4 border-b-2 border-base-300">
          <button @click="setIsOpen(true)" class="w-full btn border-agatha-100 btn-sm">
            Upload Media
          </button>
        </div>
      </template>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Created Date</div>
          <div class="space-y-4 collapse-content">
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">All</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">Last 24 Hours</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">Last 3 Days</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">Last Week</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">Last 3 Months</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="opt" checked="checked" class="radio radio-primary" value="">
                <span class="label-text">Last Year</span>
              </label>
            </div>
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">File Format</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action />
      <Item :results="results" />
    </div>
  </div>
  <!-- <UploadDialog :is-open="isOpen" :set-is-open="setIsOpen" /> -->
</template>

<script>
import { ref } from 'vue'
import Item from './Item.vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
// import UploadDialog from '@/components/search-result/result/media/UploadDialog.vue'

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

  props: ['results'],

  components: {
    Item,
    Action,
    LeftMenu,
    // UploadDialog,
  },
}
</script>
