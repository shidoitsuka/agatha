<template>
  <div class="max-w-lg mx-auto mt-5 mb-5 rounded bg-base-200">
    <div class="px-4 py-3 bg-primary ">
        <h1>List Screen</h1>
    </div>
    <div class="flex flex-col">
      <div v-for="route in routes" :key="route.name">
        <router-link :to="route.path" class="block px-4 py-2 text-base-500 hover:bg-base-300 hover:text-base-500">
          {{ route.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '@/router/index.js'
export default {
  data() {
    return {
      routes,
    }
  },
}
</script>
