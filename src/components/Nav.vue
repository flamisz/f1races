<template>
<div>
    <div class="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-x-4">
        <router-link v-for="(race, name) in races" :key="name" :to="'/race/' + name" active-class="from-yellow-100 dark:from-gray-600" class="px-0.5 rounded bg-gradient-to-r hover:from-yellow-100 dark:hover:from-gray-600">
            <div class="flex-row">
                <div class="text-sm sm:text-base font-bold truncate">{{ name.replace('_', ' ') }}</div>

                <div class="text-xs sm:text-sm">{{ raceDate(race) }}</div>
            </div>
        </router-link>

        <router-link to="/" active-class="from-yellow-100 dark:from-gray-600" class="px-0.5 rounded bg-gradient-to-r hover:from-yellow-100  dark:hover:from-gray-600" exact>
            <div class="flex-row">
                <div class="text-sm sm:text-base font-bold truncate">home</div>

                <div class="text-xs sm:text-sm truncate">cars&standings</div>
            </div>
        </router-link>

        <div>
            <button @click="switchTheme" type="button" class="bg-gray-200 dark:bg-gray-400 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                <span class="sr-only">Use setting</span>
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span :class="{ 'translate-x-5': dark, 'translate-x-0': !dark }" class="pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200">
                    <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                    <span :class="{ 'opacity-0 ease-out duration-100': dark, 'opacity-100 ease-in duration-200': !dark }" class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                        <svg class="h-3 w-3 text-gray-500" fill="currentcolor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                        </svg>
                    </span>

                    <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                    <span :class="{ 'opacity-100 ease-in duration-200': dark, 'opacity-0 ease-out duration-100': !dark }" class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                        <svg class="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </span>
                </span>
            </button>
        </div>
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
            races: [],
            dark: false
        }
    },

    created () {
        this.fetchData()

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.dark = true
        } else {
            this.dark = false
        }
    },

    methods: {
        fetchData () {
            this.races = getRaces()
        },

        raceDate: function (race) {
            let date = moment(race.times.race).tz(race.tz)

            return date.format('DD MMM').toLowerCase()
        },

        switchTheme () {
            this.dark = !this.dark

            if (this.dark) {
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
            } else {
                localStorage.theme = 'light'
                document.documentElement.classList.remove('dark')
            }
        },
    }
}
</script>
