<template>
  <div class="flex w-full text-sm">
    <LeftMenu>
      <template #action-menu>
        <div class="p-4 border-b-2 border-base-300">
          <button class="w-full btn btn-sm border-agatha-100">
            Create an Enitity / Target
          </button>
        </div>
      </template>
      <template #left-menu-item>
        <div class="p-4 card">
          <div class="form-control">
            <label class="cursor-pointer label">
              <input type="checkbox" checked="true" class="toggle toggle-primary">
              <span class="text-sm">Target / Crawling</span>
            </label>
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Entity Type</div>
          <div class="space-y-4 collapse-content">
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Person</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Organization</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Phone</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Nationality</span>
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
      <Action>
        <template #right-action>
          <div class="btn-group">
            <button class="btn btn-sm btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button class="btn btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </template>
      </Action>
      <Item :results="results" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
export default {
  props: ['results'],

  components: {
    Item,
    Action,
    LeftMenu,
  },
}
</script>
