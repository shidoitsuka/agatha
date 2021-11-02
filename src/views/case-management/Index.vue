<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Case Type</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Date Created</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Date Range</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Avatar Group</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Departement</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action />
      <Item :results="cases" @toggleVisualization="toggleVisualization" />
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

import caseJson from '@/data/case-management.json'

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
  },

  data() {
    return {
      cases: caseJson,
      isVisualization: false,
    }
  },

  methods: {
    toggleVisualization() {
      this.isVisualization = !this.isVisualization
    },
  },
}
</script>
