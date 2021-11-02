<template>
  <div class="flex-none hidden space-y-4 rounded-t-lg w-72 md:block bg-base-200">
    <div class="p-4 space-y-4">
      <img class="rounded" src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <div class="flex-row space-y-3">
        <h3 class="text-gray-600">Document Sentiment <span class="inline-block px-2 ml-3 text-sm text-white bg-secondary rounded-box">0.04</span></h3>
        <h3 class="text-gray-600">Credibilty <span class="inline-block px-2 ml-3 text-sm text-white bg-secondary rounded-box">0.04</span></h3>
        <div class="flex space-x-2">
          <div class="flex items-center space-x-1 text-sm text-agatha-400">
            <img src="/icons/love.svg" alt="">
            <span>24.k</span>
          </div>
          <div class="flex items-center space-x-1 text-sm text-agatha-400">
            <img src="/icons/comment.svg" alt="">
            <span>210</span>
          </div>
          <div class="flex items-center space-x-1 text-sm text-agatha-400">
            <img src="/icons/share.svg" alt="">
            <span>83</span>
          </div>
        </div>
      </div>
      <button class="w-full border-2 border-agatha-400 btn">
        <img src="/icons/external-url.svg" alt="">
        Visit Site
      </button>
    </div>
  </div>
</template>
