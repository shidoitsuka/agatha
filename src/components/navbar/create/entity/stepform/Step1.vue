<template>
  <div class="overflow-y-scroll bg-base-200 h-96">
    <div class="grid gap-2 px-10 py-4 place-items-center">
      <h3 class="text-2xl pt-7 font-semibold softgrey-text">Case Templates</h3>
      <h5 class="softgrey-text">Create a case to collect interesting documents that needs to be monitored.</h5>
      <div class="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
        <div class="grid w-40 gap-4 p-10 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="entity-img rounded-full">
              <img src="/icons/person-alt1.svg">
            </div>
          </div>
          <span class="entity-title">Person</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="entity-img rounded-full">
              <img src="/icons/fb.svg">
            </div>
          </div>
          <span class="entity-title">Facebook Page</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="entity-img rounded-full">
              <img src="/icons/location-alt1.svg">
            </div>
          </div>
          <span class="entity-title">Location</span>
        </div>
        <div class="grid w-40 gap-4 p-5 text-center rounded-lg cursor-pointer bg-base-300 place-items-center hover:bg-success">
          <div class="avatar">
            <div class="entity-img rounded-full">
              <img src="/icons/organization-alt.svg">
            </div>
          </div>
          <span class="entity-title">Organization</span>
        </div>
      </div>
    </div>
  </div>
</template>
