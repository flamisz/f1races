<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="race" class="mb-2 border-gray-400 border-t border-b border-dashed py-2">
            <div class="font-bold">{{ race.title }}</div>
            <div class="flex">
                <div class="w-1/2">
                    <div class="text-gray-400 text-sm">race</div>
                    <div>{{ raceTime.date }}</div>
                    <div>{{ raceTime.time }}</div>
                </div>

                <div class="w-1/2">
                    <div class="text-gray-400 text-sm">qualifying</div>
                    <div>{{ qualificationTime.date }}</div>
                    <div>{{ qualificationTime.time }}</div>
                </div>
            </div>
        </div>

        <div v-if="race">
            <div class="flex sm:w-1/2 mb-2">
                <select v-model="tz" class="block w-full pl-3 pr-10 border-gray-300 focus:outline-none">
                    <option v-for="(option, index) in timezones" :value="option" :key="index">
                        {{ option }}
                    </option>
                </select>
            </div>

            <div class="flex justify-between mb-2">
                <div @click.prevent="tz = race.tz" class="text-yellow-400 font-bold text-sm cursor-pointer">
                    race timezone
                </div>

                <div @click.prevent="clear" class="text-yellow-400 font-bold text-sm cursor-pointer">
                    your timezone
                </div>
            </div>

            <div class="mb-2 space-y-1 border-gray-400 border-t border-b border-dashed">
                <div @click.prevent="result = true; qualifying = false" class="flex w-min items-center cursor-pointer">
                    <div class="font-bold truncate text-sm sm:text-base px-1 rounded">race result</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-4 sm:w-4 h-3 w-3 text-yellow-100 bg-gray-400 rounded-full" :class="{ 'text-yellow-200': result === true }" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div @click.prevent="qualifying = true; result = false" class="flex w-min items-center cursor-pointer">
                    <div class="font-bold truncate text-sm sm:text-base px-1 rounded">qualifying result</div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-4 sm:w-4 h-3 w-3 text-yellow-100 bg-gray-400 rounded-full" :class="{ 'text-yellow-200': qualifying === true }" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <div v-show="qualifying">
                <Results :circuit="circuit" :qualifying="true" :show="qualifying" :time="race.times.qualification" />
            </div>

            <div v-show="result">
                <Results :circuit="circuit" :qualifying="false" :show="result" :time="race.times.race" />
            </div>
        </div>
    </div>
</template>

<script>
import { getRace } from '@/races'
import moment from 'moment-timezone'
import Results from '@/components/Results.vue'

export default {
    name: 'Race',
    props: ['country'],
    components: {
        Results
    },

    data () {
        return {
            race: null,
            error: null,
            loading: true,
            localTz: moment.tz.guess(),
            tz: moment.tz.guess(),
            timezones: moment.tz.names(),
            qualifying: false,
            result: false,
            show: '',
        }
    },

    created () {
        this.fetchData()

        if (localStorage.tz) {
            this.tz = localStorage.tz
        }
    },

    watch: {
        '$route'() {
            this.fetchData()

            this.tz = localStorage.tz ? localStorage.tz : moment.tz.guess()
            this.qualifying = false
            this.result = false
        },

        tz: function(val) {
            if (val) {
                this.tz = val
                localStorage.tz = val
            }
        }
    },

    computed: {
        qualificationTime: function() {
            if (!this.race) {
                return { date: '', time: ''};
            }

            let date = moment(this.race.times.qualification)
            return {
                date: date.tz(this.tz).format('ddd DD MMM').toLowerCase(),
                time: date.tz(this.tz).format('h:mm A').toLowerCase()
            }
        },

        raceTime: function() {
            if (!this.race) {
                return { date: '', time: ''};
            }

            let date = moment(this.race.times.race)
            return {
                date: date.tz(this.tz).format('ddd DD MMM').toLowerCase(),
                time: date.tz(this.tz).format('h:mm A').toLowerCase()
            }
        },

        circuit() {
            return this.race ? this.race.circuit_id : null
        },
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
                }
            })
        },

        clear() {
            this.tz = this.localTz
        },
    }
}
</script>
