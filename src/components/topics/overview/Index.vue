<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="Cyber Security topics">
      <template #left-menu-item>
        <div class="py-3">
          <h3 class="text-agatha-400">Different Source</h3>
          <div class="flex-row py-2 space-y-3 divide-y divide-base-300">
            <div class="flex-row py-2 space-y-2">
              <div class="flex">
                <img src="/icons/groups.svg" alt="" class="mr-2">
                Univseristy of New York
              </div>
              <div class="flex items-center justify-between text-sm">
                <div class="p-1 border border-base-300">
                  <h5>80 <span class="text-agatha-400">7Days</span></h5>
                </div>
                <div class="badge badge-success">+24% <img src="/icons/up.svg" alt=""> </div>
              </div>
            </div>
            <div class="flex-row py-2 space-y-2">
              <div class="flex">
                <img src="/icons/groups.svg" alt="" class="mr-2">
                Univseristy of New York
              </div>
              <div class="flex items-center justify-between text-sm">
                <div class="p-1 border border-base-300">
                  <h5>80 <span class="text-agatha-400">7Days</span></h5>
                </div>
                <div class="badge badge-error">-24% <img src="/icons/down.svg" alt=""> </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="grid grid-cols-4 gap-3">
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-400">Profile</h5>
          <h5 class="text-lg">32,123,123</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-400">Sources</h5>
          <h5 class="text-lg">58</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-400">Posts</h5>
          <h5 class="text-lg">548</h5>
        </div>
        <div class="p-4 rounded-lg bg-base-200">
          <h5 class="text-agatha-400">Change</h5>
          <h5 class="flex text-lg">-25% <img src="/icons/down.svg" alt=""> </h5>
        </div>
      </div>
      <div class="rounded-lg h-96 bg-base-200"></div>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg bg-base-200">
          <div class="p-4 border-b border-base-300">
            Sphere Analysis - Countries
          </div>
          <div class="flex-row p-3 space-y-3">
            <div class="flex justify-between">
              <div class="flex">
                <img src="/country/cn.svg" alt="" class="mr-2">
                China
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex justify-between">
              <div class="flex">
                <img src="/country/rsa.svg" alt="" class="mr-2">
                Rusia
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex justify-between">
              <div class="flex">
                <img src="/country/turkey.svg" alt="" class="mr-2">
                Turkey
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex justify-between">
              <div class="flex">
                <img src="/country/ukr.svg" alt="" class="mr-2">
                Ukraine
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex justify-between">
              <div class="flex">
                <img src="/country/alb.svg" alt="" class="mr-2">
                Albania
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-base-200">
          <div class="flex items-center p-4 border-b border-base-300">
            Most alerted Profiles <button class="ml-3"><img src="/icons/dropdown.svg" alt=""></button>
          </div>
          <div class="flex-row p-3 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2 avatar">
                  <div class="w-10 h-10 rounded-full">
                    <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                  </div>
                </div>
                Ellen Hatfield
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2 avatar">
                  <div class="w-10 h-10 rounded-full">
                    <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                  </div>
                </div>
                Ellen Hatfield
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2 avatar">
                  <div class="w-10 h-10 rounded-full">
                    <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                  </div>
                </div>
                Ellen Hatfield
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="mr-2 avatar">
                  <div class="w-10 h-10 rounded-full">
                    <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                  </div>
                </div>
                Ellen Hatfield
              </div>
              <div class="badge bg-base-300">200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu title="Content">
      <template #right-menu-item>
        <div class="py-2 text-center border rounded-lg border-base-300">Generated tags</div>
        <div>
          <div v-for="tag in tags" :key="tag" class="inline-block px-2 m-1 text-white rounded-lg badge-success">{{ tag }}</div>
        </div>
        <div class="py-2 text-center border rounded-lg border-base-300">Top Posts</div>
        <swiper :slides-per-view="1">
          <swiper-slide>
            <h5>Naomi Osaka: Spotlight on media, authorities & player after French Open withdrawal.</h5>
            <div class="flex mt-3 space-x-3">
              <div class="avatar">
                <div class="w-10 h-10 rounded-full">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                </div>
              </div>
              <div class="text-agatha-400">
                <h5>Elen Hatiled</h5>
                <p class="text-sm">4 hours ago</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <h5>Naomi Osaka: Spotlight on media, authorities & player after French Open withdrawal.</h5>
            <div class="flex mt-3 space-x-3">
              <div class="avatar">
                <div class="w-10 h-10 rounded-full">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png">
                </div>
              </div>
              <div class="text-agatha-400">
                <h5>Naomi</h5>
                <p class="text-sm">4 hours ago</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>2</swiper-slide>
        </swiper>
        <div class="py-2 text-center border rounded-lg border-base-300">Top Shared</div>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h5>Drive.google</h5>
            <div class="badge bg-base-300">100</div>
          </div>
          <div class="flex items-center justify-between">
            <h5>Facebook.com</h5>
            <div class="badge bg-base-300">100</div>
          </div>
          <div class="flex items-center justify-between">
            <h5>Linkedin.com</h5>
            <div class="badge bg-base-300">100</div>
          </div>
          <div class="flex items-center justify-between">
            <h5>Twitter</h5>
            <div class="badge bg-base-300">100</div>
          </div>
          <div class="flex items-center justify-between">
            <h5>Instagram.com</h5>
            <div class="badge bg-base-300">100</div>
          </div>
        </div>
      </template>
    </RightMenu>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])
export default {
  props: ['results'],

  components: {
    LeftMenu,
    RightMenu,
    Swiper,
    SwiperSlide,
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
