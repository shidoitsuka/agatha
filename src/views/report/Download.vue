<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu>
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
          <div class="px-0 collapse-title">Type</div>
          <div class="space-y-4 collapse-content">
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="mr-2 checkbox checkbox-primary">
                <span class="label-text">Profiler</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="mr-2 checkbox checkbox-primary">
                <span class="label-text">Keyword Alerts</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="mr-2 checkbox checkbox-primary">
                <span class="label-text">Phising</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="mr-2 checkbox checkbox-primary">
                <span class="label-text">Other</span>
              </label>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <Action>
        <template #left-action>
          <div class="flex px-1 rounded-lg bg-base-200">
            <img src="/icons/search.svg" alt="">
            <input type="text" class="focus:ring-0 input bg-base-200" placeholder="Search reports">
          </div>
        </template>
      </Action>
      <div class="rounded-lg bg-base-200">
        <div class="flex justify-between p-4 border-b border-base-300">
          <div class="flex items-center">
            <img src="/icons/select.svg" alt="" class="mr-3">
            Select All
          </div>
          <div class="space-x-3">
            <button class="capitalize btn btn-sm btn-primary">Download Selected</button>
            <button class="capitalize btn-outline btn btn-sm">Clear Selected</button>
          </div>
        </div>
        <div class="divide-y divide-base-300">
          <div v-for="content in contents" :key="content" class="flex items-center justify-between p-4 space-x-4">
            <img :src="content.icons" alt="">
            <div class="flex-auto">
              <h3>{{ content.name }}</h3>
              <h5 class="text-sm text-agatha-200">{{ content.description }}</h5>
              <h6 class="mt-2 text-xs text-accent">{{ content.date }}</h6>
            </div>
            <button class="capitalize btn btn-sm btn-primary btn-outline">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'

export default {
  components: {
    Action,
    LeftMenu,
  },
  data() {
    return {
      contents: [
        {
          name: 'David Snowden',
          description:
            'Report successfully generated. Please download the file by clicking on the download link button.',
          date: 'Yesterday 2:22m',
          icons: '/icons/select.svg',
        },
        {
          name: 'This is my case title',
          description:
            'Report successfully generated. Please download the file by clicking on the download link button.',
          date: 'Yesterday 2:22m',
          icons: '/icons/select-active.svg',
        },
        {
          name: 'Bad influence',
          description:
            'Report successfully generated. Please download the file by clicking on the download link button.',
          date: 'Yesterday 2:22m',
          icons: '/icons/select-active.svg',
        },
        {
          name: 'Anthony Bednar',
          description:
            'Report successfully generated. Please download the file by clicking on the download link button.',
          date: 'Yesterday 2:22m',
          icons: '/icons/select-active.svg',
        },
        {
          name: 'James Smith',
          description:
            'Report successfully generated. Please download the file by clicking on the download link button.',
          date: 'Yesterday 2:22m',
          icons: '/icons/select.svg',
        },
      ],
    }
  },
}
</script>
