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
      <!-- <Action>
        <template #left-action>
          <div class="flex px-1 rounded-lg bg-base-200">
            <img src="/icons/search.svg" alt="">
            <input type="text" class="focus:ring-0 input bg-base-200" placeholder="Search reports">
          </div>
        </template>
      </Action> -->
      <div class="rounded-lg bg-base-200">
        <div class="flex justify-between p-4 border-b border-base-300">
          <div class="flex items-center">
            <img src="/icons/select.svg" alt="" class="mr-3">
            Select All
          </div>
          <div class="space-x-3">
            <button class="capitalize btn btn-sm bg-base-300"><img src="/icons/merge.svg" alt="" class="mr-2"> Merge Reports</button>
            <button class="capitalize btn btn-sm btn-primary">Download Selected</button>
          </div>
        </div>
        <div class="divide-y divide-base-300">
          <div v-for="content in contents" :key="content" class="flex items-center justify-between p-4 space-x-4">
            <img :src="content.icons" alt="">
            <div class="flex-auto">
              <h3 class="report-download--content-name">{{ content.name }} <span class="report-download--content-date">{{ content.date }}</span> </h3>
              <h5 class="text-sm text-accent mt-2">Profiler - <span class="report-download--content-description">{{ content.description }}</span></h5>
            </div>
            <button style="height: 28px; width: 28px;"><img src="/icons/download.svg" alt=""></button>
            <button style="height: 28px; width: 28px;"><img src="/icons/edit.svg" alt=""></button>
            <button style="height: 28px; width: 28px;"><img src="/icons/delete.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'

export default {
  components: {
    // Action,
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
