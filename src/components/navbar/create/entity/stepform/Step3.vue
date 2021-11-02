<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200 h-full">
    <div class="grid gap-2 pb-5 border-b place-items-center border-base-300">
      <img class="object-cover w-20 h-20 rounded-full" src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <div class="items-center space-x-3">
        <button class="capitalize btn bg-base-300">
          <img class="w-3 h-3 mr-2" src="/icons/uploadcard.svg" alt="">
          Upload Card Photo
        </button>
        <button class="text-white capitalize btn btn-error">
          <img class="w-3 h-3 mr-2" src="/icons/delete-alt1.svg" alt="">
          Delete
        </button>
      </div>
      <p class="text-agatha-100">Recommended Ratio: 1x1</p>
    </div>
    <div class="flex items-center py-4 space-x-3">
      <div class="form-control w-52">
        <label class="label">
          <span class="label-text">Social Media</span>
        </label>
        <select class="w-full max-w-2xl select bg-base-300">
          <option>Select</option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </select>
      </div>
      <div class="w-full form-control">
        <label class="label">
          <span class="label-text">Url</span>
        </label>
        <div class="items-center space-x-3">
          <input type="text" class="w-10/12 input bg-base-300">
          <button class="btn btn-primary">add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
