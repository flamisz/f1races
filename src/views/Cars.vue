<template>
    <div>
        Cars

        <div v-for="(car, cid) in cars" :key="cid">
            <div class="flex-row">
                <div>
                    {{ car.name }}
                    {{ car.engine }}
                </div>

                <div v-for="(pilot, pid) in car.pilots" :key="pid">
                    {{ pilot.name }}
                    {{ pilot.country }}
                    {{ pilot.num }}
                    {{ pilot.code }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCars } from '@/cars'

export default {
    name: 'Cars',

    data () {
        return {
            cars: []
        }
    },

    created () {
        this.fetchData()
    },

    methods: {
        fetchData () {
            this.cars = getCars()
        },
    }
}
</script>
