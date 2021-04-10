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

export default {
    name: 'Standings',

    props: {
        driver: Boolean
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

            if (this.driver) {
                getDriver((err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                    }
                })
            } else {
                getConstructor((err, results) => {
                    this.loading = false

                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.results = results
                    }
                })
            }
        },
    },
}
</script>
