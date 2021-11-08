<template>
  <div class="justify-between p-1 shadow-lg md:px-4 md:py-3 bg-base-200 navbar">
    <div class="flex-1 block sm:hidden">
      <HamburgerMenu />
    </div>
    <div class="flex-1 hidden max-w-lg px-2 mx-2 space-x-4 lg:flex">
      <img src="@/assets/logo.png" alt="agatha">
      <button class="btn btn-square btn-ghost bg-base-300">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
      <SearchBar />
    </div>
    <div class="flex-none divide-x-2 divide-base-300">
      <div class="px-2 space-x-3">
        <ButtonUpload />
        <ButtonNotification />
        <ButtonCreate />
      </div>
      <div class="px-2">
        <Profile />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import ButtonUpload from './ButtonUpload.vue'
import ButtonNotification from './ButtonNotification.vue'
import ButtonCreate from './ButtonCreate.vue'
import Profile from './Profile.vue'
import HamburgerMenu from './HamburgerMenu.vue'

export default {
  components: {
    SearchBar,
    ButtonUpload,
    ButtonNotification,
    ButtonCreate,
    HamburgerMenu,
    Profile,
  },
}
</script>
