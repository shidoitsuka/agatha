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
          <div class="flex items-center">
            Filters:
            <button class="ml-2 capitalize btn btn-accent btn-xs">
              <img class="mr-2" src="/icons/pdf.svg" alt=""> Reprort Template
            </button>
          </div>
          <div class="space-x-2">
            <button><img src="/icons/refresh.svg" alt=""></button>
            <button><img src="/icons/print.svg" alt=""></button>
            <button><img src="/icons/file.svg" alt=""></button>
            <button><img src="/icons/file-download.svg" alt=""></button>
          </div>
        </div>
        <div class="p-4">
          <div class="grid text-center bg-base-200 h-96 place-content-center">
            <div class="grid place-items-center">
              <img src="/icons/pdf-1.svg" alt="">
              <h3 class="mt-4 text-3xl text-base-300">Pdf preview</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu title="Properties">
      <template #right-menu-item>
        <div class="pb-5 space-y-4 border-b border-base-300">
          <h3 class="text-sm text-agatha-400">Case</h3>
          <div class="flex items-center p-3 rounded-lg bg-base-300">
            <img class="object-cover w-10 h-10 mr-3 rounded-full" src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <h3>This is my case title</h3>
          </div>
        </div>
        <div class="pb-5 space-y-4 border-b border-base-300">
          <h3 class="text-sm text-agatha-400">Query</h3>
          <input type="text" class="w-full input bordered input-sm input-bordered bg-base-300" value="_eventidsNLZEFJOfnzeqZEFOcf">
        </div>
        <div class="pb-5 space-y-4 border-b border-base-300">
          <h3 class="text-sm text-agatha-400">Report Type</h3>
          <div class="form-control">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="opt" checked="checked" class="mr-3 radio radio-primary radio-sm" value="">
              <span class="label-text">Document</span>
            </label>
          </div>
          <div class="form-control">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="opt" checked="checked" class="mr-3 radio radio-primary radio-sm" value="">
              <span class="label-text">Case</span>
            </label>
          </div>
          <div class="form-control">
            <label class="flex items-center cursor-pointer">
              <input type="radio" name="opt" checked="checked" class="mr-3 radio radio-primary radio-sm" value="">
              <span class="label-text">Entity</span>
            </label>
          </div>
        </div>
      </template>
    </RightMenu>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'

export default {
  components: {
    LeftMenu,
    RightMenu,
  },
  data() {
    return {
      contents: [
        'Case Summary',
        'Page Break',
        'Social Media Summary',
        'Page Break',
        'Top Authors List',
        'Page Break',
        'Top Facebook Comments + Likes',
        'Page Break',
        'Positive Keywords',
      ],
    }
  },
}
</script>
