<template>
  <div class="overflow-y-scroll bg-base-200">
    <div class="grid gap-2 px-10 py-4 place-items-center">
      <h3 class="text-2xl font-semibold softgrey-text">Case Templates</h3>
      <h5 class="softgrey-text">Create a case to collect interesting documents that needs to be monitored.</h5>
      <div class="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/empty-case.svg">
            </div>
          </div>
          <span class="case-title">Empty Case</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/dynamic-keywords.svg">
            </div>
          </div>
          <span class="case-title">Dynamic Keywords</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/facebook-post.svg">
            </div>
          </div>
          <span class="case-title">Facebook Post</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/facebook-event.svg">
            </div>
          </div>
          <span class="case-title">Facebook Event</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/news-url.svg">
            </div>
          </div>
          <span class="case-title">News Url</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="case-img rounded-full">
              <img src="/icons/instagram-post.svg">
            </div>
          </div>
          <span class="case-title">Instagram Post</span>
        </div>
      </div>
    </div>
  </div>
</template>
