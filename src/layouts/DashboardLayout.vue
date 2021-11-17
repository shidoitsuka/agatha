<template>
  <Navbar @hamClick="toggleSidebar" />
  <div class="flex">
    <Sidebar :showSidebar="showSidebar" />
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Index.vue'
import Sidebar from '@/components/sidebar/Index.vue'

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      showSidebar: true,
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
  },
}
</script>
