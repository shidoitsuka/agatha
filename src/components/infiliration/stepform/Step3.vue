<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200" style="min-height: 690px">
    <div class="flex items-center justify-between">
      <div class="p-3 border-2 rounded-lg form-control border-base-300">
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" checked="checked" class="mr-3 toggle toggle-primary">
          <span>Shows Group</span>
        </label>
      </div>
      <div class="flex items-center pl-3 rounded-lg bg-base-300">
        <img class="object-cover w-8 h-8" src="/icons/search.svg" alt="">
        <input type="text" class="bg-base-300 input focus:ring-0" placeholder="Search Avatar">
        <button class="rounded-none hover:bg-agatha-100 bg-agatha-100 btn">Search</button>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 py-2 mt-3 md:grid-cols-3">
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <div class="avatar indicator">
            <div class="indicator-item indicator-bottom indicator-center badge badge-primary">8</div>
            <div class="w-24 h-24 rounded-full ">
              <img src="/icons/groups-2.svg">
            </div>
          </div>
          <h3>David Snowden</h3>
        </div>
      </div>
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <img class="object-cover w-24 h-24 rounded-full" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <h3>David Snowden</h3>
        </div>
      </div>
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <img class="object-cover w-24 h-24 rounded-full" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <h3>David Snowden</h3>
        </div>
      </div>
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <img class="object-cover w-24 h-24 rounded-full" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <h3>David Snowden</h3>
        </div>
      </div>
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <img class="object-cover w-24 h-24 rounded-full" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <h3>David Snowden</h3>
        </div>
      </div>
      <div class="flex-row p-3 rounded-lg bg-base-300">
        <input type="checkbox" class="checkbox checkbox-accent">
        <div class="grid gap-3 mb-6 place-items-center">
          <img class="object-cover w-24 h-24 rounded-full" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
          <h3>David Snowden</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
