<template>
  <div class="flex p-5 mt-5 space-x-4">
    <div class="flex-none p-5 rounded-lg w-80 bg-base-200">
      <div class="grid gap-2 pb-4 border-b place-items-center border-base-300">
        <img src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        <h3>Abdiel Hatfield</h3>
        <div class="flex"><img class="mr-2" src="/country/ukr.svg" alt=""> Ukraine</div>
      </div>
      <div class="flex items-center justify-center mt-4 space-x-2">
        <button class="btn bg-base-300 btn-sm btn-btn"><img src="/icons/return.svg" alt=""></button>
        <button class="btn bg-base-300 btn-sm btn-btn"><img src="/icons/merge.svg" alt=""></button>
        <button class="btn bg-base-300 btn-sm btn-btn"><img src="/icons/report-1.svg" alt=""></button>
        <button class="btn bg-base-300 btn-sm btn-btn"><img src="/icons/export.svg" alt=""></button>
        <button class="bg-red-800 btn btn-sm btn-btn"><img src="/icons/x.svg" alt=""></button>
      </div>
    </div>
    <div class="w-full p-5 space-y-4 rounded-lg bg-base-200">
      <div class="border-2 rounded-lg border-base-300">
        <div class="p-3 rounded-t-lg bg-base-300">
          Seed Details
        </div>
        <div class="p-3">
          <h5 class="text-agatha-400">Profile Created on <span class="ml-5 text-white">2021-05-31</span> </h5>
          <div class="flex items-center text-agatha-400">
            Profile seed data was
            <div class="ml-4 space-x-3 text-white">
              <div class="inline-flex items-center"><img src="/social-media/facebook.svg" class="object-cover w-5 h-5 mr-2" alt="">Facebook</div>
              <div class="inline-flex items-center"><img src="/social-media/youtube.svg" class="object-cover w-5 h-5 mr-2" alt="">Youtube</div>
              <div class="inline-flex items-center"><img src="/social-media/twitter.svg" class="object-cover w-5 h-5 mr-2" alt="">Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-2 rounded-lg border-base-300">
        <div class="p-3 rounded-t-lg bg-base-300">
          Personal Details
        </div>
        <div>
          <table class="table w-full text-agatha-400 table-sm table-compact">
            <thead>
              <tr>
                <th>Type</th>
                <th>Last Update</th>
                <th>Date Added </th>
                <th>By</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="6">Name</td>
              </tr>
              <tr>
                <td>Abdie Hatfield</td>
                <td>3 months ago</td>
                <td>2021-023</td>
                <td>Lighting</td>
                <td><button class="btn btn-xs btn-primary">Set as default</button></td>
                <td><button><img src="/icons/x.svg" alt=""></button></td>
              </tr>
              <tr>
                <td colspan="6">Nicknames</td>
              </tr>
              <tr>
                <td>Abdie Hatfield</td>
                <td>3 months ago</td>
                <td>2021-023</td>
                <td>Lighting</td>
                <td><button class="btn btn-xs btn-primary">Set as default</button></td>
                <td><button><img src="/icons/x.svg" alt=""></button></td>
              </tr>
              <tr>
                <td colspan="6">Usernames</td>
              </tr>
              <tr>
                <td>Abdie Hatfield</td>
                <td>3 months ago</td>
                <td>2021-023</td>
                <td>Lighting</td>
                <td><button class="btn btn-xs btn-primary">Set as default</button></td>
                <td><button><img src="/icons/x.svg" alt=""></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
