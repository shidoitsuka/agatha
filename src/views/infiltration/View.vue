<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu icon="/social-media/facebook.svg" title="Facebook Group">
      <template #left-menu-item>
        <div class="py-3 space-y-3 border-b-2 border-base-300">
          <h3>Targeted Groups</h3>
          <div>
            <h3 class="text-agatha-400">Suporting Groups</h3>
            <h3>31</h3>
          </div>
          <div>
            <h3 class="text-agatha-400">Oposing Groups</h3>
            <h3>32</h3>
          </div>
          <div>
            <h3 class="text-agatha-400">Neutral Groups</h3>
            <h3>145</h3>
          </div>
          <div>
            <h3 class="text-agatha-400">Total Audience</h3>
            <h3>145,123,123</h3>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="flex justify-between">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg> Back
        </button>
        <div class="space-x-2">
          <button class="btn border-base-300 hover:bg-white btn-outline">Asiggn more avatars</button>
          <button class="btn border-base-300 hover:bg-white btn-outline">Edit</button>
        </div>
      </div>
      <div class="flex space-x-3">
        <div class="flex-row space-y-3">
          <div class="w-96">
            <div class="flex items-start justify-between p-3 space-x-3 rounded-lg bg-base-200">
              <div class="avatar">
                <div class="w-16 h-16 rounded-lg">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
                </div>
              </div>
              <div class="flex-auto space-y-1">
                <h3 class="text-base font-bold">Donald Reynolds</h3>
                <h5>Facebook Group</h5>
                <div class="inline-block px-2 text-xs text-white rounded-sm badge-success">SUCCESS</div>
              </div>
              <button><img src="/icons/external-url.svg" alt=""></button>
            </div>
          </div>
          <div class="p-3 space-y-3 rounded-lg w-96 bg-base-200">
            <h3 class="text-agatha-400">Infiltration status</h3>
            <div class="grid grid-cols-3 gap-2 place-items-center">
              <div class="w-full p-3 text-center rounded-lg bg-primary">
                <h3 class="text-lg">21</h3>
                <h5 class="text-sm">Joined</h5>
              </div>
              <div class="w-full p-3 text-center rounded-lg bg-primary">
                <h3 class="text-lg">08</h3>
                <h5 class="text-sm">Pending</h5>
              </div>
              <div class="w-full p-3 text-center rounded-lg bg-primary">
                <h3 class="text-lg">05</h3>
                <h5 class="text-sm">Planed</h5>
              </div>
            </div>
            <div>
              <h3 class="text-agatha-400">Distirbution list:</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae perspiciatis voluptatum atque eos aspernatur autem quis eligendi dignissimos incidunt soluta mollitia assumenda tenetur ratione, libero nemo aut cupiditate minus!</p>
            </div>
            <div>
              <h3 class="text-agatha-400">Tags:</h3>
              <div class="py-2 space-x-3">
                <span class="inline-block px-2 text-xs text-white rounded-lg badge-success">Covid</span>
                <span class="inline-block px-2 text-xs text-white rounded-lg badge-success">SUmmber</span>
                <span class="inline-block px-2 text-xs text-white rounded-lg badge-success">College</span>
              </div>
            </div>
            <div>
              <h3 class="text-agatha-400">Distirbution list:</h3>
              <p>not assigned yet</p>
            </div>
            <div>
              <h3 class="text-agatha-400">Avatars assigned:</h3>
              <div class="-space-x-4">
                <img class="relative z-30 inline object-cover w-12 h-12 border-2 rounded-full border-base-200" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                <img class="relative z-20 inline object-cover w-12 h-12 border-2 rounded-full border-base-200" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                <img class="relative z-10 inline object-cover w-12 h-12 border-2 rounded-full border-base-200" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full p-3 space-y-3 rounded-lg bg-base-200">
          <div class="flex items-center w-full px-3 rounded-lg bg-base-100">
            <img src="/icons/search.svg" alt="">
            <input type="text" class="w-full input bg-base-100 focus:ring-0" placeholder="Search group">
          </div>
          <div class="w-full p-3 space-y-4 rounded-lg bg-base-300">
            <div class="flex items-center justify-between space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
                </div>
              </div>
              <div class="flex-auto">
                <h3>Ronald Oliver</h3>
                <h5 class="text-agatha-400">November 16, 2021</h5>
              </div>
              <div class="flex items-center space-x-2">
                <h3 class="text-secondary">Boosts</h3>
                <div class="grid rounded-full place-items-center w-7 h-7 bg-secondary">
                  <img src="/icons/bosts-1.svg" alt="">
                </div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore sed hic officia aspernatur quisquam reiciendis, dignissimos adipisci magni pariatur nulla ipsam aliquid doloribus, fugiat voluptates eius sunt culpa molestias.</p>
            <img class="object-cover w-full rounded-lg" src="https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <div class="flex justify-between">
              <div class="flex items-center justify-between w-full">
                <div class="-space-x-2">
                  <img class="relative z-30 inline object-cover w-6 h-6 border-2 rounded-full border-base-300" src="/icons/likes.svg" alt="Profile image" />
                  <img class="relative z-20 inline object-cover w-6 h-6 border-2 rounded-full border-base-300" src="/icons/comments.svg" />
                </div>
                <h3>1 comments</h3>
              </div>
            </div>
            <div class="grid grid-cols-2 py-2 border-t border-b place-items-center border-agatha-100">
              <div class="flex ">
                <img class="mr-2" src="/icons/thumb.svg" alt=""> Like
              </div>
              <div class="flex ">
                <img class="mr-2" src="/icons/comment-3.svg" alt=""> Comment
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
                </div>
              </div>
              <input type="text" class="w-full rounded-full input bg-agatha-100" placeholder="Write a comment...">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CreateDialog :isOpen="isOpen" :setIsOpen="setIsOpen" />
</template>

<script>
import { ref } from 'vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import CreateDialog from '@/components/infiliration/Dialog.vue'

export default {
  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value
      },
    }
  },

  props: ['results'],

  components: {
    LeftMenu,
    CreateDialog,
  },
}
</script>
