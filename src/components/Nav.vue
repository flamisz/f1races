<template>
<div>
  <!-- desktop nav -->
  <div class=" sm:flex hidden overflow-hidden h-screen pl-6">
    <div class="overflow-y-auto pr-4 w-64 flex-shrink-0">
      <nav>
        <router-link :to="'/'" class="flex items-center text-sm p-2 group">
          <span class="rounded-full bg-white shadow group-hover:shadow-outline sm:h-8 sm:w-8 h-6 w-6 p-xs sm:p-1 mr-1 sm:p-1 sm:mr-2" id="track">
            <svg class="text-gray-400 rounded-full flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="truncate capitalize">Home</span>
        </router-link>

        <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="flex items-center text-sm p-2 group">
          <Track :path="race.svg_path" />
          <span class="truncate capitalize">{{ race.name.replace('-', ' ') }}</span>
          <span class="ml-auto text-xs tracking-tight">
            {{ raceDate(race) }}
            <span v-if="race.extra" class="font-extrabold text-lg" :class="{ 'text-red-500': race.extra.level == 'danger', 'text-yellow-500': race.extra.level == 'warning' }" :title="race.extra.short">!</span>
          </span>
        </router-link>
      </nav>
    </div>
  </div>

  <!-- mobile nav -->
  <div class="sm:hidden mt-2">
    <nav class="flex flex-wrap px-1 text-gray-600">
      <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="flex items-center text-sm group w-1/3 pb-2">
        <Track :path="race.svg_path" />
        <div class="flex flex-col leading-tight truncate">
          <span class="text-md truncate capitalize">{{ race.name.replace('-', ' ') }}</span>
          <span class="text-xxs">
            {{ raceDate(race) }}
            <span v-if="race.extra" class="font-extrabold" :class="{ 'text-red-500': race.extra.level == 'danger', 'text-yellow-500': race.extra.level == 'warning' }" :title="race.extra.short">!</span>
          </span>
        </div>
      </router-link>

      <router-link :to="'/'" class="flex items-center text-sm group w-1/3 pb-2">
          <span class="rounded-full bg-white shadow group-hover:shadow-outline sm:h-8 sm:w-8 h-6 w-6 p-xs sm:p-1 mr-1 sm:p-1 sm:mr-2" id="track">
            <svg class="text-gray-400 rounded-full flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div class="flex flex-col leading-tight truncate">
            <span class="text-md truncate capitalize">Home</span>
          </div>
        </router-link>
    </nav>
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