<template>
  <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 ">
    <div v-for="result in actions" :key="result" class="rounded-lg bg-base-200">
      <div>
        <div class="flex justify-between w-full p-3">
          <div class="image mr-3">
            <img :src="result.icons" style="border: 20px solid #292932; border-radius: 50%; width: 5rem;" alt="" srcset="">
          </div>
          <div class="content w-full" style="justify-content: flex-start">
            <h1 class="cyber-mission--title">{{ result.title }}</h1>
            <p class="cyber-mission--description mt-2">{{ result.info }}</p>
            <span class="text-white badge cyber-mission--status mt-2" :class="{'badge-success': result.status == 'SUCCESS', 'badge-warning': result.status == 'PENDING', 'badge-error': result.status == 'FAILED' }">{{ result.status }}</span>
          </div>
          <div class="action">
            <Action />
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
