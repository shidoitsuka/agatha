<template>
  <div class="flex-row px-32 py-5 space-y-5">
    <div class="grid grid-cols-4 gap-4">
      <div class="flex w-full p-3 rounded-lg bg-primary">
        <img src="/icons/docs.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Documents</h3>
          <h4>150 326</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-info">
        <img src="/icons/sources.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Sources</h3>
          <h4>150 1</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-success">
        <img src="/icons/active-profle.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Active Profiles</h3>
          <h4>5</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-warning">
        <img src="/icons/targets.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Targets</h3>
          <h4>0</h4>
        </div>
      </div>
    </div>
    <div class="flex justify-center p-4 space-x-3 rounded-lg bg-base-200">
      <div class="flex items-center px-3 py-1 rounded-lg bg-base-300">
        <img src="/social-media/facebook.svg" alt="" class="mr-2">
        Facebook
        <span class="ml-2 badge">12398</span>
      </div>
      <div class="flex items-center px-3 py-1 rounded-lg bg-base-300">
        <img src="/social-media/twitter.svg" alt="" class="mr-2">
        Twitter
        <span class="ml-2 badge">928</span>
      </div>
      <div class="flex items-center px-3 py-1 rounded-lg bg-base-300">
        <img src="/social-media/youtube.svg" alt="" class="mr-2">
        Youtube
        <span class="ml-2 badge">8</span>
      </div>
      <div class="flex items-center px-3 py-1 rounded-lg bg-base-300">
        <img src="/social-media/linkedin.svg" alt="" class="mr-2">
        Linkedin
        <span class="ml-2 badge">8</span>
      </div>
      <div class="flex items-center px-3 py-1 rounded-lg bg-base-300">
        More
        <span class="ml-2 badge">+9</span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div class="rounded-lg bg-base-200">
        <div class="px-8 py-4 font-bold border-b border-base-300">
          Key Entities
        </div>
        <div class="grid grid-cols-3 gap-5 p-5">
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
          <div class="grid gap-2 text-sm text-center place-items-center">
            <img class="w-16 h-16" src="/icons/key-entity.svg" alt="">
            Enitity key zero one
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-base-200">
        <div class="px-8 py-4 font-bold border-b border-base-300">
          Popular Words
        </div>
        <div class="relative p-6">
          <h3 class="absolute text-lg right-10 text-info">Popular World</h3>
          <h3 class="absolute text-2xl right-15 top-20 text-error">Popular World</h3>
          <h3 class="absolute text-sm left-80 top-2 right-2 text-success">Popular World</h3>
          <h3 class="absolute text-4xl right-1 top-7 left-20 text-primary">Popular World</h3>
        </div>
      </div>
      <div class="rounded-lg bg-base-200">
        <div class="px-8 py-4 font-bold border-b border-base-300">
          Top Posts
        </div>
        <div class="p-3">
          <table class="w-full table-compact">
            <tbody class="text-left divide-y divide-base-300">
              <tr>
                <td class="p-3">1</td>
                <td>Personal data of Facebook users leaked online</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">2</td>
                <td>Janet yellen to call for global minimum tax rate</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">3</td>
                <td>Five windows 10 features you should be using</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">4</td>
                <td>Turkey launches probe into facebook over data leak</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">5</td>
                <td>Turkey launches probe into facebook over data leak</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="rounded-lg bg-base-200">
        <div class="px-8 py-4 font-bold border-b border-base-300">
          Popular Fake News Words
        </div>
        <div class="p-3">
          <table class="w-full table-compact">
            <tbody class="divide-y divide-base-300">
              <tr>
                <td class="p-3">1</td>
                <td>Trump Fake News</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">2</td>
                <td>Deep Fake</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">3</td>
                <td>Global security</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">4</td>
                <td>Covid Masks</td>
                <td>Data</td>
              </tr>
              <tr>
                <td class="p-3">5</td>
                <td>Covid Masks</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
