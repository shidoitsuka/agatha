<template>
  <Navbar />
  <div class="flex">
    <Sidebar />
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
}
</script>
