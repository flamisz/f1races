<template>
<div>
  <div v-if="loading" class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-4 h-4 spin mr-2 fill-current">
          <path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z"></path>
      </svg>

      <span>Scanning...</span>
    </div>  
  </div>

  <div v-if="error" class="mx-auto px-4 sm:px-6 lg:px-8 bg-red-200 text-red-800">
    {{ error }}
  </div>

  <div v-if="race">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:max-w-4xl mx-auto">
        <h2 class="text-2xl leading-9 font-semibold text-gray-900 sm:text-3xl sm:leading-10 text-center">
          <span class="highlight">{{ race.title }}</span>
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
                {{ raceTime.date }}
              </p>
              <p class="mb-3 md:text-5xl text-4xl leading-none font-semibold text-white">
                {{ raceTime.time }}
              </p>
              <p class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-yellow-200 text-gray-800" title="Timezone">
                {{ tz }}
              </p>
            </div>
            <div class="border-t border-gray-100 p-6 sm:border-0 sm:border-l">
              <p class="text-lg leading-6 font-medium text-gray-300">
                <span class="sketch-underline">Qualifying</span>
              </p>
              <p class="mt-2 md:text-4xl text-3xl leading-none font-semibold text-white">
                {{ qualificationTime.date }}
              </p>
              <p class="mb-3 md:text-5xl text-4xl leading-none font-semibold text-white">
                {{ qualificationTime.time }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 md:flex justify-between">
      <div class="px-4 sm:px-6 lg:px-8">
        <span class="relative z-0 inline-flex shadow-sm mt-1">
          <button type="button" @click.prevent="tz = localTz" class="relative inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-white text-xs leading-4 text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" title="Your timezone">
            {{ localTz }}
          </button>
          <button type="button" @click.prevent="tz = race.tz" class="-ml-px relative inline-flex items-center px-4 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs leading-4 text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" title="Race timezone">
            {{ race.tz }}
          </button>
        </span>
      </div>

      <div class="px-4 sm:px-6 lg:px-8 w-full sm:w-1/2 flex">
        <div class="mt-1 rounded-md shadow-sm flex-1">
          <select v-model="selected" class="form-select block w-full transition duration-150 ease-in-out text-xs leading-4 py-1.5">
            <option disabled selected value="">Save Timezone</option>
            <option v-for="(option, index) in timezones" :value="option" :key="index">
              {{ option }}
            </option>
          </select>
        </div>

        <span class="inline-flex rounded-md shadow-sm mt-1 ml-1">
          <button type="button" @click.prevent="clear" v-if="selected" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-red-800 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150">
            Reset
          </button>
        </span>
      </div>
    </div>

    <div class="mt-8 px-4 sm:px-6 lg:px-8 hidden">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-gray-800 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-300 transition ease-in-out duration-150 mr-2">
        Race Result
      </button>
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-gray-800 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-300 transition ease-in-out duration-150">
        Qualifying Result
      </button>
    </div>
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
      loading: true,
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