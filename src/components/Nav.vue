<template>
<div>
    Nav
</div>
</template>

<script>
import { getRaces } from '@/races'

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
    }
}
</script>
