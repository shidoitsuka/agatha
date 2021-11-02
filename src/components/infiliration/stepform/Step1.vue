<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200" style="min-height: 500px">
    <div class="grid gap-2 place-items-center">
      <img class="w-20 h-20" src="/icons/upload.svg" alt="">
      <button class="capitalize btn bg-base-300">
        <img class="mr-2" src="/icons/uploadcard.svg" alt="">
        Upload Card Photo
      </button>
      <p class="text-agatha-100">Recommended Ratio: 1x1</p>
    </div>
    <div class="grid grid-cols-2 gap-2 p-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Social Media</span>
        </label>
        <select class="w-full bg-base-300 select">
          <option selected="selected">
            Facebook
          </option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Url</span>
        </label>
        <div class="flex justify-between space-x-3">
          <input type="text" class="w-full input bg-base-300">
          <button class="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
