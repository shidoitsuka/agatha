<template>
  <div class="flex-row space-y-5">
    <div class="grid grid-cols-4 gap-4 bg-base-200 p-5 rounded-lg">
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/docs.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Documents</h3>
          <h4>150 326</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/sources.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Sources</h3>
          <h4>150 1</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/active-profle.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Active Profiles</h3>
          <h4>5</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/targets.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3>Targets</h3>
          <h4>0</h4>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
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
          Popular Words
        </div>
        <div class="relative p-6">
          <h3 class="absolute text-lg right-10 text-info">Popular World</h3>
          <h3 class="absolute text-2xl right-15 top-20 text-error">Popular World</h3>
          <h3 class="absolute text-sm left-80 top-2 right-2 text-success">Popular World</h3>
          <h3 class="absolute text-4xl right-1 top-7 left-20 text-primary">Popular World</h3>
        </div>
      </div>
    </div>
  </div>
</template>
