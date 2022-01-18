<template>
  <div class="flex-row space-y-5">
    <div class="grid grid-cols-4 gap-4 bg-base-200 p-5 rounded-lg">
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/docs.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3 class="user-dashboard-summary--amount-title">Documents</h3>
          <h4 class="user-dashboard-summary--amount">150 326</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/sources.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3 class="user-dashboard-summary--amount-title">Sources</h3>
          <h4 class="user-dashboard-summary--amount">1501</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/active-profle.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3 class="user-dashboard-summary--amount-title">Active Profiles</h3>
          <h4 class="user-dashboard-summary--amount">5</h4>
        </div>
      </div>
      <div class="flex w-full p-3 rounded-lg bg-base-300">
        <img src="/icons/targets.svg" class="mr-3" alt="">
        <div class="flex-row">
          <h3 class="user-dashboard-summary--amount-title">Targets</h3>
          <h4 class="user-dashboard-summary--amount">0</h4>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div class="rounded-lg bg-base-200">
        <div class="px-8 py-4 font-bold border-b border-base-300 user-dashboard--popular-fake-news-title">
          Popular Fake News Words
        </div>
        <div class="p-3">
          <table class="w-full table-compact">
            <tbody class="divide-y divide-base-300">
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">1</td>
                <td class="user-dashboard--popular-fake-news-description">Trump Fake News</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">2</td>
                <td class="user-dashboard--popular-fake-news-description">Deep Fake</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">3</td>
                <td class="user-dashboard--popular-fake-news-description">Global security</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">4</td>
                <td class="user-dashboard--popular-fake-news-description">Covid Masks</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">5</td>
                <td class="user-dashboard--popular-fake-news-description">Covid Masks</td>
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
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">1</td>
                <td class="user-dashboard--popular-fake-news-description">Personal data of Facebook users leaked online</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">2</td>
                <td class="user-dashboard--popular-fake-news-description">Janet yellen to call for global minimum tax rate</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">3</td>
                <td class="user-dashboard--popular-fake-news-description">Five windows 10 features you should be using</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">4</td>
                <td class="user-dashboard--popular-fake-news-description">Turkey launches probe into facebook over data leak</td>
              </tr>
              <tr>
                <td class="p-3 user-dashboard--popular-fake-news-number text-center">5</td>
                <td class="user-dashboard--popular-fake-news-description">Turkey launches probe into facebook over data leak</td>
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
          <h3 class="absolute text-4xl right-1 top-7 left-20 text-primary font-bold">Popular World</h3>
          <h3 class="absolute text-4xl left-50 bottom-15 font-bold">Popular World</h3>
        </div>
      </div>
    </div>
  </div>
</template>
