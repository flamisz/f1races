<template>
<div class="max-w-screen-lg mx-auto sm:flex">
  <Nav></Nav>
  
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
                  <span class="sketch-underline">Qualifying</span>
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

      <div class="mt-8 px-4 sm:px-6 lg:px-8">
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-gray-800 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-300 transition ease-in-out duration-150 mr-2">
          Race Result
        </button>
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-gray-800 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-300 transition ease-in-out duration-150">
          Qualifying Result
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
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
