<template>
  <div class="p-10 space-y-5">
    <div class="grid place-items-center">
      <h3 class="text-xl">Bulk Influence</h3>
      <h5>Upload pre-set social media comments posts</h5>
    </div>
    <div class="grid p-10 border-2 border-dashed place-items-center border-base-300">
      <div class="text-center">
        <h1 class="text-lg">Drag & Drop</h1>
        <p class="text-agatha-100">your CSV file here or <span class="text-info">browse</span></p>
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
