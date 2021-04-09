<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <div v-if="race">
            {{ race.title }}
            {{ qualificationTime.date }} {{ qualificationTime.time }}
            {{ raceTime.date }} {{ raceTime.time }}
        </div>

        <div>
            <div class="flex">
                <select v-model="tz" class="">
                    <option v-for="(option, index) in timezones" :value="option" :key="index">
                        {{ option }}
                    </option>
                </select>
                <div @click.prevent="clear" v-if="tz !== localTz" class="">
                    X
                </div>
            </div>

            <div @click.prevent="tz = race.tz" v-if="tz !== race.tz" class="">
                {{ race.tz }}
            </div>

            <button @click="result = true; qualifying = false" type="button">
                Race Result
            </button>
            <button @click="qualifying = true; result = false" type="button">
                Qualifying Result
            </button>

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
            let date = moment(this.race.times.qualification)
            return {
                date: date.tz(this.tz).format('ddd DD MMM'),
                time: date.tz(this.tz).format('h:mm A')
            }
        },

        raceTime: function() {
            let date = moment(this.race.times.race)
            return {
                date: date.tz(this.tz).format('ddd DD MMM'),
                time: date.tz(this.tz).format('h:mm A')
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
