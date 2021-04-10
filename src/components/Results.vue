<template>
    <div class="text-sm sm:text-base">
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="!loading && !results">No results yet...</div>
        <transition name="fade">
            <div v-if="results" class="">
                <div v-for="(driver, index) in results" :key="index" class="flex items-baseline">
                    <div class="w-1/12">{{ driver.position }}</div>
                    <div class="w-6/12 truncate">{{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}</div>
                    <div v-if="qualifying" class="w-3/12 text-xs sm:text-base text-gray-400">{{ qTime(driver) }}</div>
                    <div v-if="qualifying" class="w-2/12 truncate text-xs sm:text-base text-gray-400">{{ driver.Constructor.name }}</div>
                    <div v-if="!qualifying" class="w-2/12">{{ driver.points }}</div>
                    <div v-if="!qualifying" class="w-3/12 truncate text-xs sm:text-base text-gray-400">{{ driver.Constructor.name }}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { getResults, getQualifying } from '@/api'

export default {
    name: 'Results',

    props: {
        circuit: String,
        qualifying: Boolean
    },

    data () {
        return {
            results: '',
            error: '',
            loading: false
        }
    },

    created () {
        this.fetchData()
    },

    watch: {
        '$route' () {
            this.fetchData()
        }
    },

    methods: {
        fetchData () {
            this.error = this.results = null
            this.loading = true

            if (this.qualifying) {
                getQualifying(this.circuit, (err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                    }
                })
            } else {
                getResults(this.circuit, (err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                    }
                })
            }
        },

        qTime: function(driver) {
            if (driver.Q3) {
                return driver.Q3
            }

            if (driver.Q2) {
                return driver.Q2
            }

            if (driver.Q1) {
                return driver.Q1
            }

            return '-'
        },
    },
}

</script>
