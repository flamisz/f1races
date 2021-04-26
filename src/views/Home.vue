<template>
    <div>
        <div class="mb-2 space-y-1 border-gray-400 border-t border-b border-dashed">
            <div @click.prevent="show = 'cars'" class="flex w-min items-center cursor-pointer">
                <div class="font-bold truncate text-sm sm:text-base px-1 rounded">cars</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-4 sm:w-4 h-3 w-3 bg-gray-400 rounded-full" :class="{ 'text-yellow-200 dark:text-gray-100': show === 'cars', 'text-yellow-100 dark:text-gray-900': show != 'cars' }" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                </svg>
            </div>

            <div @click.prevent="show = 'drivers'" class="flex w-min items-center cursor-pointer">
                <div class="font-bold truncate text-sm sm:text-base px-1 rounded">driver standings</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-4 sm:w-4 h-3 w-3 bg-gray-400 rounded-full" :class="{ 'text-yellow-200 dark:text-gray-100': show === 'drivers', 'text-yellow-100 dark:text-gray-900': show != 'drivers' }" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                </svg>
            </div>

            <div @click.prevent="show = 'constructor'" class="flex w-min items-center cursor-pointer">
                <div class="font-bold cursor-pointer truncate text-sm sm:text-base px-1 rounded">constructor standings</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:h-4 sm:w-4 h-3 w-3 bg-gray-400 rounded-full" :class="{ 'text-yellow-200 dark:text-gray-100': show === 'constructor', 'text-yellow-100 dark:text-gray-900': show != 'constructor' }" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
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
