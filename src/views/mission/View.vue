<template>
  <div class="flex w-full mt-5 text-sm">
    <LeftMenu title="">
      <template #left-menu-item>
        <div>
          <div class="flex items-start justify-between p-3">
            <div class="mr-3">
              <img
                src="/icons/likes.svg"
                style="border: 15px solid #292932; border-radius: 50%;"
              />
            </div>
            <div class="flex-auto space-y-1">
              <h3 class="mission-view--left-title">Donald Reynolds</h3>
              <h5 class="mission-view--left-subtitle">Facebook Group</h5>
              <div class="text-xs text-white badge badge-success">
                SUCCESS
              </div>
            </div>
            <button><img src="/icons/external-url.svg" alt="" /></button>
          </div>
          <div class="flex justify-between mb-3">
            <div class="space-x-2">
              <button class="btn bg-base-300">Assign avatars</button>
              <button class="btn bg-base-300">Edit</button>
            </div>
          </div>
        </div>
        <div class="py-3 space-y-3 border-b-2 border-base-300">
          <div class="flex-row space-y-3">
            <div class="p-3 space-y-3 rounded-lg bg-base-200">
              <h3 class="text-agatha-400">Infiltration status</h3>
              <div class="grid grid-cols-3 gap-2 place-items-center">
                <div
                  class="w-full p-3 text-center rounded-lg infiltration-card--container"
                >
                  <h3 class="infiltration-card--text">21</h3>
                  <h5 class="infiltration-card--title">Joined</h5>
                </div>
                <div
                  class="w-full p-3 text-center rounded-lg infiltration-card--container"
                >
                  <h3 class="infiltration-card--text">08</h3>
                  <h5 class="infiltration-card--title">Pending</h5>
                </div>
                <div
                  class="w-full p-3 text-center rounded-lg infiltration-card--container"
                >
                  <h3 class="infiltration-card--text">05</h3>
                  <h5 class="infiltration-card--title">Planed</h5>
                </div>
              </div>
              <div>
                <h3 class="text-agatha-400">Description</h3>
                <p class="mission-left--description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus recusandae perspiciatis voluptatum atque eos
                  aspernatur autem quis eligendi dignissimos incidunt soluta
                  mollitia assumenda tenetur ratione, libero nemo aut cupiditate
                  minus!
                </p>
              </div>
              <div>
                <h3 class="text-agatha-400">Tags:</h3>
                <div class="py-2 space-x-3">
                  <span
                    class="inline-block px-2 text-xs text-white rounded-lg bg-base-300"
                    >Covid</span
                  >
                  <span
                    class="inline-block px-2 text-xs text-white rounded-lg bg-base-300"
                    >Summber</span
                  >
                  <span
                    class="inline-block px-2 text-xs text-white rounded-lg bg-base-300"
                    >College</span
                  >
                </div>
              </div>
              <div>
                <h3 class="text-agatha-400">Avatars assigned:</h3>
                <div class="-space-x-4">
                  <img
                    class="relative z-30 inline object-cover w-8 h-8 border-2 rounded-full border-base-200"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                  />
                  <img
                    class="relative z-20 inline object-cover w-8 h-8 border-2 rounded-full border-base-200"
                    src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                  />
                  <img
                    class="relative z-10 inline object-cover w-8 h-8 border-2 rounded-full border-base-200"
                    src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Profile image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="flex space-x-3 mx-auto" style="width: 676px;">
        <div class="w-full p-3 space-y-3 rounded-lg bg-base-200">
          <div class="flex items-center w-full px-3 rounded-lg bg-base-100">
            <img src="/icons/search.svg" alt="" />
            <input
              type="text"
              class="w-full input bg-base-100 focus:ring-0"
              placeholder="Search"
            />
          </div>
          <div class="w-full p-3 space-y-2 rounded-lg mission-post--container">
            <div class="flex items-center justify-between space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
              <div class="flex-auto">
                <h3 class="mission-post--poster mt-3">Ronald Oliver</h3>
                <h5 class="mission-post--date">November 16, 2021</h5>
              </div>
              <div class="flex items-center space-x-2">
                <div class="dropdown dropdown-end">
                  <div tabindex="0">
                    <img
                      src="/icons/dots.svg"
                      style="transform: rotate(90deg); "
                      alt=""
                    />
                  </div>
                  <ul
                    tabindex="0"
                    class="p-2 rounded-lg shadow w-286 menu dropdown-content bg-base-300"
                  >
                    <li>
                      <a>
                        <div
                          class="grid rounded-full place-items-center w-7 h-7 bg-secondary mr-3"
                        >
                          <img src="/icons/bosts-1.svg" alt="" />
                        </div>
                        Boost
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          class="mr-3"
                          src="/icons/bookmark.svg"
                          alt=""
                        />
                        Save post to Profiler
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          class="mr-3"
                          src="/icons/image.svg"
                          alt=""
                        />
                        Save image to Profiler
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p class="mission-post--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              labore sed hic officia aspernatur quisquam reiciendis, dignissimos
              adipisci magni pariatur nulla ipsam aliquid doloribus, fugiat
              voluptates eius sunt culpa molestias.
            </p>
            <img
              class="object-cover w-full rounded-lg"
              src="https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div class="flex justify-between">
              <div class="flex items-center justify-between w-full">
                <div class="-space-x-2">
                  <img
                    class="relative z-30 inline object-cover w-6 h-6 border-2 rounded-full border-base-300"
                    src="/icons/likes.svg"
                    alt="Profile image"
                  />
                  <img
                    class="relative z-20 inline object-cover w-6 h-6 border-2 rounded-full border-base-300"
                    src="/icons/comments.svg"
                  />
                </div>
                <h3>1 comments</h3>
              </div>
            </div>
            <div
              class="grid grid-cols-2 py-2 border-t border-b place-items-center border-agatha-100"
            >
              <div class="flex ">
                <img class="mr-2" src="/icons/thumb.svg" alt="" /> Like
              </div>
              <div class="flex ">
                <img class="mr-2" src="/icons/comment-3.svg" alt="" /> Comment
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  />
                </div>
              </div>
              <input
                type="text"
                class="w-full rounded-full input bg-agatha-100"
                placeholder="Write a comment..."
              />
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
import LeftMenu from '@/components/mission/LeftMenu.vue'
import CreateDialog from '@/components/mission/Dialog.vue'

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
