<template>
<div>
    <router-link to="/">Home</router-link>
    <router-link v-for="(race, name) in races" :key="name" :to="'/race/' + name">
        <div class="flex-row">
            <div>{{ name }}</div>
            <div>{{ raceDate(race) }}</div>
        </div>
    </router-link>
</div>
</template>

<script>
import { getRaces } from '@/races'
import moment from 'moment-timezone'

export default {
    name: 'Nav',

    data () {
        return {
            races: []
        }
    },

    created () {
        this.fetchData()
    },

    methods: {
        fetchData () {
            this.races = getRaces()
        },

        raceDate: function (race) {
            let date = moment(race.times.race).tz(race.tz)

            return date.format('DD MMM').toLowerCase()
        }
    }
}
</script>
