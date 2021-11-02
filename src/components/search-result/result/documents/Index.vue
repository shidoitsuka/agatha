<template>
  <div class="flex">
    <LeftMenu>
      <template #left-menu-item>
        <div v-for="menu in menus" :key="menu" class="w-full text-sm collapse collapse-arrow">
          <input type="checkbox" />
          <div class="px-0 collapse-title">{{ menu.name }}</div>
          <div class="collapse-content">
            <a v-for="child in menu.child" :key="child" class="w-full" :href="child.url">{{ child.name }}</a>
          </div>
        </div>
      </template>
    </LeftMenu>
    <div class="flex-grow px-8 mb-5 space-y-5">
      <div v-if="isShowPreviewDocument">
        <PreviewDocument />
      </div>
      <div v-else>
        <Action :timeline="true" @toggle-timeline="toggleTimeline" />
        <div class="flex-row space-y-3">
          <Timeline :isShow="isShowTimeline" />
          <SearchItemDocument :results="results" @toggle-rightmenu="toggleRightMenu" @previewDocument="previewDocument" />
        </div>
      </div>
    </div>
    <div v-if="isShowPreviewDocument">
      <PreviewMenu />
    </div>
    <RightMenu v-show="isShowRightMenu">
      <template #right-menu-item>
        <div class="py-2 text-center border rounded-full border-base-300">Generated tags</div>
        <div>
          <div v-for="tag in tags" :key="tag" class="inline-block px-2 m-1 text-sm bg-success rounded-box">{{ tag }}</div>
        </div>
        <div class="py-2 text-center border rounded-full border-base-300">Top Authors</div>
        <div class="flex-row space-y-2">
          <div v-for="author in authors" :key="author" class="flex items-center space-x-2">
            <div class="avatar">
              <div class="w-8 h-8 rounded-full">
                <img :src="author.avatar" />
              </div>
            </div>
            <div class="w-full">
              <div class="flex justify-between text-sm">
                <h1>{{ author.name }}</h1>
                <span class="px-1 text-sm rounded-btn bg-base-300">{{ author.count }}</span>
              </div>
              <progress class="progress progress-error bg-success" :value="author.proggress" max="100"></progress>
            </div>
          </div>
        </div>
        <div class="py-2 text-center border rounded-full border-base-300">Top 10 website</div>
        <div class="flex-row space-y-2">
          <div v-for="website in websites" :key="website" class="w-full">
            <div class="flex justify-between text-sm">
              <h1 class="text-agatha-200">{{ website.name }}</h1>
              <div class="badge bg-base-300">{{ website.count }}</div>
            </div>
            <progress class="progress progress-info bg-base-300" :value="website.proggress" max="100"></progress>
          </div>
        </div>
      </template>
    </RightMenu>
  </div>
</template>

<script>
import SearchItemDocument from './Item.vue'
import Timeline from '@/components/search-result/chart/Timeline.vue'
import Action from '@/components/search-result/action/Index.vue'
import LeftMenu from '@/components/search-result/sidebar/LeftMenu.vue'
import RightMenu from '@/components/search-result/sidebar/RightMenu.vue'
import PreviewDocument from '@/components/search-result/result/documents/Preview.vue'
import PreviewMenu from '@/components/search-result/result/documents/PreviewMenu.vue'
export default {
  props: ['results'],

  components: {
    SearchItemDocument,
    Timeline,
    Action,
    LeftMenu,
    RightMenu,
    PreviewDocument,
    PreviewMenu,
  },

  data() {
    return {
      isShowTimeline: false,
      isShowRightMenu: false,
      isShowPreviewDocument: false,
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
      authors: [
        {
          name: 'Geri A. Beeson',
          avatar:
            'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          count: 120,
          proggress: 80,
        },
        {
          name: 'Ellen Hatfield',
          avatar:
            'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          count: 115,
          proggress: 65,
        },
        {
          name: 'Mai Boykin',
          avatar:
            'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          count: 95,
          proggress: 30,
        },
      ],
      websites: [
        {
          name: 'edition.cnn.com',
          count: 192,
          proggress: 40,
        },
        {
          name: 'facebook.com',
          count: 83,
          proggress: 74,
        },
        {
          name: 'linkedin.com',
          count: 72,
          proggress: 70,
        },
      ],
      menus: [
        { name: 'Schema', child: [{ name: 'Schema', url: '#' }] },
        { name: 'Document Type', child: [{ name: 'Document', url: '#' }] },
        { name: 'Properties', child: [{ name: 'Properties', url: '#' }] },
        { name: 'Date Range', child: [{ name: 'Date Range', url: '#' }] },
        { name: 'Day of Week', child: [{ name: 'Day of Week', url: '#' }] },
        {
          name: 'Document Sentiment',
          child: [{ name: 'Document Sentiment', url: '#' }],
        },
        {
          name: 'Document Credbilty',
          child: [{ name: 'Document Credbilty', url: '#' }],
        },
        { name: 'Countries', child: [{ name: 'Countries', url: '#' }] },
        {
          name: 'Categorized Documents',
          child: [{ name: 'Categorized Documents', url: '#' }],
        },
        {
          name: 'Dynamic Filter',
          child: [{ name: 'Dynamic Filter', url: '#' }],
        },
      ],
    }
  },

  methods: {
    toggleTimeline() {
      this.isShowTimeline = !this.isShowTimeline
    },
    toggleRightMenu() {
      this.isShowRightMenu = !this.isShowRightMenu
    },
    previewDocument() {
      this.isShowPreviewDocument = !this.isShowPreviewDocument
    },
  },
}
</script>
