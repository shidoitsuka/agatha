<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
      <template #action-menu>
        <div class="p-4 border-b-2 border-base-300">
          <button class="w-full btn border-agatha-100" @click="setIsOpen(true)">
            Run a Cyber Mission
          </button>
        </div>
      </template>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Date</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Social Media</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Action</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Status</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action />
      <Item :actions="actions" />
    </div>
    <RightMenu title="Visualizations">
      <template #right-menu-item>
        <Visualization />
      </template>
    </RightMenu>
  </div>

  <RunDialog :is-open="isOpen" :set-is-open="setIsOpen" />
</template>

<script>
import { ref } from 'vue'
import actionLogJson from '@/data/action-log.json'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'
import Visualization from '@/components/search-result/chart/Visualization.vue'
import Item from '@/components/cyber-mission/Item.vue'
import RunDialog from '@/components/cyber-mission/RunDialog.vue'

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
    Action,
    LeftMenu,
    RightMenu,
    Item,
    Visualization,
    RunDialog,
  },
  data() {
    return {
      actions: actionLogJson,
    }
  },
}
</script>
