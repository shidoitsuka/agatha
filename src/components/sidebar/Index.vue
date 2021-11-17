<template>
  <div v-show="showSidebar" class="hidden min-h-screen py-5 space-y-1 bg-base-200 w-286 md:block">
    <div class="flex-row px-5">
      <div
        class="flex items-center w-full p-4 rounded-lg cursor-pointer hover:bg-base-300"
      >
        <img src="icons/home-active.svg" alt="" class="mr-3" />
        <h3 class="text-sm">Home</h3>
      </div>
    </div>
    <div class="flex-row px-5">
      <div
        class="flex items-center w-full p-4 rounded-lg cursor-pointer hover:bg-base-300"
      >
        <img src="icons/documents.svg" alt="" class="mr-3" />
        <h3 class="text-sm">
          Documents <span class="px-2 rounded-box bg-error">13.5m</span>
        </h3>
      </div>
    </div>
    <div class="px-5">
      <div
        class="items-center max-w-xs rounded-lg collapse"
        @click="changedCollapse('engineering')"
      >
        <input type="checkbox" ref="engineering" />
        <div class="flex items-center justify-between collapse-title">
          <img src="/icons/social-engineering.svg" alt="" class="mr-3" />
          <h3 class="flex-auto text-sm">Social Engineering</h3>
          <img src="/icons/arrow-down.svg" alt="" />
        </div>
        <div class="w-full p-0 collapse-content">
          <div class="border-t border-agatha-100">
            <p class="py-3 pl-16 cursor-pointer sidebar--font">
              Cyber Mission
            </p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">
              Influencer System
            </p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">
              Infiltration
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5">
      <div
        class="items-center max-w-xs rounded-lg collapse"
        @click="changedCollapse('case')"
      >
        <input type="checkbox" ref="case" />
        <div class="flex items-center justify-between collapse-title">
          <img src="/icons/case.svg" alt="" class="mr-3" />
          <h3 class="flex-auto text-sm">Case Manager</h3>
          <img src="/icons/arrow-down.svg" alt="" />
        </div>
        <div class="p-0 collapse-content">
          <div class="border-t border-agatha-100">
            <p class="py-3 pl-16 cursor-pointer hover:bg-agatha-100">
              Entity Card
            </p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">Avatar</p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">Group</p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">Media</p>
            <p class="py-3 pl-16 cursor-pointer sidebar--font">VIN</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row px-5">
      <div
        class="flex items-center w-full p-4 rounded-lg cursor-pointer hover:bg-base-300"
      >
        <img src="icons/profiler.svg" alt="" class="mr-3" />
        <h3 class="text-sm">Profiler</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        {
          icon: '/icons/home-active.svg',
          title: 'Home',
          url: '/',
          isActive: true,
        },
        {
          icon: '/icons/documents.svg',
          title: 'Documents',
          url: '/documents',
        },
        {
          icon: '/icons/social-engineering.svg',
          title: 'Social Engineering',
          url: '/social-engineering',
        },
        {
          icon: '/icons/case.svg',
          title: 'Case Manager',
          url: '/case-manager',
        },
        {
          icon: '/icons/profiler.svg',
          title: 'Profiler',
          url: '/profiler',
        },
      ],
    }
  },
  methods: {
    changedCollapse(item) {
      if (item === 'case') {
        if (this.$refs.case.checked) {
          this.$refs.case.checked = true
          this.$refs.engineering.checked = false
        } else {
          this.$refs.case.checked = false
        }
      } else {
        if (this.$refs.engineering.checked) {
          this.$refs.engineering.checked = true
          this.$refs.case.checked = false
        } else {
          this.$refs.engineering.checked = false
        }
      }
    },
  },
}
</script>
