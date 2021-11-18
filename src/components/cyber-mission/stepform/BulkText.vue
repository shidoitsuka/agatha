<template>
  <div class="p-10 space-y-5">
    <div class="grid place-items-center">
      <h3 class="cyber-text">Bulk Text Generater</h3>
      <h5 class="cyber-subtext">Generate sentences based on your inputs below</h5>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Setence to Generate From</span>
        </label>
        <input type="text" class="input bg-base-300">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Number of Setence</span>
        </label>
        <div class="flex justify-between">
          <select class="w-8/12 select select-bordered bg-base-300">
            <option disabled="disabled" selected="selected">16</option>
          </select>
          <button class="capitalize btn btn-accent">Generate</button>
        </div>
      </div>
      <div class="col-span-2 form-control">
        <label class="label">
          <span class="label-text">Generated Text</span>
        </label>
        <textarea class="textarea bg-base-300" rows="5"></textarea>
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
          <option disabled="disabled" selected="selected">Comment</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Input Type</span>
        </label>
        <select class="w-full max-w-xs select select-bordered bg-base-200">
          <option disabled="disabled" selected="selected">Upload CSV</option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Campaign Name</span>
        </label>
        <input type="text" class="input input-bordered bg-base-200" value="Facebook Bulk Inlfuence">
      </div>
      <div class="col-span-2 form-control">
        <label class="label">
          <span class="label-text">Url</span>
        </label>
        <input type="text" class="input input-bordered bg-base-200" value="https://www.facebook.com/post/10159038064167863">
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
