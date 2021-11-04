<template>
  <div class="w-full form-control">
    <div class="flex">
      <button class="btn ml-5 mr-2 bg-base-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <select
        class="px-2 pl-5 border-0 border-r-2 rounded-r-none w-28 border-base-200 bg-base-300 select focus:ring-0"
      >
        <option selected>Global</option>
        <option>telekinesis</option>
        <option>time travel</option>
        <option>invisibility</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        class="w-full rounded-l-none input focus:ring-0 bg-base-300 nav-search"
      />
    </div>
  </div>
</template>
