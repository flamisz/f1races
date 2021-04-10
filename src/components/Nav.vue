<template>
<div>
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-x-4">
        <router-link v-for="(race, name) in races" :key="name" :to="'/race/' + name">
            <div class="flex-row">
                <div class="font-bold truncate">{{ name.replace('_', ' ') }}</div>
                <div class="text-sm">{{ raceDate(race) }}</div>
            </div>
        </router-link>

        <router-link to="/" class="font-bold truncate">home</router-link>
    </div>
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
