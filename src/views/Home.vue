<template>
  <div class="overflow-hidden h-screen flex flex-1 flex-col">
    <div class="overflow-y-auto sm:pr-6 sm:pt-6">
      <div class="mx-auto sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white shadow sm:rounded-lg">
          <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h2 class="sm:text-2xl text-xl">
              <span class="highlight">Formula 1 Races</span>
            </h2>
          </div>

          <div class="flex">
            <div class="px-4 py-5 sm:px-6">
              <p>Check the times of the races by your local time, track time or any choosen timezone.</p>
              <p class="mt-2">Default is your localtime but if you save a timezone, that will be the default until you reset it.</p>
              <p class="mt-2">
                <span class="highlight">
                  No bullshit, no ads, no trackers, only what's important.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col max-w-sm mb-4 sm:mx-0 mx-2">
          <router-link :to="'/race/' + nextRace" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-semibold font-medium rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4">
            Next: {{ nextRace }}
          </router-link>

          <router-link v-if="actualRace" :to="'/race/' + actualRace" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-semibold font-medium rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150">
            This weekend: {{ actualRace }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { nextRace, actualRace } from '@/races'

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
      this.actualRace = actualRace()
    },
  }
}
</script>
