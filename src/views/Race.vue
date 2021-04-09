<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <div v-if="race">
            {{ race.title }}
            {{ race.times.qualification }}
            {{ race.times.race }}
        </div>
    </div>
</template>

<script>
import { getRace } from '@/races'
import moment from 'moment-timezone'

export default {
    name: 'Race',
    props: ['country'],

    data () {
        return {
            race: null,
            error: null,
            loading: true,
        }
    },

    created () {
        this.fetchData()
    },

    watch: {
        '$route'() {
            this.fetchData()
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
    }
}
</script>
