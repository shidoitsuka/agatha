<template>
  <div class="flex-none hidden min-h-screen rounded-t-lg w-72 md:block bg-base-200">
    <div class="p-5">
      <button class="w-full btn btn-outline">Upload VINs</button>
    </div>
    <div class="px-8 py-4 border-b-2 border-t-2 border-base-300">
      <h3 class="text-sm font-bold">Filters</h3>
    </div>
    <div class="px-8 py-4 space-y-3">
      <div class="pb-4 mb-2 space-y-3 text-sm border-b border-base-300">
        <div class="flex justify-between">
          <h3 class="vindb-left--category-title pt-1">Created Date</h3>
          <img src="/icons/arrow-down.svg" alt="" srcset="">
        </div>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" class="radio radio-primary">
          <span class="text-sm">All</span>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" class="radio radio-primary">
          <span class="vindb-left--categories">Last 24 Hours</span>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" checked="true" class="radio radio-primary">
          <span class="vindb-left--categories">Last 3 Days</span>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" class="radio radio-primary">
          <span class="vindb-left--categories">Last Week</span>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" class="radio radio-primary">
          <span class="vindb-left--categories">Last 3 Months</span>
        </label>
        <label class="flex space-x-3 cursor-pointer">
          <input type="radio" class="radio radio-primary">
          <span class="vindb-left--categories">Last Year</span>
        </label>
      </div>
      <div class="pb-4 mb-2 space-y-3 text-sm border-base-300">
        <div class="flex justify-between">
          <h3 class="vindb-left--category-title pt-1">File Format</h3>
          <img src="/icons/arrow-down.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
