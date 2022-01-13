<template>
  <div class="w-full shadow-lg form-control">
    <div class="relative flex items-center bg-base-300 space-x-2 rounded-lg bg-base-200">
      <label for="search-bar" class="pl-5">
        <img src="/icons/magnifer.svg" alt="" srcset="">
      </label>
      <input
        type="text"
        placeholder="Search..."
        class="w-full rounded-l-none input focus:ring-0 bg-base-300"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: false,
    }
  },
}
</script>
