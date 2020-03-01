<template>
<div class="max-w-screen-lg mx-auto flex">

<!-- Static sidebar for desktop -->
<div class="w-64 hidden sm:flex">
<nav>
  <a href="#" class="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-300 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
    </svg>
    <span class="truncate">
      Dashboard
    </span>
    <span class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full bg-gray-50 group-focus:bg-gray-100 transition ease-in-out duration-150">
      5
    </span>
  </a>
  <a href="#" class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    <span class="truncate">
      Team
    </span>
  </a>
  <a href="#" class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
    </svg>
    <span class="truncate">
      Projects
    </span>
    <span class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full text-gray-600 bg-gray-200 group-hover:bg-gray-200 group-focus:bg-gray-300 transition ease-in-out duration-150">
      19
    </span>
  </a>
  <a href="#" class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
    <span class="truncate">
      Calendar
    </span>
    <span class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 rounded-full text-gray-600 bg-gray-200 group-hover:bg-gray-200 group-focus:bg-gray-300 transition ease-in-out duration-150">
      20+
    </span>
  </a>
  <a href="#" class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
    </svg>
    <span class="truncate">
      Documents
    </span>
  </a>
  <a href="#" class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
    <span class="truncate">
      Reports
    </span>
  </a>
</nav>
</div>

<!-- content -->
<div class="w-full">


<div class="">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:max-w-4xl mx-auto">
      <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
        <span class="highlight">Name of the Race</span>
      </h2>
    </div>
  </div>
  
  <div class="mt-8">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto">
        <div class="rounded-lg bg-gray-800 shadow-lg sm:grid sm:grid-cols-2">
          <div class="border-b border-gray-100 p-6 sm:border-0 sm:border-r">
            <p class="text-lg leading-6 font-medium text-gray-300">
              <span class="sketch-underline">Race</span>
            </p>
            <p class="mt-2 md:text-4xl text-3xl leading-none font-semibold text-white">
              Sun 1 Mar
            </p>
            <p class="mb-3 md:text-5xl text-4xl leading-none font-semibold text-white">
              2:10 PM
            </p>
            <p class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-yellow-200 text-gray-800">
              Pacific/Auckland
            </p>
          </div>
          <div class="border-t border-b border-gray-100 p-6 sm:border-0 sm:border-l">
            <p class="text-lg leading-6 font-medium text-gray-300">
              <span class="sketch-underline">Qualification</span>
            </p>
            <p class="mt-2 md:text-4xl text-3xl leading-none font-semibold text-white">
              Sat 29 Feb
            </p>
            <p class="mb-3 md:text-5xl text-4xl leading-none font-semibold text-white">
              1:10 PM
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 md:flex justify-between">
    <div class="px-4 sm:px-6 lg:px-8">
      <span class="relative z-0 inline-flex shadow-sm mt-1">
        <button type="button" class="relative inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-white text-xs leading-4 text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" title="Your timezone">
          Pacific/Auckland
        </button>
        <button type="button" class="-ml-px relative inline-flex items-center px-4 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs leading-4 text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" title="Race timezone">
          Europe/Hungary
        </button>
      </span>
    </div>

    <div class="px-4 sm:px-6 lg:px-8 w-full sm:w-1/2">
      <div class="mt-1 rounded-md shadow-sm">
        <select class="form-select block w-full transition duration-150 ease-in-out text-xs leading-4 py-1.5">
          <option disabled selected value="">Save Timezone</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
  </div>
</div>


</div>

</div>
</template>

<script>
export default {
  data () {
    return {
      sidebarOpen: false
    }
  },
}
</script>

<style lang="scss">
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

.highlight {
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(-100deg,rgba(255, 224, 0, 0.3), rgba(255, 224, 0, 0.7) 95%, rgba(255, 224, 0, 0.1));
}

.sketch-underline {
    background: url(data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB3aWR0aD0iMTE5IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCAxMTkgNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTE3LjQzNCAzLjg1M0M1OS4wMjcgNS45MzMgODQuNzg0LTIuNDYgMS41NjYgMy40MzYiIHN0cm9rZT0iI2ZjMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc%2BCg%3D%3D) bottom left/100% 0.5rem no-repeat;
    padding-bottom: 0.1rem; }
</style>
