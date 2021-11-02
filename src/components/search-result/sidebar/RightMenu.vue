<template>
  <div class="flex-none hidden space-y-4 rounded-t-lg w-72 md:block bg-base-200">
    <div class="p-4 border-b-2 rounded-t-lg border-base-300" :class="bgHeader">
      <h3 class="text-sm font-bold">{{ title }}</h3>
    </div>
    <div class="px-4 pb-4 space-y-4">
      <slot name="right-menu-item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Details',
    },
    bgHeader: {
      type: String,
      default: 'bg-base-200',
    },
  },
}
</script>
