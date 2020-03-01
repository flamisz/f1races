<template>
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
</template>

<script>
import { getRace } from '@/races'
import moment from 'moment-timezone'

export default {
  name: 'Race',
  props: ['country'],
  // components: {
  //   Results
  // },

  data () {
    return {
      selected: '',
      loading: false,
      race: null,
      error: null,
      past: false,
      localTz: moment.tz.guess(),
      tz: moment.tz.guess(),
      timezones: moment.tz.names()
    }
  },

  created () {
    this.fetchData()
    if (localStorage.tz) {
      this.tz = localStorage.tz
      this.selected = localStorage.tz
    }
  },

  watch: {
    '$route' () {
      this.fetchData()
      if (localStorage.tz) {
        this.tz = localStorage.tz
        this.selected = localStorage.tz
      } else {
        this.tz = moment.tz.guess()
      }
    },
    selected: function (val) {
      if (val) {
        this.tz = val
        localStorage.tz = val
      }
    }
  },

  computed: {
    qualificationTime: function () {
      let date = moment(this.race.times.qualification)
      return {
        date: date.tz(this.tz).format('ddd DD MMM'),
        time: date.tz(this.tz).format('h:mm A')
      }
    },

    raceTime: function () {
      let date = moment(this.race.times.race)
      return {
        date: date.tz(this.tz).format('ddd DD MMM'),
        time: date.tz(this.tz).format('h:mm A')
      }
    },

    circuit() {
      return this.race ? this.race.circuit_id : null
    }
  },

  methods: {
    fetchData () {
      this.error = this.race = null
      this.loading = true

      getRace(this.country, (err, race) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.race = race
          this.calculateTimes()
        }
      })
    },

    calculateTimes() {
      this.past = moment(this.race.times.race).isBefore(moment())
    },

    clear () {
      this.tz = this.localTz
      this.selected = ''
      localStorage.removeItem('tz')
    }
  }
}
</script>