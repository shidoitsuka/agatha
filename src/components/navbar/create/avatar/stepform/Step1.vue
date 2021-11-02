<template>
  <div class="overflow-y-scroll bg-base-200">
    <div class="p-10 space-y-6">
      <div class="text-center">
        <h3 class="text-2xl">Avatar Type</h3>
        <h5>Multi select an avatar to determine how it will be used.</h5>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="grid gap-3 p-4 text-center rounded-lg h-72 place-items-center bg-base-300 hover:border hover:border-primary">
          <img src="/icons/crawling.svg" alt="">
          <h4 class="text-base">Use for Crawling</h4>
          <p class="text-sm">
            The avatar will be used for general crawling purposes.
          </p>
          <input type="checkbox" class="checkbox checkbox-primary">
        </div>
        <div class="grid gap-3 p-4 text-center rounded-lg h-72 place-items-center bg-base-300 hover:border hover:border-primary">
          <img src="/icons/target.svg" alt="">
          <h4 class="text-base">Use for Target Crawling</h4>
          <p class="text-sm">
            The avatar will be assigned to a target for crawling.
          </p>
          <input type="checkbox" class="checkbox checkbox-primary">
        </div>
        <div class="grid gap-3 p-4 text-center rounded-lg h-72 place-items-center bg-base-300 hover:border hover:border-primary">
          <img src="/icons/cyber.svg" alt="">
          <h4 class="text-base">Use for Cyber Attack</h4>
          <p class="text-sm">
            The avatar will be used for social influence campaigns.
          </p>
          <input type="checkbox" class="checkbox checkbox-primary">
        </div>
      </div>
    </div>
  </div>
</template>
