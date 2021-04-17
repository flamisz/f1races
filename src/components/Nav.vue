<template>
<div>
    <div class="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-x-4">
        <router-link v-for="(race, name) in races" :key="name" :to="'/race/' + name" active-class="from-yellow-100" class="px-0.5 rounded bg-gradient-to-r hover:from-yellow-100">
            <div class="flex-row">
                <div class="text-sm sm:text-base font-bold truncate">{{ name.replace('_', ' ') }}</div>

                <div class="text-xs sm:text-sm">{{ raceDate(race) }}</div>
            </div>
        </router-link>

        <router-link to="/" active-class="from-yellow-100" class="px-0.5 rounded bg-gradient-to-r hover:from-yellow-100" exact>
            <div class="flex-row">
                <div class="text-sm sm:text-base font-bold truncate">home</div>

                <div class="text-xs sm:text-sm truncate">cars&standings</div>
            </div>
        </router-link>
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
