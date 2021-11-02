<template>
  <div class="overflow-y-scroll bg-base-200">
    <div class="grid gap-2 px-10 py-4 place-items-center">
      <h3 class="text-2xl">Case Templates</h3>
      <h5>Create a case to collect interesting documents that needs to be monitored.</h5>
      <div class="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/empty-case.svg">
            </div>
          </div>
          Empty Case
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/dynamic-keywords.svg">
            </div>
          </div>
          Dynamic Keywords
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/facebook-post.svg">
            </div>
          </div>
          Facebook Post
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/facebook-event.svg">
            </div>
          </div>
          Facebook Event
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/news-url.svg">
            </div>
          </div>
          News Url
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="w-20 h-20 rounded-full">
              <img src="/icons/instagram-post.svg">
            </div>
          </div>
          Instagram Post
        </div>
      </div>
    </div>
  </div>
</template>
