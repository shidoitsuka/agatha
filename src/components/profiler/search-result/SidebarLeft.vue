<template>
  <div class="flex-none hidden min-h-screen rounded-t-lg w-72 md:block bg-base-200">
    <div class="px-8 py-4 border-b-2 border-base-300">
      <h3 class="text-sm font-bold">Filters</h3>
    </div>
    <div class="px-8 py-4 space-y-3">
      <div class="p-1 border card border-base-300">
        <div class="form-control">
          <label class="cursor-pointer label">
            <input type="checkbox" checked="true" class="toggle toggle-primary">
            <span class="label-text">Combine "And"</span>
          </label>
        </div>
      </div>
      <div class="pb-4 mb-2 space-y-3 border-b border-base-300">
        <h3 class="text-agatha-400">Input Info</h3>
        <div class="text-sm">
          <h3 class=" text-agatha-400">Phone:</h3>
          <p>(555) 529-3521</p>
        </div>
        <div class="text-sm">
          <h3 class="text-agatha-400">Country:</h3>
          <p>Singapore</p>
        </div>
        <div class="text-sm">
          <h3 class="text-agatha-400">Country Code:</h3>
          <p>+65</p>
        </div>
        <div class="text-sm">
          <h3 class="text-agatha-400">Local Phone:</h3>
          <p>+65 519-3521</p>
        </div>
      </div>
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
          <div class="px-2 bg-secondary rounded-box">2</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Twitter</span>
          <div class="px-2 bg-secondary rounded-box">3</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" checked="true" class="checkbox checkbox-primary">
          <span class="label-text">Facebook</span>
          <div class="px-2 bg-secondary rounded-box">5</div>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary">
          <span class="label-text">Whatsapp</span>
          <div class="px-2 bg-secondary rounded-box">3</div>
        </label>
      </div>
    </div>
  </div>
</template>
