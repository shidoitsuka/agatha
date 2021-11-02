<template>
  <div class="px-7 py-4 overflow-y-scroll pt-10 bg-base-200">
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
          <span class="label-text">Web Account</span>
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
          <span class="label-text">Profile Url</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" class="input bg-base-300">
      </div>
    </div>
  </div>
</template>
<script>
</script>
