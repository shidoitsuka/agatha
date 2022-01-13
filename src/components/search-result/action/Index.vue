<template>
  <div class="flex-row items-center justify-between md:flex">
    <div class="flex space-x-2">
      <select class="select bg-base-200">
        <option disabled="disabled" selected="selected">Sort By</option>
        <option>Time</option>
      </select>
      <button v-show="timeline" @click="$emit('toggleTimeline')" class="capitalize btn">Show Timeline</button>
      <slot name="left-action"></slot>
    </div>
    <div class="flex items-center space-x-3">
      <small v-show="showRecord" class="text-sm"><SearchBar /></small>
      <slot name="right-action"></slot>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  components: {
    SearchBar,
  },
  props: {
    timeline: Boolean,
    showRecord: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
