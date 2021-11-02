<template>
  <div class="px-10 py-4 space-y-4 overflow-y-scroll bg-base-200 ">
    <h5>Define Keywords</h5>
    <div class="relative flex items-center justify-between p-3 border rounded-lg border-primary">
      <div class="absolute inset-0 z-0 bg-primary opacity-10"></div>
      <div class="z-50 flex">
        OR
        <input type="checkbox" checked="checked" class="z-50 ml-3 toggle toggle-primary">
      </div>
      <div class="z-50 space-x-2">
        <button class="btn btn-primary btn-sm">
          <img src="/icons/tags.svg" alt="">
        </button>
        <button class="btn btn-primary btn-sm">
          <img src="/icons/url.svg" alt="">
        </button>
        <button class="btn btn-primary btn-sm">
          <img src="/icons/align-alt.svg" alt="">
        </button>
        <button class="btn btn-primary btn-sm">
          <img src="/icons/magnifer.svg" alt="">
        </button>
        <button class="btn btn-primary btn-sm">
          <img src="/icons/plus.svg" alt="">
        </button>
      </div>
    </div>
    <div class="p-3 border-2 border-dashed border-base-300">
      <div class="flex-row mb-10 space-y-2">
        <div class="flex items-center space-x-2">
          <div class="flex-grow px-3 py-1 border border-agatha-100">
            "hacker attack"
          </div>
          <button>
            <img src="/icons/globe.svg" alt="">
          </button>
          <button>
            <img src="/icons/checked.svg" alt="">
          </button>
          <button>
            <img src="/icons/delete.svg" alt="">
          </button>
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex-grow px-3 py-1 border border-agatha-100">
            "hacker attack"
          </div>
          <button>
            <img src="/icons/globe.svg" alt="">
          </button>
          <button>
            <img src="/icons/checked.svg" alt="">
          </button>
          <button>
            <img src="/icons/delete.svg" alt="">
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center p-2 border rounded-lg w-72 border-base-300">
      <input type="checkbox" checked="checked" class="z-50 mr-3 toggle toggle-primary">
      Add Existing documents
    </div>
  </div>
</template>

<script></script>
