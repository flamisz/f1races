<template>
  <div class="sm:overflow-hidden sm:h-screen flex flex-1 flex-col">
    <div class="sm:overflow-y-auto sm:pr-6 sm:pt-6">
      <div class="mx-auto sm:px-4 md:px-6 lg:px-8">
        <div class="bg-white shadow sm:rounded-lg">
          <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h2 class="sm:text-2xl text-xl">
              <span class="highlight">Formula 1 Races</span>
            </h2>
          </div>

          <div class="">
            <div class="px-4 py-5 sm:px-6">
              <p>Check the times of the races by your local time, track time or any choosen timezone.</p>
              <p class="mt-2">Default is your localtime but if you save a timezone, that will be the default until you reset it.</p>
              <p class="mt-2">
                <span class="highlight">
                  No bullshit, no ads, no trackers, only what's important.
                </span>
              </p>

              <svg class="h-4 w-4 text-purple-600 ml-auto cursor-pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" @click="info = !info">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z" fill="currentColor"/>
              </svg>

              <p v-if="info">
                Hi, I'm Zoltan. You can find me as <a class="border-b-2 border-yellow-400 hover:border-gray-600 font-bold" href="https://twitter.com/@flamisz">@flamisz</a> on twitter or check my homepage at <a class="border-b-2 border-yellow-400 hover:border-gray-600 font-bold" href="https://flamiszoltan.me">https://flamiszoltan.me</a>
              </p>
            </div>



          </div>
        </div>

        <div class="mt-4 flex flex-col max-w-sm mb-4 sm:mx-0 mx-2">
          <router-link :to="'/race/' + nextRace" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4">
            Next: {{ nextRace }}
          </router-link>

          <router-link v-if="actualRace" :to="'/race/' + actualRace" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150">
            This weekend: {{ actualRace }}
          </router-link>
        </div>

        <div class="mt-3 mb-8 mx-2 sm:mx-0">
            <button @click="driver = true; constructor = false" type="button" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4 mr-2">
                Driver Standings
            </button>
            <button @click="constructor = true; driver = false" type="button" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4">
                Constructor Standings
            </button>
        </div>

        <div v-show="driver" class="-mt-8">
            <Standings :driver="true" />
        </div>

        <div v-show="constructor" class="-mt-8">
            <Standings :driver="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { nextRace, actualRace } from '@/races'
import Standings from '@/components/Standings.vue'


export default {
  name: 'Home',
  components: {
    Standings
  },

  data () {
    return {
      nextRace: '',
      actualRace: '',
      info: false,
      driver: false,
      constructor: false
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
