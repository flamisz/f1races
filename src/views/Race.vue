<template>
<div class="overflow-hidden h-screen flex flex-1 flex-col">
  <div class="overflow-y-auto sm:pr-6 sm:pt-6">
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

    <div v-if="race" class="mx-auto sm:px-4 md:px-6 lg:px-8">
      <div class="bg-white shadow sm:rounded-lg">
        <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h2 class="sm:text-2xl text-xl">
            <span class="highlight">{{ race.title }}</span>
            <span v-if="race.extra" class="uppercase rounded-full text-xs sm:text-sm px-2 py-1 ml-2 font-semibold leading-tight" :class="{ 'bg-red-100 text-red-700': race.extra.level == 'danger', 'bg-yellow-200 text-yellow-700': race.extra.level == 'warning' }"> {{ race.extra.short }}</span>
          </h2>

          <p class="mt-1">
            <button v-if="tz !== race.tz" type="button" @click.prevent="tz = race.tz" class="text-sm text-gray-500 border-b-2 border-yellow-400 leading-none hover:text-gray-600" title="Race timezone">
              {{ race.tz }}
            </button>

            <button v-if="tz === race.tz" type="button" @click.prevent="tz = localTz" class="text-sm text-gray-500 border-b-2 border-yellow-400 leading-none hover:text-gray-600" title="Your timezone">
              {{ localTz }}
            </button>
          </p>

          <p v-if="race.extra" class="mt-2 sm:px-4 sm:py-2 px-2 py-1 sm:text-base text-sm border-2 border-red-300 rounded-lg text-gray-700" :class="{ 'border-red-300': race.extra.level == 'danger', 'border-orange-300': race.extra.level == 'warning' }">
            {{ race.extra.long }}
          </p>
        </div>

        <div class="sm:flex">
          <div class="sm:w-1/2 border-b sm:border-b-0 px-4 py-5 sm:px-6">
            <span class="sketch-underline text-base sm:text-lg">Race</span>
            <p class="mt-2 lg:text-4xl md:text-3xl text-2xl leading-tight font-semibold">
              {{ raceTime.date }}
            </p>
            <p class="lg:text-5xl md:text-4xl text-3xl leading-tight font-semibold">
              {{ raceTime.time }}
            </p>
            <p class="text-gray-500 text-xs sm:text-sm mt-1" title="Timezone">
              {{ tz }}
            </p>
          </div>

          <div class="sm:w-1/2 px-4 py-5 sm:px-6">
            <span class="sketch-underline text-base sm:text-lg">Qualifying</span>
            <p class="mt-2 lg:text-4xl md:text-3xl text-2xl leading-tight font-semibold">
              {{ qualificationTime.date }}
            </p>
            <p class="lg:text-5xl md:text-4xl text-3xl leading-tight font-semibold">
              {{ qualificationTime.time }}
            </p>
          </div>
        </div>
      </div>

      <div class="my-3">
        <div class="sm:max-w-xs sm:rounded-md shadow-sm relative text-gray-700 mx-2 sm:mx-0">
          <select v-model="selected" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 py-2 pr-10 rounded-md" :class="{ 'pl-3': !selected, 'pl-10': selected }">
            <option disabled selected value="">Save Timezone</option>
            <option v-for="(option, index) in timezones" :value="option" :key="index">
              {{ option }}
            </option>
          </select>
          <div @click.prevent="clear" v-if="selected" class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" />
            </svg>
          </div>
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