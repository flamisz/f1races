<template>
    <div>
        <div @click.prevent="show = 'cars'">Cars</div>
        <div @click.prevent="show = 'drivers'">Standings Drivers</div>
        <div @click.prevent="show = 'constructor'">Standings Constructor</div>
        <div v-show="show === 'cars'">
            <Cars />
        </div>

        <div v-show="show === 'drivers'">
            <Standings :driver="true" />
        </div>

        <div v-show="show === 'constructor'">
            <Standings :driver="false" />
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
