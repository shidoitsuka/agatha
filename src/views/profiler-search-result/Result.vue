<template>
  <div class="px-8 py-4 mb-4 border-t border-base-300 bg-base-200">
    <GlobalSearchInput />
  </div>

  <div class="flex">
    <SidebarLeft />
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <div class="flex items-center justify-between px-5">
          <div class="flex space-x-3">
            <h3>3 Confirmed Selected</h3>
          </div>
          <SaveEntityDialog />
        </div>
        <!-- <div v-for="item in confirmed_matches" :key="item.id"> -->
        <div class="grid grid-cols-3">
          <div>
            <div class="primary--label">
              PRIMARY
            </div>
            <div class="bg-base-300 confirmed-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="primary--secondary-label">
              PRIMARY
            </div>
            <div class="bg-base-300 confirmed-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/close-red.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="primary--secondary-label">
              PRIMARY
            </div>
            <div class="bg-base-300 confirmed-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/close-red.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <div class="p-4 space-y-3 rounded-lg bg-base-200">
        <div class="flex items-center justify-between">
          <div class="flex space-x-3 px-5">
            <h3>3 Possible Matches</h3>
          </div>
        </div>
        <!-- <div v-for="item in possible_matches" :key="item.id"> -->
        <!-- <SearchItem :item="item" :isPossible="true" /> -->
        <div class="grid grid-cols-3">
          <div class="mb-5">
            <div class="bg-base-300 possible-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/add.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-base-300 possible-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/add.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-base-300 possible-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/add.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-base-300 possible-card--container relative">
              <div class="p-3 space-y-3 confirmed-card--inner">
                <div
                  class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
                >
                  <div class="flex items-center py-3 space-x-3">
                    <div class="avatar">
                      <div class="rounded-full w-14 h-14">
                        <img
                          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                        />
                      </div>
                    </div>
                    <div>
                      <div style="width: 300px" class="flex justify-between">
                        <h3 class="text-sm">David Snowden</h3>
                        <button class="text-error">
                          <img src="/icons/add.svg" alt="" />
                        </button>
                      </div>
                      <p class="text-sm text-agatha-400">United States</p>
                      <p class="text-xs text-agatha-400">Username</p>
                    </div>
                  </div>
                </div>
                <div class="confirmed-card--bottom">
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Numbers</span>
                  </div>
                  <div class="mr-4">
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Sources</span>
                  </div>
                  <div>
                    <span class="confirmed-card--bottom-number">3</span
                    ><span class="confirmed-card--bottom-text">Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import confirmedMatchData from '@/data/profiler/confirmed-matches.json'
import possibleMatchesData from '@/data/profiler/possible-matches.json'
import GlobalSearchInput from '@/components/global-search/GlobalSearchInput.vue'
import SidebarLeft from '@/components/profiler-search-result/SidebarLeft.vue'
// import SearchItem from '@/components/profiler-search-result/SearchItem.vue'
import SaveEntityDialog from './SaveEntityDialog.vue'

export default {
  components: {
    GlobalSearchInput,
    SidebarLeft,
    // SearchItem,
    SaveEntityDialog,
  },
  data() {
    return {
      confirmed_matches: confirmedMatchData,
      possible_matches: possibleMatchesData,
    }
  },
}
</script>
