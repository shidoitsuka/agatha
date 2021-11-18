<template>
  <div class="flex w-full text-sm">
    <LeftMenu>
      <template #action-menu>
        <div class="p-4 border-b-2 border-base-300">
          <button @click="setIsOpen(true)" class="w-full btn border-agatha-100 btn-sm">
            Create A Group
          </button>
        </div>
      </template>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Group Type</div>
          <div class="space-y-4 collapse-content">
            <div class="form-control">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary">
                <span class="label-text">Remember me</span>
              </label>
            </div>
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
          <div class="px-0 collapse-title">Relationships</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Categorized Entities</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Fake Accounts Traits</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Target Groups</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Entity Groups</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action />
      <Item :results="results" @toggle-target="toggleTarget" />
    </div>
  </div>
  <!-- <TargetDialog :is-open="isOpenTarget" :set-is-open="setIsOpenTarget" />
  <CreateDialog :is-open="isOpen" :set-is-open="setIsOpen" /> -->
</template>

<script>
import { ref } from 'vue'
import Item from './Item.vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
// import CreateDialog from '@/components/search-result/result/groups/CreateDialog.vue'
// import TargetDialog from './TargetDialog.vue'

export default {
  setup() {
    const isOpen = ref(false)
    const isOpenTarget = ref(false)
    return {
      isOpen,
      isOpenTarget,
      setIsOpen(value) {
        isOpen.value = value
      },
      setIsOpenTarget(value) {
        isOpenTarget.value = value
      },
    }
  },

  props: ['results'],

  components: {
    Item,
    Action,
    LeftMenu,
    // CreateDialog,
    // TargetDialog,
  },

  methods: {
    toggleTarget() {
      this.setIsOpenTarget(!this.isOpenTarget)
    },
  },
}
</script>
