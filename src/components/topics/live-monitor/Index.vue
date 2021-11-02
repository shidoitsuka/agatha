<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="Cybe Security topics">
      <template #left-menu-item>
        <div class="py-3">
          <h3 class="text-agatha-200">Different Source</h3>
          <div class="py-2 space-y-3 divide-y divide-base-300">
            <div class="flex items-center justify-between py-1 space-x-2 text-sm">
              <img class="object-cover w-5 h-5" src="/social-media/facebook.svg" alt="">
              <div class="flex-auto">Westerm mews sources</div>
              <span class="text-xs badge bg-base-300">754</span>
            </div>
            <div class="flex items-center justify-between py-1 space-x-2 text-sm">
              <img class="object-cover w-5 h-5" src="/social-media/facebook.svg" alt="">
              <div class="flex-auto">Westerm mews sources</div>
              <span class="text-xs badge bg-base-300">754</span>
            </div>
            <div class="flex items-center justify-between py-1 space-x-2 text-sm">
              <img class="object-cover w-5 h-5" src="/social-media/facebook.svg" alt="">
              <div class="flex-auto">Westerm mews sources</div>
              <span class="text-xs badge bg-base-300">754</span>
            </div>
            <div class="flex items-center justify-between py-1 space-x-2 text-sm">
              <img class="object-cover w-5 h-5" src="/social-media/facebook.svg" alt="">
              <div class="flex-auto">Westerm mews sources</div>
              <span class="text-xs badge bg-base-300">754</span>
            </div>
            <div class="flex items-center justify-between py-1 space-x-2 text-sm">
              <img class="object-cover w-5 h-5" src="/social-media/facebook.svg" alt="">
              <div class="flex-auto">Westerm mews sources</div>
              <span class="text-xs badge bg-base-300">754</span>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="grid grid-cols-5 gap-3">
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-200">Velocity</h5>
          <h5 class="text-lg">8</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-200">Activity Last 24h</h5>
          <h5 class="text-lg">7</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-200">Audience / 10 m</h5>
          <h5 class="text-lg">4,005</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-200">Interaction</h5>
          <h5 class="flex text-lg">8</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-200">Post / 7 days</h5>
          <h5 class="flex text-lg">108766</h5>
        </div>
      </div>
      <div class="grid grid-cols-2 divide-x-2 rounded-lg bg-base-200 divide-base-300">
        <div class="p-5 space-y-3">
          <h5>Geo</h5>
          <div class="h-64 bg-base-300"></div>
        </div>
        <div class="p-5 space-y-3">
          <h5>Top hastags</h5>
          <div>
            <div v-for="tag in tags" :key="tag" class="inline-block px-2 m-1 text-white rounded-lg badge-success">{{ tag }}</div>
          </div>
        </div>
      </div>
      <div class="p-5 rounded-lg bg-base-200">
        <h1>Alerted & Targetd Activity</h1>
        <div class="grid grid-cols-2 gap-5 py-4">
          <div class="space-y-3 border-2 rounded-lg border-base-300">
            <div class="p-3 space-y-3">
              <div class="flex items-start justify-between space-x-3">
                <img class="object-cover rounded-full w-14 h-14 " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <div class="flex-auto space-y-1">
                  <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
                  <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
                  <span class="inline-block px-2 text-white rounded-lg badge-success">View</span>
                </div>
                <button><img src="icons/dots.svg" alt=""></button>
              </div>
              <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</h5>
            </div>
            <div class="grid grid-cols-3 py-2 divide-x-2 bg-base-300 place-items-center divide-agatha-100">
              <div class="p-3 text-center">
                <h3 class="text-agatha-200">Audience</h3>
                <h3 class="text-error">231,231</h3>
              </div>
              <div class="p-3 text-center">
                <h3 class="text-agatha-200">Interaction</h3>
                <h3>0</h3>
              </div>
              <div class="p-3 text-center">
                <h3 class="text-agatha-200">Geolocation</h3>
                <h3>0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu title="Unified Live Stream" bgHeader="bg-error">
      <template #right-menu-item>
        <div class="py-2 space-y-3">
          <div class="flex items-start justify-between space-x-3">
            <img class="object-cover w-12 h-12 rounded-full " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <div class="flex-auto space-y-1">
              <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
              <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
              <span class="inline-block px-2 text-white rounded-lg badge-success">View</span>
            </div>
            <button><img src="icons/dots.svg" alt=""></button>
          </div>
          <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</h5>
          <img class="object-cover rounded-lg" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        </div>
        <div class="py-2 space-y-3">
          <div class="flex items-start justify-between space-x-3">
            <img class="object-cover w-20 h-20 rounded-box " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <div class="flex-auto">
              <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
              <h5 class='text-sm text-agatha-200'>4 hours ago</h5>
              <span class="badge badge-error">Discover</span>
            </div>
            <button><img src="icons/external-url.svg" alt=""></button>
          </div>
          <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</h5>
        </div>
      </template>
    </RightMenu>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'
export default {
  props: ['results'],

  components: {
    LeftMenu,
    RightMenu,
  },

  data() {
    return {
      tags: [
        'Lindsay Mills',
        'Snowden',
        'Eric',
        'Agent',
        'CIA',
        'Former CIA',
        'Lindsay Mills',
        'Snowden',
        'CIA',
        'Edward',
        'Eric Snowden',
      ],
    }
  },
}
</script>
