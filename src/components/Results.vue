<template>
    <div>
        <div>Results</div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="!loading && !results">No results yet...</div>
        <transition name="fade">
            <div v-if="results" class="">
                <div v-for="(driver, index) in results" :key="index">
                    {{ driver.position }}
                    {{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}
                    {{ driver.Constructor.name }}
                    {{ driver.points }}
                    {{ qTime(driver) }}
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
