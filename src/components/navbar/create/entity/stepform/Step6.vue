<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200 h-96">
    <h3>Select Location</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Location Name</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Location Address</span>
        </label>
        <select class="w-full select bg-base-300">
          <option disabled="disabled" selected="selected"> -- Select -- </option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </select>
      </div>
      <div class="col-span-2">
        <div class="h-64 bg-base-300 ">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
