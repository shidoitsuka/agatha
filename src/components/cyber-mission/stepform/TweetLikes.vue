<template>
  <div class="p-10 space-y-5">
    <div class="grid place-items-center">
      <h3 class="text-xl">Social Media Campaign</h3>
      <h5>automationg retweet and lkes using avatars</h5>
    </div>
    <div class="p-5 space-y-3 bg-base-300 rounded-xl">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center flex-auto px-2 bg-base-200 rounded-xl">
          <img class="w-8 h-8" src="/icons/search.svg" alt="">
          <input type="text" class="w-full input focus:ring-0 bg-base-200" placeholder="Search or select avatars to use">
        </div>
        <button class="border-0 btn bg-agatha-100 hover:bg-agatha-100">Select Avatars</button>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div v-for="result in results" :key="result" class="inline-flex items-center p-1 space-x-2 text-sm rounded-full bg-agatha-100">
          <img class="object-cover w-8 h-8 rounded-full" :src="result.avatar" alt="">
          <h5>{{ result.name }}</h5>
          <button class="flex-none"><img src="/icons/close.svg" alt=""></button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Social Media</span>
        </label>
        <select class="w-full max-w-xs select select-bordered bg-base-200">
          <option disabled="disabled" selected="selected">Facebook</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Action</span>
        </label>
        <select class="w-full max-w-xs select select-bordered bg-base-200">
          <option disabled="disabled" selected="selected">Angry</option>
        </select>
      </div>
      <div class="col-span-2 form-control">
        <label class="label">
          <span class="label-text">Url</span>
        </label>
        <input type="text" class="input bg-base-200 input-bordered" value="https://www.facebook.com/post/10159038064167863">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          id: 1,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 2,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 3,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 4,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 5,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 6,
          name: 'Davide Snowden',
          avatar:
            'https://images.pexels.com/photos/9801242/pexels-photo-9801242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
      ],
    }
  },
}
</script>
