<template>
  <div class="justify-between p-1 shadow-lg md:px-4 md:py-3 bg-base-200 navbar">
    <div class="flex-1 block sm:hidden">
      <HamburgerMenu />
    </div>
    <div class="flex-1 hidden max-w-lg px-2 mx-2 space-x-4 lg:flex">
      <img src="@/assets/logo.png" alt="agatha">
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
