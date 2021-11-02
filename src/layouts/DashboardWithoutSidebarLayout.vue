<template>
  <Navbar />
  <div class="flex">
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Index.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
