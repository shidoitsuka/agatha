<template>
  <div class="rounded-t-lg md:block bg-base-200" style="width: 343px; height: 799px; display: flex; flex-direction: column; justify-content: space-between;">
    <div class="bg-base-300 rounded-lg font-bold px-5 py-3">
      <slot name="action-menu"></slot>
    </div>
    <div class="px-8 mb-auto divide-y divide-base-300">
      <slot name="right-menu-item"></slot>
    </div>
    <div class="bg-base-300 px-7 py-3">
      <slot name="bottom-menu-item"></slot>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
