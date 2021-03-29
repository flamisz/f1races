<template>
    <div>
        Race
    </div>
</template>

<script>
import { getRace } from '@/races';

export default {
  name: 'Race',
  props: ['country'],

  data() {
    return {
      selected: '',
      loading: true,
      race: null,
      error: null,
      // past: false,
      // localTz: moment.tz.guess(),
      // tz: moment.tz.guess(),
      // timezones: moment.tz.names(),
      // help: false,
      // qualifying: false,
      // result: false
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.error = null;
      this.race = null;
      this.loading = true;
      getRace(this.country, (err, race) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.race = race;
          // this.calculateTimes()
        }
      });
    },
  },
};
</script>
