<template>
<div>
  <!-- Off-canvas menu for mobile -->
  <div class="sm:hidden">
    <div @click="sidebarOpen = false" class="fixed inset-0 z-30 bg-gray-600 transition-opacity ease-linear duration-300" :class="{'opacity-75 pointer-events-auto': sidebarOpen, 'opacity-0 pointer-events-none': !sidebarOpen}"></div>
    <div class="fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-100 transform ease-in-out duration-300" :class="{'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen}">
      <!-- close button -->
      <div class="absolute top-0 right-0 p-1">
        <button v-show="sidebarOpen" @click="sidebarOpen = false" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600">
          <svg class="h-6 w-6 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
        <nav class="mt-5 px-2">
          <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="mt-1 group flex items-center px-2 py-1 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150">
            <Track :path="race.svg_path" />
            <span class="capitalize">{{ race.name }}</span>
            <span class="ml-auto text-xs tracking-tighter">
              {{ raceDate(race) }}
            </span>
          </router-link>
        </nav>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="w-64 hidden sm:block">
    <nav>
      <!-- <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" 
      class="mt-1 group flex items-center px-3 py-1 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition ease-in-out duration-150"> -->
      <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="flex group">
        <Track :path="race.svg_path" />
        <span class="truncate capitalize">{{ race.name }}</span>
        <span class="ml-auto text-xs tracking-tighter">
          {{ raceDate(race) }}
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
import Track from './Track'
import moment from 'moment-timezone'

export default {
  name: 'Nav',
  components: {
    Track
  },
  
  data () {
    return {
      sidebarOpen: false,
      races: []
    }
  },

  watch: {
    '$route' () {
      this.sidebarOpen = false
    }
  },

  created () {
    this.fetchData()
    console.log('created')
  },

  methods: {
    fetchData () {
      this.races = getRaces()
    },

    raceDate: function (race) {
      if (moment(race.times.from).month() == moment(race.times.to).month()) {
        return moment(race.times.from).format('DD') + '-' + moment(race.times.to).format('DD') + ' ' + moment(race.times.from).format('MMM')
      } else {
        return moment(race.times.from).format('DD') + ' ' + moment(race.times.from).format('MMM') + '-' + moment(race.times.to).format('DD') + ' ' + moment(race.times.from).format('MMM')
      }
    }
  }
}
</script>