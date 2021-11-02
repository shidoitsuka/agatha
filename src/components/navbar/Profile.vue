<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" class="cursor-pointer avatar">
      <div class="w-8 h-8 rounded-full md:w-10 md:h-10">
        <img v-bind:src="user.avatar">
      </div>
    </div>
    <ul tabindex="0" class="mt-3 rounded-lg shadow sm:w-56 md:w-96 menu dropdown-content bg-base-300">
      <div class="flex p-4 border-b-2 cursor-pointer border-agatha-100">
        <div class="avatar">
          <div class="rounded-full w-14 h-14">
            <img v-bind:src="user.avatar">
          </div>
        </div>
        <div class="ml-3">
          <h3 class="text-sm md:text-base">{{ user.fullName }}</h3>
          <p class="text-agatha-200 text-2xs md:text-sm">{{ user.email }}</p>
        </div>
      </div>
      <li>
        <a href="#" class="flex space-x-3 ">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/clear-proxy.svg" alt="">
          <h3 class="text-sm md:text-base">Clear Proxy Settings</h3>
        </a>
      </li>
      <li>
        <a href="#" class="flex space-x-3">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/download-extension.svg" alt="">
          <h3 class="text-sm md:text-base">Download Extensions</h3>
        </a>
      </li>
      <li>
        <a href="#" class="flex space-x-3">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/sync-account.svg" alt="">
          <h3 class="text-sm md:text-base">Sync Account Extractions</h3>
        </a>
      </li>
      <li>
        <a href="#" class="flex space-x-3">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/connection-test.svg" alt="">
          <h3 class="text-sm md:text-base">Connection Test</h3>
        </a>
      </li>
      <li>
        <a href="#" class="flex space-x-3">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/settings.svg" alt="">
          <h3 class="text-sm md:text-base">Settings</h3>
        </a>
      </li>
      <li>
        <a href="#" class="flex space-x-3">
          <img class="w-6 h-6 md:w-10 md:h-10" src="/icons/logout.svg" alt="">
          <h3 class="text-sm md:text-base">Log Out</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullName: 'Anthony Bednar',
        email: 'anthony.bednar@gmail.com',
        avatar: '/profile/profile.png',
      },
    }
  },
}
</script>
