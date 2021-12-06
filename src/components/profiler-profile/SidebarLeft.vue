<template>
  <div
    class="flex-none hidden min-h-screen rounded-t-lg px-8 w-72 md:block bg-base-200"
  >
    <div class="py-4 border-b border-base-300">
      <div
        class="divide-y divide-gray-600 md:grid-cols-3 md:divide-x md:divide-y-0 divide-solid"
      >
        <div class="flex items-center py-3 space-x-3">
          <div class="avatar">
            <div class="rounded-full w-14 h-14">
              <img
                src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
              />
            </div>
          </div>
          <div>
            <div style="width: 260px">
              <h3 class="text-sm">David Snowden</h3>
            </div>
            <p class="text-sm text-agatha-400">United States</p>
            <p class="text-xs text-agatha-400">Username</p>
          </div>
        </div>
        <div class="mb-3">
          <button class="px-3 py-2 text-sm bg-base-300 rounded-btn mr-2">
            Infiltrate
          </button>
          <button class="px-3 py-2 text-sm bg-base-300 rounded-btn">
            Generate Report
          </button>
        </div>
      </div>
    </div>
    <div class="py-4 space-y-3">
      <div class="pb-4 mb-2 space-y-3 text-sm border-b border-base-300">
        <div>
          <div class="profiler-profile--text-description-title">
            Description
          </div>
          <div class="profiler-profile--text-description mt-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi
          </div>
        </div>
        <div>
          <div class="profiler-profile--text-description-title mt-5">Tags</div>
          <div class="profiler-profile--text-description mt-3">
            <div class="inline-block px-2 text-sm rounded-box bg-base-300">
              Covid
            </div>
            <div class="inline-block px-2 text-sm rounded-box bg-base-300">
              Summber
            </div>
            <div class="inline-block px-2 text-sm rounded-box bg-base-300">
              College
            </div>
            <div class="inline-block px-2 text-sm rounded-box bg-base-300">
              College
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
