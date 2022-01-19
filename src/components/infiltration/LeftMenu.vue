<template>
  <div class="flex-none hidden min-h-screen rounded-t-lg md:block bg-base-200" style="width: 343px;">
    <div>
      <slot name="action-menu"></slot>
    </div>
    <div class="flex-row px-8 divide-y divide-base-300">
      <slot name="left-menu-item"></slot>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
