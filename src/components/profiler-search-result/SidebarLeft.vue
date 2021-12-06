<template>
  <div class="flex-none hidden min-h-screen rounded-t-lg w-72 md:block bg-base-200">
    <div class="px-8 py-4 border-b-2 border-base-300">
      <h3 class="text-sm font-bold">Filters</h3>
    </div>
    <div class="px-8 py-4 space-y-3">
      <div class="pb-4 mb-2 space-y-3 text-sm border-b border-base-300">
        <h3>Data</h3>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" checked="true" class="checkbox checkbox-primary">
          <span class="text-sm">Has Mobile</span>
          <div class="px-2 bg-base-300 rounded-box">3</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Has Email</span>
          <div class="px-2 bg-base-300 rounded-box">0</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" checked="true" class="checkbox checkbox-primary">
          <span class="label-text">Has Usernames</span>
          <div class="px-2 bg-base-300 rounded-box">1</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Has Location</span>
          <div class="px-2 bg-base-300 rounded-box">20</div>
        </label>
      </div>
      <div class="pb-4 mb-2 space-y-3 text-sm border-b border-base-300">
        <h3>Social Media</h3>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Database</span>
          <div class="px-2 bg-base-300 rounded-box">2</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Twitter</span>
          <div class="px-2 bg-base-300 rounded-box">3</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" checked="true" class="checkbox checkbox-primary">
          <span class="label-text">Facebook</span>
          <div class="px-2 bg-base-300 rounded-box">5</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Whatsapp</span>
          <div class="px-2 bg-base-300 rounded-box">3</div>
        </label>
      </div>
      <div class="pb-4 mb-2 space-y-3 text-sm border-b border-base-300">
        <h3>Locations</h3>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Singapore</span>
          <div class="px-2 rounded-box">2</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Twitter</span>
          <div class="px-2 rounded-box">3</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" checked="true" class="checkbox checkbox-primary">
          <span class="label-text">Facebook</span>
          <div class="px-2 rounded-box">5</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Whatsapp</span>
          <div class="px-2 rounded-box">3</div>
        </label>
      </div>
    </div>
  </div>
</template>
