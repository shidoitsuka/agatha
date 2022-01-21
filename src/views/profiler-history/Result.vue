<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex">
    <LeftMenu title="Filters" class="mr-5">
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title sidebar-collapse--font">Profiler Groups</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="profiler-history-right--container w-full mr-5 space-y-2">
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
      <div class="bg-base-200 rounded-lg mx-auto p-5 w-full three-dot-hide-trigger">
        <div class="flex">
          <img src="/icons/search.svg" class="profiler-history--image mr-2" alt="">
          <span class="profiler-history--email mt-1">autonoms@yahoo.com</span>
          <img src="/icons/three-dots.svg" class="ml-auto three-dot-hide" alt="">
        </div>
        <div class="profiler-history--content border-l ml-3 mt-1 border-base-300">
          <p class="profiler-history--content-found ml-4">16 Entities Found</p>
          <p class="profiler-history--content-date ml-4">11-16-2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'
import LeftMenu from '@/components/profiler-history/LeftMenu.vue'

export default {
  components: {
    GlobalSearchInput,
    LeftMenu,
  },
}
</script>
