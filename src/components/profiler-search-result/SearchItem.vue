<template>
    <div
      class="relative rounded-lg bg-base-300"
      style="width: 364px; border: 1px solid red !important;"
    >
      <button
        v-show="isPossible"
        class="absolute right-0 rounded-t-none rounded-r btn btn-primary btn-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <div class="p-3 space-y-3">
        <div
          class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
        >
          <div class="flex items-center py-3 space-x-3">
            <div class="avatar">
              <div class="rounded-full w-14 h-14">
                <img :src="item.avatar" />
              </div>
            </div>
            <div>
              <h3 class="text-sm">{{ item.name }}</h3>
              <p class="text-sm text-agatha-400">{{ item.username }}</p>
              <p class="text-xs text-agatha-400">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div class="flex items-baseline justify-between">
          <div class="grid grid-cols-3 gap-1 ">
            <div
              v-for="phone in item.phones"
              :key="phone"
              class="inline-block px-2 py-2 text-xs text-center rounded-box text-agatha-400 bg-agatha-100"
            >
              {{ phone }}
            </div>
          </div>
          <button class="flex-none text-error">
            <img src="/icons/trash.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isPossible: {
      type: Boolean,
    },
  },
}
</script>
