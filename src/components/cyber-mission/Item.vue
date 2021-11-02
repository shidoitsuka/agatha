<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in actions" :key="result" class="rounded-lg bg-base-200">
      <div class="mb-10">
        <div class="flex justify-between w-full p-3">
          <span :class="{'badge-success': result.status == 'SUCCESS', 'badge-warning': result.status == 'PENDING', 'badge-error': result.status == 'FAILED' }" class="text-white badge">{{ result.status }}</span>
          <Action />
        </div>
        <div class="flex-row space-y-4 text-center">
          <div class="avatar">
            <div class="-space-x-5 avatar-group">
              <div v-for="avatar in result.avatars" :key="avatar" class="avatar ">
                <div class="w-10 h-10">
                  <img :src="avatar">
                </div>
              </div>
            </div>
          </div>
          <h1>{{ result.title }}</h1>
          <div class="flex items-center justify-center">
            <div class="flex items-center pr-2 rounded-full bg-base-300">
              <img :src="result.icons" alt="" class="w-6 h-6 mr-2">
              {{ result.info }}
            </div>
          </div>
          <div class="inline-block px-3 py-1 rounded-lg bg-base-300">
            {{ result.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Action from '@/components/search-result/result/groups/Action.vue'
export default {
  props: ['actions'],
  emits: ['toggleTarget'],
  components: {
    Action,
  },
}
</script>
