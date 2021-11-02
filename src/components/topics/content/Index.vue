<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="Cybe Security topics">
      <template #left-menu-item>
        <div class="py-3 space-y-3">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Order By</span>
            </label>
            <select class="w-full max-w-xs select bg-base-300">
              <option disabled="disabled" selected="selected">Published Date</option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Content Type</span>
            </label>
            <select class="w-full max-w-xs select bg-base-300">
              <option disabled="disabled" selected="selected">Posts</option>
              <option>telekinesis</option>
              <option>time travel</option>
              <option>invisibility</option>
            </select>
          </div>
          <div class="form-control">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked="checked" class="mr-3 checkbox checkbox-primary">
              <span class="label-text">Contains Alert</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Content Type</span>
            </label>
            <input class="input bg-base-300" placeholder="Enter keywords" type="text" />
          </div>
          <div class="form-control">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" checked="checked" class="mr-3 checkbox checkbox-primary">
              <span class="label-text">Contains Alert</span>
            </label>
          </div>
          <div class="form-control">
            <input class="input bg-base-300" placeholder="Any domains" type="text" />
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow pl-8 mb-5 space-y-5">
      <div class="flex space-x-3">
        <div class="space-y-3 w-72">
          <div class="space-y-3 rounded-lg bg-base-200">
            <div class="flex items-center p-3 bg-blue-600 rounded-t-lg">
              <img src="/social-media/facebook-1.svg" alt="" class="mr-2">
              Posts by profiles
            </div>
            <div class="px-5 py-2 space-y-3">
              <div class="flex items-start justify-between space-x-3">
                <img class="object-cover w-14 h-14 rounded-box " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <div class="flex-auto space-y-1">
                  <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
                  <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
                  <span class="badge badge-error">Discover</span>
                </div>
                <button><img src="icons/external-url.svg" alt=""></button>
              </div>
              <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</h5>
              <img class="object-cover rounded-lg" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
          </div>
        </div>
        <div class="space-y-3 w-72">
          <div class="space-y-3 rounded-lg bg-base-200">
            <div class="flex items-center p-3 bg-blue-400 rounded-t-lg">
              <img src="/social-media/twitter-1.svg" alt="" class="mr-2">
              Twitter
            </div>
            <div class="px-5 py-2 space-y-3">
              <div class="flex items-start justify-between space-x-3">
                <img class="object-cover w-14 h-14 rounded-box " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <div class="flex-auto space-y-1">
                  <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
                  <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
                  <span class="badge badge-error">Discover</span>
                </div>
                <button><img src="icons/external-url.svg" alt=""></button>
              </div>
              <h5>Sed ut perspiciatis unde omnis iste natus </h5>
            </div>
          </div>
        </div>
        <div class="space-y-3 w-72">
          <div class="space-y-3 rounded-lg bg-base-200">
            <div class="flex items-center p-3 bg-green-500 rounded-t-lg">
              <img src="/social-media/whatsapp-1.svg" alt="" class="mr-2">
              Whatsapp
            </div>
            <div class="px-5 py-2 space-y-3">
              <div class="flex items-start justify-between space-x-3">
                <img class="object-cover w-14 h-14 rounded-box " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <div class="flex-auto space-y-1">
                  <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
                  <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
                  <span class="badge badge-error">Discover</span>
                </div>
                <button><img src="icons/external-url.svg" alt=""></button>
              </div>
              <h5>Sed ut perspiciatis unde omnis iste natus </h5>
            </div>
          </div>
        </div>
        <div class="space-y-3 w-72">
          <div class="space-y-3 rounded-lg bg-base-200">
            <div class="flex items-center p-3 bg-gray-500 rounded-t-lg">
              <img src="/social-media/apple.svg" alt="" class="mr-2">
              Apple
            </div>
            <div class="px-5 py-2 space-y-3">
              <div class="flex items-start justify-between space-x-3">
                <img class="object-cover w-14 h-14 rounded-box " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                <div class="flex-auto space-y-1">
                  <h5 class="text-agatha-200">Abdiel Ahtfield</h5>
                  <h5 class='text-sm text-agatha-400'>4 hours ago</h5>
                  <span class="badge badge-error">Discover</span>
                </div>
                <button><img src="icons/external-url.svg" alt=""></button>
              </div>
              <h5>Sed ut perspiciatis unde omnis iste natus </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
export default {
  props: ['results'],

  components: {
    LeftMenu,
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
