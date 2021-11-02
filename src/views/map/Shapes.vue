<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
      <template #left-menu-item>
        <div class="space-y-3 divide-y-2 divide-base-300">
          <div class="flex items-center justify-between py-2 text-accent">
            Map Count:
            <div class="flex items-center space-x-3">
              <button class="btn btn-accent btn-xs">One ></button>
              <button>
                <img src="/icons/pc.svg" alt="">
              </button>
            </div>
          </div>
          <div class="w-full collapse collapse-arrow">
            <input type="checkbox" />
            <div class="px-0 collapse-title">Add Entity Cards/Cases</div>
            <div class="space-y-4 collapse-content">
              <select class="w-full select bg-base-300">
                <option disabled="disabled" selected="selected">Cases</option>
                <option>telekinesis</option>
                <option>time travel</option>
                <option>invisibility</option>
              </select>
              <input type="text" class="w-full bg-base-300 input" placeholder="Keywords">
              <div class="flex justify-between">
                <button><img src="/icons/arrow-left.svg" alt=""></button>
                <button><img src="/icons/arrow-right.svg" alt=""></button>
              </div>
            </div>
          </div>
          <div class="w-full collapse collapse-arrow">
            <input type="checkbox" />
            <div class="px-0 collapse-title">Import Geo Shapes</div>
            <div class="space-y-4 collapse-content">
              <div class="py-4 text-center border-2 border-dashed border-agatha-100">
                <h1>Drag & Drop </h1>
                <p class="text-agatha-200">your files here or <span class="text-info">browse</span></p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="rounded-lg bg-base-200">
        <div class="flex items-center justify-between p-4 border-b-2 border-base-300 text-accent">
          <h3>Filters: <button class="btn btn-accent btn-xs">Sentiment CLusters ></button></h3>
          <div class="space-x-2">
            <button><img src="/icons/refresh.svg" alt=""></button>
            <button><img src="/icons/erase.svg" alt=""></button>
            <button><img src="/icons/art.svg" alt=""></button>
          </div>
        </div>
        <div class="p-4">
          <div class="grid bg-base-300 h-96 place-content-center">
            Shapes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'

export default {
  components: {
    LeftMenu,
  },
}
</script>
