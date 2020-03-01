<template>
<div>
  <!-- Off-canvas menu for mobile -->
  <div class="sm:hidden">
    <div @click="sidebarOpen = false" class="fixed inset-0 z-30 bg-gray-600 transition-opacity ease-linear duration-300" :class="{'opacity-75 pointer-events-auto': sidebarOpen, 'opacity-0 pointer-events-none': !sidebarOpen}"></div>
    <div class="fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-100 transform ease-in-out duration-300" :class="{'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen}">
      <div class="absolute top-0 right-0 p-1">
        <button v-show="sidebarOpen" @click="sidebarOpen = false" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600">
          <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
        <nav class="mt-5 px-2">
          <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md text-white bg-gray-200 focus:outline-none focus:bg-gray-300 transition ease-in-out duration-150">
            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
            </svg>
            Dashboard
          </a>


          <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
            <svg class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="capitalize">{{ race.name }}</span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="w-64 hidden sm:flex">
    <nav>
      <a href="#" class="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 focus:outline-none focus:bg-gray-300 transition ease-in-out duration-150">
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
      <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" 
      class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
        <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-500 transition ease-in-out duration-150" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span class="truncate capitalize">
          {{ race.name }}
        </span>
      </router-link>
    </nav>
  </div>

  <!-- Hamburger menu button -->
    <div class="sm:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button @click.stop="sidebarOpen = true" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
</div>
</template>

<script>
import { getRaces } from '@/races'

export default {
  name: 'Nav',
  
  data () {
    return {
      sidebarOpen: false,
      races: []
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.races = getRaces()
    },
  }
}
</script>