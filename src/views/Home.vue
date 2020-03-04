<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="sm:max-w-4xl mx-auto">
      <h2 class="text-2xl leading-9 font-semibold text-gray-900 sm:text-3xl sm:leading-10 text-center">
        <span class="highlight">Formula 1 Races</span>
      </h2>
    </div>
    
    <div class="bg-white rounded shadow p-4 mt-4">
      <p>Check the times of the races by your local time, track time or any choosen timezone.</p>
      <p class="mt-2">Default is your localtime but if you save a timezone, that will be the default until you reset it.</p>
      <p class="mt-2">
        <span class="highlight">
          No bullshit, no ads, no trackers, only what's important.
        </span>
      </p>
    </div>

    <div class="bg-white rounded shadow p-4 mt-4" v-if="actualRace">
      Race weekend: <router-link :to="`/race/${actualRace}`" class="capitalize border-green-700 border-b-2 leading-none ml-1 hover:text-green-700">{{ actualRace }}</router-link>
    </div>

    <div class="bg-white rounded shadow p-4 mt-4" v-if="nextRace">
      Next Race: <router-link :to="`/race/${nextRace}`" class="capitalize border-green-700 border-b-2 leading-none ml-1 hover:text-green-700">{{ nextRace }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { nextRace } from '@/races'

export default {
  name: 'Home',

  data () {
    return {
      nextRace: '',
      actualRace: ''
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.nextRace = nextRace()
      this.actualRace = nextRace()
    },
  }
}
</script>
