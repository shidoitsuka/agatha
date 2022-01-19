<template>
  <div class="px-10 py-4 overflow-y-scroll bg-base-200" style="min-height: 690px">
    <div class="grid grid-cols-1 gap-2 p-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Notes</span>
        </label>
        <textarea class="textarea bg-base-300" rows="5"></textarea>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Tags</span>
        </label>
        <div class="h-32 p-1 border-2 rounded-lg border-base-300">
          <div class="m-1 badge badge-success">Eric Bachman</div>
          <div class="m-1 badge badge-success">Eric Snowden</div>
        </div>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Disturbion List</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
    </div>
  </div>
</template>
<script>
</script>
