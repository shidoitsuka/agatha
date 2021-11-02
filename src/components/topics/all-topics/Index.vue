<template>
  <div class="grid grid-cols-4 gap-3 p-5 text-sm">
    <Item v-for="topic in topics" :topic="topic" :key="topic.id" />
  </div>
</template>

<script>
import topicJson from '@/data/topics.json'
import Item from './Item.vue'
export default {
  data() {
    return {
      topics: topicJson,
    }
  },
  components: {
    Item,
  },
}
</script>
