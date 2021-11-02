<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="Page structure">
      <template #left-menu-item>
        <div class="py-3">
          <h3>Content</h3>
          <div class="mt-2 border-2 divide-y-2 border-base-300 divide-base-300">
            <div v-for="(content, idx) in contents" :key="idx" class="flex justify-between p-2">
              <div class="flex items-center">
                <img src="/icons/repeat-grid.svg" alt="" class="mr-2">
                {{ idx + 1 }}. {{ content }}
              </div>
              <button><img src="/icons/trash.svg" alt=""></button>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="rounded-lg bg-base-200">
        <div class="flex items-center justify-between p-4 border-b-2 border-base-300 text-accent">
          <button class="ml-2 capitalize btn btn-accent btn-xs">
            Basic Component
          </button>
          <div class="space-x-2">
            <button><img src="/icons/refresh.svg" alt=""></button>
            <button><img src="/icons/file.svg" alt=""></button>
          </div>
        </div>
        <div class="p-4">
          <div class="grid text-center bg-base-200 h-96 place-content-center">
            <div class="grid place-items-center">
              <img src="/icons/analys-wall.svg" alt="">
              <h3 class="mt-4 text-3xl text-base-300">Analyst wall preview</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu title="Properties">
      <template #right-menu-item>
        <div class="pb-5 border-b border-base-300">
          <h3>Settings</h3>
          <div class="form-control">
            <label class="label">
              <span class="text-agatha-100 label-text">Username</span>
            </label>
            <input type="text" class="input bg-base-300">
          </div>
          <div>
            <label class="label">
              <span class="text-agatha-100 label-text">Font Style</span>
            </label>
            <button class="w-8 btn btn-sm bg-base-300">b</button>
            <button class="w-8 btn btn-sm bg-base-300">I</button>
            <button class="w-8 btn btn-sm bg-base-300">U</button>
          </div>
          <div>
            <label class="label">
              <span class="text-agatha-100 label-text">Font Style</span>
            </label>
            <button class="btn btn-sm bg-base-300"><img src="/icons/align-left.svg" alt=""></button>
            <button class="btn btn-sm bg-base-300"><img src="/icons/align-center.svg" alt=""></button>
            <button class="btn btn-sm bg-base-300"><img src="/icons/align-justify.svg" alt=""></button>
            <button class="btn btn-sm bg-base-300"><img src="/icons/align-right.svg" alt=""></button>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="text-agatha-100 label-text">Font Size</span>
            </label>
            <input type="text" class="input bg-base-300" value="16">
          </div>
          <div class="form-control">
            <label class="label">
              <span class="text-agatha-100 label-text">Font Family</span>
            </label>
            <select class="w-full select bg-base-300">
              <option disabled="disabled" selected="selected">Mulish</option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
            </select>
          </div>
          <div class="form-control text-base-300">
            <label class="label">
              <span class="text-agatha-100 label-text">Font Color</span>
            </label>
            <Sketch v-model="colors" />
          </div>
        </div>
      </template>
    </RightMenu>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'
import { Sketch } from '@ckpack/vue-color'

export default {
  components: {
    LeftMenu,
    RightMenu,
    Sketch,
  },
  data() {
    return {
      contents: ['Text', 'Image', 'Text'],
      colors: '#194D33A8',
    }
  },
}
</script>
