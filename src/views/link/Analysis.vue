<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
      <template #left-menu-item>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Add Entity Cards/Cases</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Links Account</div>
          <div class="mb-2 space-y-2 collapse-content">
            <div></div>
            <div class="flex rounded-lg bg-base-300">
              <input type="text" class="w-full focus:ring-0 bg-base-300 input" value="2">
              <img src="/icons/filter.svg" class="mr-3" alt="">
            </div>
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Filter Relationships (Existing)</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Filter Relationships (New)</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Combine/Uncombine</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
        <div class="w-full collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">Significant Entities</div>
          <div class="space-y-4 collapse-content">
            Link
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="rounded-lg bg-base-200">
        <div class="flex items-center justify-between p-4 border-b-2 border-base-300 text-accent">
          <div class="flex items-center space-x-2">
            <button class="btn btn-xs btn-accent">Arrange By</button>
            <button><img src="/icons/pc.svg" alt=""></button>
            <button><img src="/icons/refresh.svg" alt=""></button>
            <input type="text" class="input input-xs bg-base-200 input-bordered" placeholder="Filter nodes">
          </div>
          <div class="divide-x divide-base-300">
            <button class="px-1"><img src="/icons/user-r.svg" alt=""></button>
            <button class="px-1"><img src="/icons/line.svg" alt=""></button>
            <button class="px-1"><img src="/icons/line-1.svg" alt=""></button>
            <button class="px-1"><img src="/icons/line-2.svg" alt=""></button>
            <button class="px-1"><img src="/icons/groups-1.svg" alt=""></button>
            <button class="px-1"><img src="/icons/line-4.svg" alt=""></button>
            <button class="px-1"><img src="/icons/art-1.svg" alt=""></button>
            <button class="px-1"><img src="/icons/comment-1.svg" alt=""></button>
            <button class="px-1"><img src="/icons/likes-1.svg" alt=""></button>
            <button class="px-1"><img src="/icons/share-1.svg" alt=""></button>
          </div>
        </div>
        <div class="p-4">
          <div class="grid bg-base-300 h-96 place-content-center">
            Analysis
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
