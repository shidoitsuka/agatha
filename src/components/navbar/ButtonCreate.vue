<template>
  <div class="dropdown dropdown-end">
    <button @click="isOpened = !isOpened" tabindex="0">
      <img src="/icons/add-active.svg" alt="">
      <!-- <img :src="isOpened ? '/icons/close-active.svg' : '/icons/add-active.svg'" alt=""> -->
    </button>
    <ul tabindex="0" class="space-y-0 divide-y-2 rounded-lg shadow w-359 menu dropdown-content bg-base-300 divide-agatha-100 divide-opacity-25">
      <div class="p-2 md:p-4 bg-primary ">
        <h1 class="text-sm font-semibold md:text-lg">Create</h1>
      </div>
      <li>
        <a as="button" @click="setIsOpenEntity(true)" class="flex space-x-4">
          <img class="w-8 h-8 md:w-10 md:h-10" src="/icons/entity.svg" alt="">
          <div>
            <h3 class="text-sm md:text-base">Entity & Target</h3>
            <p class="text-gray-400 text-2xs md:text-sm">Collect metadata about an entity such as person, location, or an organization.</p>
          </div>
        </a>
      </li>
      <li>
        <a as="button" @click="setIsOpenAvatar(true)" class="flex space-x-4">
          <img class="w-8 h-8 md:w-10 md:h-10" src="/icons/avatar.svg" alt="">
          <div>
            <h3 class="text-sm md:text-base">Avatar</h3>
            <p class="text-gray-400 text-2xs md:text-sm">Observe or communicate with private social media accounts.</p>
          </div>
        </a>
      </li>
      <li>
        <a as="button" @click="setIsOpenCase(true)" class="flex space-x-4">
          <img class="w-8 h-8 md:w-10 md:h-10" src="/icons/case-1.svg" alt="">
          <div>
            <h3 class="text-sm md:text-base">Case</h3>
            <p class="text-gray-400 text-2xs md:text-sm">Collect documents mentioned significantly in social or other media.</p>
          </div>
        </a>
      </li>
      <li>
        <a as="button" class="flex space-x-4">
          <img class="w-8 h-8 md:w-10 md:h-10" src="/icons/infiltration.svg" alt="">
          <div>
            <h3 class="text-sm md:text-base">Infiltration</h3>
            <p class="text-gray-400 text-2xs md:text-sm">Infiltrate social media groups or profile targets..</p>
          </div>
        </a>
      </li>
      <li>
        <a as="button" class="flex space-x-4">
          <img class="w-8 h-8 md:w-10 md:h-10" src="/icons/cyber-mission.svg" alt="">
          <div>
            <h3 class="text-sm md:text-base">Cyber Mission</h3>
            <p class="text-gray-400 text-2xs md:text-sm">Automate interactions that are of interest to you..</p>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <DialogCase :is-open="isOpenCase" :set-is-open="setIsOpenCase" />
  <DialogAvatar :is-open="isOpenAvatar" :set-is-open="setIsOpenAvatar" />
  <DialogEntity :is-open="isOpenEnitity" :set-is-open="setIsOpenEntity" />
</template>

<script>
import { ref } from 'vue'
import DialogCase from './create/case/Dialog.vue'
import DialogAvatar from './create/avatar/Dialog.vue'
import DialogEntity from './create/entity/Dialog.vue'

export default {
  setup() {
    const isOpenCase = ref(false)
    const isOpenAvatar = ref(false)
    const isOpenEnitity = ref(false)

    return {
      isOpenCase,
      isOpenAvatar,
      isOpenEnitity,
      setIsOpenCase(value) {
        isOpenCase.value = value
      },
      setIsOpenAvatar(value) {
        isOpenAvatar.value = value
      },
      setIsOpenEntity(value) {
        isOpenEnitity.value = value
      },
    }
  },

  components: {
    DialogCase,
    DialogAvatar,
    DialogEntity,
  },

  data() {
    return {
      isOpened: false,
    }
  },
}
</script>
