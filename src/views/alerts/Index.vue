<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
      <template #action-menu>
        <div class="p-4 border-b-2 border-base-300">
          <button @click="setIsOpen(true)" class="w-full btn border-agatha-100 btn-sm">
            Configure An Alert
          </button>
          <ConfigDialog :isOpen="isOpen" :setIsOpen="setIsOpen" />
        </div>
      </template>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Date Created</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Start Date</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">End Date</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Alert Type</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action />
      <Item :results="alerts" @toggleVisualization="toggleVisualization" />
    </div>
    <RightMenu :isShow="isVisualization" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from './RightMenu.vue'
import Item from './Item.vue'
import ConfigDialog from './ConfigDialog.vue'

import alertJson from '@/data/alerts.json'

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
    Item,
    Action,
    LeftMenu,
    RightMenu,
    ConfigDialog,
  },

  data() {
    return {
      alerts: alertJson,
      isVisualization: false,
    }
  },

  methods: {
    toggleVisualization() {
      this.isVisualization = !this.isVisualization
    },
    closeDialog() {
      console.log('test')
      this.setIsOpen(false)
    },
  },
}
</script>
