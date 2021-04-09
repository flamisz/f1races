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
            if (moment(race.times.from).month() == moment(race.times.to).month()) {
                return moment(race.times.from).format('DD') + '-' + moment(race.times.to).format('DD') + ' ' + moment(race.times.from).format('MMM').toLowerCase()
            }

            return moment(race.times.from).format('DD') + ' ' + moment(race.times.from).format('MMM').toLowerCase() + '-' + moment(race.times.to).format('DD') + ' ' + moment(race.times.from).format('MMM').toLowerCase()
        }
    }
}
</script>
