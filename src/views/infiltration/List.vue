<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="Infiliration List">
      <template #left-menu-item>
        <div class="py-3 space-y-3 border-b-2 border-base-300">
          <button class="w-full btn border-agatha-100" @click="setIsOpen(true)">
            New Infilration Case
          </button>
          <div class="flex items-center justify-between p-2 space-x-3 rounded-lg bg-base-300">
            <img src="/social-media/facebook.svg" alt="">
            <div class="flex-auto">Facebook</div>
            <span class="border-0 badge bg-agatha-100">20</span>
          </div>
          <div class="p-2 space-y-2 border-b border-base-300">
            <h3 class="text-agatha-200">Account Type</h3>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Pages (10)</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Groups (9)</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Profiles (9)</span>
              </label>
            </div>
          </div>
          <div class="p-2 space-y-2 border-b border-base-300">
            <h3 class="text-agatha-200">Status</h3>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Success</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Access Denied</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center py-2 space-x-3 text-sm cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                <span>Failed</span>
              </label>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between space-x-3 rounded-lg">
                <img src="/social-media/youtube.svg" alt="">
                <div class="flex-auto">Youtube</div>
                <span class="border-0 badge bg-agatha-100">20</span>
              </div>
              <div class="flex items-center justify-between space-x-3 rounded-lg">
                <img src="/social-media/twitter.svg" alt="">
                <div class="flex-auto">Twitter</div>
                <span class="border-0 badge bg-agatha-100">2</span>
              </div>
              <div class="flex items-center justify-between space-x-3 rounded-lg">
                <img src="/social-media/whatsapp.svg" alt="">
                <div class="flex-auto">Whatsapp</div>
                <span class="border-0 badge bg-agatha-100">2</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action :showRecord="false">
        <template #right-action>
          <div class="flex px-3 rounded-lg bg-base-200">
            <img src="/icons/search.svg" alt="">
            <input type="text" class="focus:ring-0 input bg-base-200" placeholder="Infiltration Search">
          </div>
        </template>
      </Action>
      <div class="grid grid-cols-3 gap-3">
        <div class="flex items-start justify-between p-3 space-x-3 rounded-lg bg-base-200">
          <img class="object-cover w-16 h-16" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <div class="flex-auto space-y-1">
            <h3>Donald Reynolds</h3>
            <h5 class="text-agatha-100">Facebook Group</h5>
            <div class="inline-block px-2 text-xs text-white rounded-lg badge-success">SUCCESS</div>
          </div>
          <button>
            <img src="/icons/dots.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>

  <CreateDialog :isOpen="isOpen" :setIsOpen="setIsOpen" />
</template>

<script>
import { ref } from 'vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import CreateDialog from '@/components/infiltration/Dialog.vue'

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
    Action,
    LeftMenu,
    CreateDialog,
  },
}
</script>
