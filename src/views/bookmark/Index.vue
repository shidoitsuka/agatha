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
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Search</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Document</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Avatar</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Case</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Profiler</span>
              </label>
            </div>
            <div class="form-control">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary checkbox-sm">
                <span class="ml-3 label-text">Group</span>
              </label>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="flex-row items-center justify-between md:flex">
        <div class="flex px-3 rounded-lg bg-base-200">
          <img class="hidden md:block" src="/icons/search.svg" alt="">
          <input type="text" placeholder="Bookmark search..." class="input bg-base-200 focus:ring-0">
        </div>
        <div class="flex items-center space-x-3">
          <small class="text-sm">Records: 141</small>
        </div>
      </div>
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result">
            <td class="flex items-center">
              <div class="avatar">
                <div class="w-10 h-10 mr-3 rounded-full">
                  <img :src="result.avatar">
                </div>
              </div>
              {{ result.name }}
            </td>
            <td><span class="text-xs badge">{{ result.type }}</span></td>
            <td class="text-agatha-400">{{ result.date }}</td>
            <td>
              <button>
                <img src="/icons/dots.svg" alt="">
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Visualization />
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import Visualization from './Visualization.vue'

export default {
  components: {
    LeftMenu,
    Visualization,
  },
  data() {
    return {
      results: [
        {
          name: 'Former cia agent edward snowden',
          avatar:
            'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: 'DOCUMENT',
          date: 'yesterday at 23:22',
        },
        {
          name: 'Hacking group',
          avatar: '/icons/groups.svg',
          type: 'GROUP',
          date: 'yesterday at 23:22',
        },
        {
          name: 'This is my case title',
          avatar:
            'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: 'CASE',
          date: 'yesterday at 23:22',
        },
        {
          name: 'Donaly reynolds',
          avatar:
            'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: 'AVATAR',
          date: 'yesterday at 23:22',
        },
      ],
    }
  },
}
</script>
