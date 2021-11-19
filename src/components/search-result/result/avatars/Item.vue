<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in results" :key="result" class="rounded-lg bg-base-200">
      <div class="mb-4">
        <div class="flex justify-between w-full p-3">
          <div>
            <img v-show="result.isPrivate" src="/icons/private.svg" alt="" />
          </div>

          <div class="dropdown dropdown-end" style="overflow: visible;">
            <div tabindex="0" class="m-1 ">
              <img src="/icons/dots.svg" alt="" />
            </div>

            <ul tabindex="0" style="overflow: visible;" class="rounded-lg shadow menu dropdown-content bg-base-300 w-72">
              <li @click="showSubMenu()">
                <a>
                  <img class="mr-3" src="/icons/access.svg" alt="" />
                  Access
                </a>
                <div v-show="isShownSubMenu" style="position: absolute; left: 100%; overflow-x: hidden;" class="rounded-lg shadow menu bg-base-300 w-72">
                  <ul style="padding: 0;">
                    <li>
                      <a>
                        <img class="mr-3" src="/icons/docs-sm.svg" alt="">
                        Documents
                      </a>
                    </li>
                    <li>
                      <a>
                        <img class="mr-3" src="/icons/media-sm.svg" alt="">
                        Media
                      </a>
                    </li>
                    <li>
                      <a>
                        <img class="mr-3" src="/icons/docs-sm.svg" alt="">
                        Report
                      </a>
                    </li>
                    <li>
                      <a>
                        <img class="mr-3" src="/icons/timeline-sm.svg" alt="">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a>
                        <img class="mr-3" src="/icons/analysis-sm.svg" alt="">
                        Link Analysis
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a as="button">
                  <img class="mr-3" src="/icons/launch.svg" alt="" />
                  Launch
                </a>
              </li>
              <li>
                <a>
                  <img class="mr-3" src="/icons/bookmark.svg" alt="" />
                  Bookmark
                </a>
              </li>
              <li>
                <a>
                  <img class="mr-3" src="/icons/edit.svg" alt="" />
                  Edit
                </a>
              </li>
              <li>
                <a>
                  <img class="mr-3" src="/icons/unlock.svg" alt="" />
                  Unlock
                </a>
              </li>
              <li>
                <a>
                  <img class="mr-3" src="/icons/delete.svg" alt="" />
                  <span class="text-error">Delete</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-row space-y-2 text-center">
          <div class="avatar indicator">
            <span
              class="bg-transparent border-none rounded-sm indicator-bottom indicator-center indicator-item badge"
            >
              <img :src="result.social.icons" alt="" />
            </span>
            <div class="w-24 h-24 rounded-full">
              <img :src="result.avatar" />
            </div>
          </div>
          <div
            class="flex items-center justify-center text-base cursor-pointer"
            @click="$emit('toggleVisualization')"
          >
            {{ result.name }}
            <img v-show="result.isVerif" src="/icons/verif.svg" alt="" />
          </div>
          <span class="text-xs text-agatha-100">{{ result.address }}</span>
          <h5 class="text-xs">
            Crawled Documents
            <span class="badge bg-secondary">{{ result.crawled }}</span>
          </h5>
          <div class="flex justify-center space-x-2">
            <img v-for="icon in result.socials" :key="icon" :src="icon" />
          </div>
        </div>
      </div>
      <Chartitem />
    </div>
  </div>
</template>

<script>
import Chartitem from '@/components/search-result/result/avatars/Chartitem.vue'
// import Action from '@/components/search-result/result/avatars/Action.vue'
export default {
  props: ['results'],
  emits: ['toggleVisualization'],
  components: {
    Chartitem,
    // Action,
  },
  data() {
    return {
      isShownSubMenu: false,
    }
  },
  methods: {
    showSubMenu() {
      this.isShownSubMenu = !this.isShownSubMenu
    },
  },
}
</script>
