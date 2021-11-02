<template>
  <div class="relative py-6 space-y-4 text-center divide-y-2 rounded-lg bg-base-200 divide-base-300">
    <div>
      <ActionButton />
      <div class="avatar placeholder">
        <div class="w-12 h-12 rounded-full bg-secondary-focus text-secondary-content">
          <span>MX</span>
        </div>
      </div>
      <h3 class="text-secondary">Entities found</h3>
      <h3>(555) 519-3521</h3>
    </div>
    <div class="p-3">
      <h3 class="text-sm text-agatha-300">Email</h3>
      <h3 class="mb-4">autonoms@yahoo.com</h3>
    </div>
    <span class="px-4 py-1 text-center rounded-lg text-agatha-300 bg-base-300">2 days ago</span>
  </div>
</template>
<script>
import ActionButton from './ActionButton.vue'
export default {
  components: { ActionButton },
}
</script>
