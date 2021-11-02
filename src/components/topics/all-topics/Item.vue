<template>
  <div class="rounded-lg bg-base-200">
    <div class="p-5 space-y-4">
      <h3 class="text-center">{{ topic.title }}</h3>
      <div class="grid grid-cols-2 gap-3">
        <div class="grid p-3 rounded-lg place-items-center bg-base-300">
          <h5 class="text-lg">{{ topic.score }}</h5>
          <p class="text-agatha-100">Score</p>
        </div>
        <div class="grid p-3 rounded-lg place-items-center bg-base-300">
          <h5 class="text-lg">{{ topic.profile }}</h5>
          <p class="text-agatha-100">Profile</p>
        </div>
      </div>
      <div class="grid grid-cols-3 divide-x divide-base-300">
        <div class="grid place-items-center">
          <h3>{{ topic.post }}</h3>
          <p class="text-xs text-agatha-100">Post 7 days</p>
        </div>
        <div class="grid place-items-center">
          <div class="flex">
            {{ topic.change }}
            <img v-show="topic.change_status == 'up' " src="/icons/up.svg" alt="">
            <img v-show="topic.change_status == 'down' " src="/icons/down.svg" alt="">
          </div>
          <p class="text-xs text-agatha-100">Change 7 days</p>
        </div>
        <div class="grid place-items-center">
          <h3>7 Minutes</h3>
          <p class="text-xs text-agatha-100">Last activity</p>
        </div>
      </div>
      <div class="grid grid-cols-3 place-items-center">
        <div class="badge badge-success">Software</div>
        <div class="badge badge-success">Coronoa</div>
        <div class="badge badge-success">Education</div>
      </div>
    </div>
    <ChartItem />
  </div>
</template>

<script>
import ChartItem from './Chartitem.vue'
export default {
  props: ['topic'],
  components: {
    ChartItem,
  },
}
</script>
