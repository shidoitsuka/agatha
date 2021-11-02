<template>
  <div class="flex px-32 py-5 space-x-5 text-sm">
    <div class="grid gap-4 px-6 py-5 rounded-lg h-96 bg-base-200 w-96 place-items-center">
      <div class="avatar indicator">
        <div class="w-full text-xs border-transparent indicator-item indicator-bottom indicator-center badge bg-info">
          <h3>dynamic keywords</h3>
        </div>
        <div class="w-32 h-32 rounded-full">
          <img src="https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        </div>
      </div>
      <div class="text-center">
        <h3 class="text-lg">This is my Facebook Event case title</h3>
        <p class="text-sm text-agatha-400">Midst fourth whose greater appear female dominion you'll were is fourth. sea for god had his multiply moved waters you beast subdue.</p>
      </div>
      <button class="w-full btn bg-base-300">Edit Case</button>
    </div>
    <div class="flex-auto px-6 py-5 space-y-5 rounded-lg bg-base-200">
      <div class="grid grid-cols-3 gap-4">
        <div class="p-3 space-y-2 rounded-lg bg-base-300">
          <h5 class="text-center text-agatha-200">Created Date</h5>
          <div class="flex justify-center text-sm text-center divide-x divide-agatha-100">
            <h3 class="p-1">2021-05-31</h3>
            <h3 class="p-1">5:30 am</h3>
          </div>
        </div>
        <div class="p-3 space-y-2 rounded-lg bg-base-300">
          <h5 class="text-center text-agatha-200">Start Date</h5>
          <div class="flex justify-center text-sm divide-x divide-agatha-100">
            <h3 class="p-1">2021-05-31</h3>
            <h3 class="p-1">5:30 am</h3>
          </div>
        </div>
        <div class="p-3 space-y-2 rounded-lg bg-base-300">
          <h5 class="text-center text-agatha-200">End Date</h5>
          <div class="flex justify-center text-sm divide-x divide-agatha-100">
            <h3 class="p-1">2021-05-31</h3>
            <h3 class="p-1">5:30 am</h3>
          </div>
        </div>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Case Title</h3>
        <h3>This is my faceboook event case title</h3>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Description</h3>
        <h3>Midst fourth whose greater appear female dominion you'll were is fourth. sea for god had his multiply moved waters you beast subdue.</h3>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Crawling Sources</h3>
        <div class="grid grid-cols-4 gap-3">
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/facebook.svg" alt=""> Facebook</span>
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/twitter.svg" alt=""> twitter</span>
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/youtube.svg" alt=""> youtube</span>
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/google.svg" alt=""> google</span>
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/yahoo.svg" alt=""> yahoo</span>
          <span class="flex items-center px-3 py-2 rounded-box bg-base-300"> <img class="w-5 h-5 mr-2" src="/social-media/linkedin.svg" alt=""> linkedin</span>
        </div>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Keywords</h3>
        <div class="flex-row space-y-2">
          <div class="inline-block gap-2 p-1 space-x-1 text-sm border-2 border-dashed border-primary rounded-box">
            <div class="inline-block p-1 bg-base-300 rounded-box">"Criminal Attack"</div>
            <div class="inline-block p-1 bg-primary rounded-box">AND</div>
            <div class="inline-block p-1 bg-base-300 rounded-box">"Criminal Attack" <div class="inline-block px-2 py-1 bg-success rounded-box">OR</div> "cyber attack" </div>
          </div>
          <div class="inline-block gap-2 p-1 space-x-1 text-sm border-2 border-dashed border-primary rounded-box">
            <div class="inline-block p-1 bg-base-300 rounded-box">"home security"</div>
            <div class="inline-block p-1 bg-primary rounded-box">AND</div>
            <div class="inline-block p-1 bg-base-300 rounded-box">"business Attack" <div class="inline-block px-2 py-1 bg-success rounded-box">OR</div> "cyber attack" </div>
          </div>
        </div>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Template</h3>
        <h3>Dynamic keywords</h3>
      </div>
      <div class="pb-5 space-y-2 border-b border-base-300">
        <h3 class="text-agatha-400">Social Media Pages</h3>
        <table class="w-full">
          <tr>
            <td class="text-agatha-400">Name</td>
            <td>Lopzeobrador.org</td>
          </tr>
          <tr>
            <td class="text-agatha-400">Sm</td>
            <td><a class="link text-info" href="#">www.facebook.com</a></td>
          </tr>
          <tr>
            <td class="text-agatha-400">Id</td>
            <td>e41239812938</td>
          </tr>
          <tr>
            <td class="text-agatha-400">Type</td>
            <td>Facebook</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
