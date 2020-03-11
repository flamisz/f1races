<template>
<div>
  <!-- desktop nav -->
  <div class=" sm:flex hidden overflow-hidden h-screen pl-6">
    <div class="overflow-y-auto pr-4 w-64 flex-shrink-0">
      <nav>
        <router-link v-for="race in races" :key="race.name" :to="'/race/' + race.name" class="flex items-center text-sm p-2 group">
          <Track :path="race.svg_path" />
          <span class="truncate capitalize">{{ race.name }}</span>
          <span class="ml-auto text-xs tracking-tighter font-mono">
            {{ raceDate(race) }}
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
          <span class="text-md truncate capitalize">{{ race.name }}</span>
          <span class="text-xxs">
            {{ raceDate(race) }}
          </span>
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