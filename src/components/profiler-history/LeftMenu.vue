<template>
  <div class="flex-none hidden min-h-screen rounded-t-lg w-72 md:block bg-base-200">
    <div>
      <slot name="action-menu"></slot>
    </div>
    <div class="flex items-center px-8 py-4 border-b-2 border-base-300">
      <img class="object-cover w-5 h-5 mr-2" v-show="icon" :src="icon" alt="">
      <h3 class="text-sm font-bold">{{ title }}</h3>
    </div>
    <div class="flex-row px-8 divide-y divide-base-300">
      <slot name="left-menu-item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Filter',
    },
    icon: {
      type: String,
    },
  },
}
</script>
