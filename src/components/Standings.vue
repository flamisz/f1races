<template>
    <div class="text-sm sm:text-base">
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="!loading && !results">No results yet...</div>

        <div v-if="results && driver">
            <div v-for="(driver, index) in results" :key="index" class="flex items-baseline">
                <div class="w-1/12">{{ driver.position }}</div>
                <div class="w-6/12 truncate">{{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}</div>
                <div class="w-1/12">{{ driver.wins }}</div>
                <div class="w-3/12 truncate text-xs sm:text-base text-gray-400">{{ driver.Constructors[0].name }}</div>
                <div class="w-2/12">{{ driver.points }}</div>
            </div>
        </div>

        <div v-if="results && !driver" class="">
            <div v-for="(driver, index) in results" :key="index" class="flex items-baseline">
                <div class="w-1/12">{{ driver.position }}</div>
                <div class="w-6/12 truncate">{{ driver.Constructor.name }}</div>
                <div class="w-1/12">{{ driver.wins }}</div>
                <div class="w-2/12">{{ driver.points }}</div>
                <div class="w-3/12">&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
import { getDriver, getConstructor } from '@/api'
import moment from 'moment-timezone'

export default {
    name: 'Standings',

    props: {
        driver: Boolean,
        show: String,
    },

    data () {
        return {
            results: '',
            error: '',
            loading: false,
            type: this.show,
        }
    },

    created () {
        if (this.driver && localStorage.standingd) {
            let timestamp = JSON.parse(localStorage.standingd).timestamp

            if (moment().diff(timestamp, 'minutes') < 60) {
                this.results = JSON.parse(localStorage.standingd).value
            }
        }

        if (!this.driver && localStorage.standingc) {
            let timestamp = JSON.parse(localStorage.standingc).timestamp

            if (moment().diff(timestamp, 'minutes') < 60) {
                this.results = JSON.parse(localStorage.standingc).value
            }
        }
    },

    watch: {
        show: function(val) {
            if ((val === 'drivers' && this.driver) || (val === 'constructor' && !this.driver)) {
                this.results || this.fetchData()
            }
        }
    },

    methods: {
        fetchData () {
            this.error = this.results = null
            this.loading = true

            if (this.driver) {
                getDriver((err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                        let store = { value: results, timestamp: new Date().getTime() }
                        localStorage.standingd = JSON.stringify(store);
                    }
                })
            } else {
                getConstructor((err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                        let store = { value: results, timestamp: new Date().getTime() }
                        localStorage.standingc = JSON.stringify(store);
                    }
                })
            }
        },
    },
}
</script>
