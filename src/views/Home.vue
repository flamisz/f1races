<template>
    <div>
        <div class="grid sm:grid-cols-3 sm:gap-4 py-2 mb-2 border-gray-400 border-t border-b border-dashed">
            <div @click.prevent="show = 'cars'" class="font-bold cursor-pointer truncate text-sm sm:text-base hover:text-gray-400" :class="{ 'text-gray-400': show === 'cars' }">cars</div>
            <div @click.prevent="show = 'drivers'" class="font-bold cursor-pointer truncate text-sm sm:text-base hover:text-gray-400" :class="{ 'text-gray-400': show === 'drivers' }">driver standings</div>
            <div @click.prevent="show = 'constructor'" class="font-bold cursor-pointer truncate text-sm sm:text-base hover:text-gray-400" :class="{ 'text-gray-400': show === 'constructor' }">constructor standings</div>
        </div>

        <div v-show="show === 'cars'">
            <Cars />
        </div>

        <div v-show="show === 'drivers'">
            <Standings :driver="true" :show="show" />
        </div>

        <div v-show="show === 'constructor'">
            <Standings :driver="false" :show="show" />
        </div>
    </div>
</template>

<script>
import Cars from '@/components/Cars.vue'
import Standings from '@/components/Standings.vue'

export default {
    name: 'Home',
    components: {
        Cars,
        Standings
    },

    data () {
        return {
            show: 'cars'
        }
    },

}
</script>
