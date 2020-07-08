<template>
    <div class="sm:overflow-hidden sm:h-screen flex flex-1 flex-col">
        <div class="sm:overflow-y-auto sm:pr-6 sm:pt-6">
            <div v-if="loading" class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-4 h-4 spin mr-2 fill-current">
                        <path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z"></path>
                    </svg>

                    <span>Scanning...</span>
                </div>
            </div>

            <div v-if="error" class="mx-auto px-4 sm:px-6 lg:px-8 bg-red-200 text-red-800">
                {{ error }}
            </div>

            <div v-if="race" class="mx-auto sm:px-4 md:px-6 lg:px-8">
                <div class="bg-white shadow sm:rounded-lg">
                    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
                        <h2 class="sm:text-2xl text-xl">
                            <span class="highlight">{{ race.title }}</span>
                            <span v-if="race.extra" class="uppercase rounded-full text-xs sm:text-sm px-2 py-1 ml-2 font-bold leading-tight" :class="{ 'bg-red-100 text-red-700': race.extra.level == 'danger', 'bg-yellow-200 text-yellow-700': race.extra.level == 'warning' }"> {{ race.extra.short }}</span>
                        </h2>

                        <div class="mt-1 flex">
                            <button v-if="tz !== race.tz" type="button" @click.prevent="tz = race.tz" class="text-sm text-gray-500 border-b-2 border-yellow-400 leading-none hover:text-gray-600" title="Race timezone">
                                {{ race.tz }}
                            </button>

                            <button v-if="tz === race.tz" type="button" @click.prevent="tz = localTz" class="text-sm text-gray-500 border-b-2 border-yellow-400 leading-none hover:text-gray-600" title="Your timezone">
                                {{ localTz }}
                            </button>

                            <transition name="slide-fade">
                                <div v-if="help" class="leading-none text-xs ml-2 flex items-center font-bold text-purple-500">
                                    <svg class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L6.29289 5.29289C6.68342 4.90237 7.31658 4.90237 7.70711 5.29289C8.09763 5.68342 8.09763 6.31658 7.70711 6.70711L5.41421 9L17 9C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071Z" fill="currentColor" />
                                    </svg>
                                    <span>Switch timezone</span>
                                </div>
                            </transition>
                        </div>

                        <p v-if="race.extra" class="mt-2 sm:px-4 sm:py-2 px-2 py-1 text-sm rounded-lg" :class="{ 'bg-yellow-200 text-yellow-700': race.extra.level == 'warning', 'bg-red-100 text-red-700': race.extra.level == 'danger' }">
                            {{ race.extra.long }}
                        </p>
                    </div>

                    <div class="sm:flex">
                        <div class="sm:w-1/2 border-b sm:border-b-0 px-4 py-5 sm:px-6">
                            <span class="sketch-underline text-base sm:text-lg">Race</span>
                            <p class="mt-2 lg:text-4xl md:text-3xl text-2xl leading-tight font-bold">
                                {{ raceTime.date }}
                            </p>
                            <p class="lg:text-5xl md:text-4xl text-3xl leading-tight font-bold">
                                {{ raceTime.time }}
                            </p>
                            <div class="text-gray-500 text-xs sm:text-sm mt-1 flex" title="Timezone">
                                <span>{{ tz }}</span>

                                <transition name="slide-fade">
                                    <div v-if="help" class="leading-none text-xs ml-2 flex items-center font-bold text-purple-500">
                                        <svg class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L6.29289 5.29289C6.68342 4.90237 7.31658 4.90237 7.70711 5.29289C8.09763 5.68342 8.09763 6.31658 7.70711 6.70711L5.41421 9L17 9C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071Z" fill="currentColor" />
                                        </svg>
                                        <span>Actual timezone</span>
                                    </div>
                                </transition>
                            </div>
                        </div>

                        <div class="sm:w-1/2 px-4 py-5 sm:px-6">
                            <span class="sketch-underline text-base sm:text-lg">Qualifying</span>
                            <p class="mt-2 lg:text-4xl md:text-3xl text-2xl leading-tight font-bold">
                                {{ qualificationTime.date }}
                            </p>
                            <p class="lg:text-5xl md:text-4xl text-3xl leading-tight font-bold">
                                {{ qualificationTime.time }}
                            </p>
                            <svg class="h-4 w-4 text-purple-600 ml-auto cursor-pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" @click="help = !help">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor" />

                            </svg>
                        </div>
                    </div>
                </div>

                <div class="my-3">
                    <div class="sm:max-w-xs sm:rounded-md shadow-sm relative text-gray-700 mx-2 sm:mx-0">
                        <select v-model="selected" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 py-2 pr-10 rounded-md" :class="{ 'pl-3': !selected, 'pl-10': selected }">
                            <option disabled selected value="">Save Timezone</option>
                            <option v-for="(option, index) in timezones" :value="option" :key="index">
                                {{ option }}
                            </option>
                        </select>
                        <div @click.prevent="clear" v-if="selected" class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" />
                            </svg>
                        </div>
                    </div>

                    <transition name="up-fade">
                        <div v-if="help" class="leading-none text-xs mt-1 flex items-center font-bold text-purple-500">
                            <svg class="h-4 w-4 mr-1 ml-2 sm:ml-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711C14.3166 8.09763 13.6834 8.09763 13.2929 7.70711L11 5.41421L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 5.41421L6.70711 7.70711C6.31658 8.09763 5.68342 8.09763 5.29289 7.70711Z" fill="currentColor" />
                            </svg>
                            <span>Select any timezone</span>
                        </div>
                    </transition>
                </div>

                <div class="mt-3 mb-8 mx-2 sm:mx-0">
                    <button @click="result = true; qualifying = false" type="button" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4 mr-2">
                        Race Result
                    </button>
                    <button @click="qualifying = true; result = false" type="button" class="text-center px-3 py-2 border border-transparent text-sm uppercase tracking-wider font-bold font-bold rounded-full text-gray-800 bg-yellow-400 hover:bg-gray-800 hover:text-yellow-400 focus:outline-none focus:border-yellow-300 focus:shadow-outline-yellow active:bg-yellow-400 transition ease-in-out duration-150 mb-4">
                        Qualifying Result
                    </button>
                </div>

                <div v-show="qualifying" class="-mt-8">
                    <Results :circuit="circuit" :qualifying="true" :number="race_number" />
                </div>

                <div v-show="result" class="-mt-8">
                    <Results :circuit="circuit" :qualifying="false" :number="race_number" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getRace } from '@/races'
    import moment from 'moment-timezone'
    import Results from '@/components/Results.vue'

    export default {
        name: 'Race',
        props: ['country'],
        components: {
            Results
        },

        data() {
            return {
                selected: '',
                loading: true,
                race: null,
                error: null,
                past: false,
                localTz: moment.tz.guess(),
                tz: moment.tz.guess(),
                timezones: moment.tz.names(),
                help: false,
                qualifying: false,
                result: false
            }
        },

        created() {
            this.fetchData()
            if (localStorage.tz) {
                this.tz = localStorage.tz
                this.selected = localStorage.tz
            }
        },

        watch: {
            '$route'() {
                this.fetchData()
                if (localStorage.tz) {
                    this.tz = localStorage.tz
                    this.selected = localStorage.tz
                } else {
                    this.tz = moment.tz.guess()
                }

                this.qualifying = false
                this.result = false
            },
            selected: function(val) {
                if (val) {
                    this.tz = val
                    localStorage.tz = val
                }
            }
        },

        computed: {
            qualificationTime: function() {
                let date = moment(this.race.times.qualification)
                return {
                    date: date.tz(this.tz).format('ddd DD MMM'),
                    time: date.tz(this.tz).format('h:mm A')
                }
            },

            raceTime: function() {
                let date = moment(this.race.times.race)
                return {
                    date: date.tz(this.tz).format('ddd DD MMM'),
                    time: date.tz(this.tz).format('h:mm A')
                }
            },

            circuit() {
                return this.race ? this.race.circuit_id : null
            },

            race_number() {
                return this.race && this.race.race_number ? this.race.race_number : 0
            }
        },

        methods: {
            fetchData() {
                this.error = this.race = null
                this.loading = true

                getRace(this.country, (err, race) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.race = race
                        this.calculateTimes()
                    }
                })
            },

            calculateTimes() {
                this.past = moment(this.race.times.race).isBefore(moment())
            },

            clear() {
                this.tz = this.localTz
                this.selected = ''
                localStorage.removeItem('tz')
            },

            loadQualifying() {

            }
        }
    }

</script>
