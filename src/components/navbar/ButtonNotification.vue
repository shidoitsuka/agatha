<template>
  <div class="dropdown dropdown-end">
    <button tabindex="0">
      <img src="/icons/notification.svg" alt="">
    </button>
    <ul tabindex="0" class="space-y-0 divide-y-2 rounded-lg shadow w-292 menu dropdown-content bg-base-300 divide-agatha-100 divide-opacity-25">
      <div class="flex items-center justify-between p-2 text-sm md:text-base md:p-4 bg-agatha-100">
        Notifications
        <span class="text-xs md:text-sm">212 News</span>
      </div>
      <li v-for="notif in notifications" :key="notif.id">
        <a class="flex items-center justify-between text-xs md:text-sm" href="#">
          {{ notif.name }}
          <span class="px-2 bg-error rounded-box">{{ notif.count }}</span>
        </a>
      </li>
      <li>
        <a href="" class="mx-auto text-xs md:text-sm">
          View all notification
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notif: 212,
      notifications: [
        { id: 1, name: 'Profiler', count: 15 },
        { id: 2, name: 'Keyword Alerts', count: 5 },
        { id: 3, name: 'Reports', count: 31 },
        { id: 4, name: 'Others', count: 4 },
      ],
    }
  },
}
</script>
