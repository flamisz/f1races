<template>
    <div class="text-sm sm:text-base">
        <div v-for="(car, cid) in cars" :key="cid" class="border-b border-dashed border-gray-400 py-2">
            <div class="flex-row">
                <div>
                    <span class="font-bold">{{ car.name }}</span> - {{ car.engine }}
                </div>

                <div v-for="(pilot, pid) in car.pilots" :key="pid">
                    <span class="text-gray-400 text-xs sm:text-sm">{{ pilot.num }} {{ pilot.code }}</span> {{ pilot.name }} <span class="text-gray-400 text-xs sm:text-sm">{{ pilot.country }}</span>
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
