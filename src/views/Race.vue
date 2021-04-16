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

            <div class="grid sm:grid-cols-3 sm:gap-4 py-2 mb-2 border-gray-400 border-t border-b border-dashed">
                <div @click.prevent="result = true; qualifying = false" class="font-bold cursor-pointer truncate text-sm sm:text-base bg-gradient-to-r px-0.5 rounded" :class="{ 'from-yellow-100': result === true }">show race result</div>
                <div @click.prevent="qualifying = true; result = false" class="font-bold cursor-pointer truncate text-sm sm:text-base bg-gradient-to-r px-0.5 rounded" :class="{ 'from-yellow-100': qualifying === true }">show qualifying result</div>
            </div>

            <div v-show="qualifying">
                <Results :circuit="circuit" :qualifying="true" />
            </div>

            <div v-show="result">
                <Results :circuit="circuit" :qualifying="false" />
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
