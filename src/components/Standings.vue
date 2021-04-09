<template>
    <div>
        <div>Standings</div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div v-if="!loading && !results">No results yet...</div>
        <transition name="fade">
            <div v-if="results && driver" class="">
                <div v-for="(driver, index) in results" :key="index">
                    {{ driver.position }}
                    {{ driver.Driver.givenName + ' ' + driver.Driver.familyName }}
                    {{ driver.wins }}
                    {{ driver.Constructors[0].name }}
                    {{ driver.points }}
                </div>
            </div>

            <div v-if="results && !driver" class="">
                <div v-for="(driver, index) in results" :key="index">
                    {{ driver.position }}
                    {{ driver.Constructor.name }}
                    {{ driver.wins }}
                    {{ driver.points }}
                </div>
            </div>
        </transition>
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
