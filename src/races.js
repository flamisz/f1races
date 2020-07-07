const races = {
  'austria1': {
    title: 'Formula 1 Rolex Grosser Preis Von Österreich 2020',
    times: {
        from: "2020-07-03",
        to: "2020-07-05",
        qualification: "2020-07-04T13:00:00Z",
        race: "2020-07-05T13:10:00Z"
    },
    tz: "Europe/Vienna",
    circuit_id: "red_bull_ring",
    name: "austria1",
    race_number: 0,
    svg_path: "M4 4L1 4.5L4 8L6.5 13L8.5 15.5L16.5 13.5L19 12.5L17.5 9.5H10.5L9 11L8 11.5L7 11L6 8.5V7.5L7.5 7L10 7.5L12 7L12.5 5.5L4 4Z"
  },

  'austria2': {
    title: 'Formula 1 Pirelli Grosser Preis Der Steiermark 2020',
    times: {
        from: "2020-07-10",
        to: "2020-07-12",
        qualification: "2020-07-11T13:00:00Z",
        race: "2020-07-12T13:10:00Z"
    },
    tz: "Europe/Vienna",
    circuit_id: "red_bull_ring",
    name: "austria2",
    race_number: 1,
    svg_path: "M4 4L1 4.5L4 8L6.5 13L8.5 15.5L16.5 13.5L19 12.5L17.5 9.5H10.5L9 11L8 11.5L7 11L6 8.5V7.5L7.5 7L10 7.5L12 7L12.5 5.5L4 4Z"
  },

  'hungary': {
    title: 'Formula 1 Aramco Magyar Nagydíj 2020',
    times: {
        from: "2020-07-17",
        to: "2020-07-19",
        qualification: "2020-07-18T13:00:00Z",
        race: "2020-07-19T13:10:00Z"
    },
    tz: "Europe/Budapest",
    circuit_id: "hungaroring",
    name: "hungary",
    svg_path: "M5.5 15.5H15V14H12.5V13H15.5L16 8.5L13.5 7.5L12 5.5L11 6L9.5 5V4.5L7 4L6 4.5V5.5L7.5 6.5V7.5L8.5 12.5L10.5 13.5L10 14H8L5 15L5.5 15.5Z"
  },

  'great-britain1': {
    title: 'Formula 1 Pirelli British Grand Prix 2020',
    times: {
        from: "2020-07-31",
        to: "2020-08-02",
        qualification: "2020-08-01T14:00:00Z",
        race: "2020-08-02T14:10:00Z"
    },
    tz: "Europe/London",
    circuit_id: "silverstone",
    name: "great-britain1",
    race_number: 0,
    svg_path: "M2 4L1 9L3.5 11.5L4.5 10.5L3.5 10L3 9.25L8.5 5.1875H9L10.5 6.5H8.8125L10 8.5L9 11L9.5 12L13.5 16L14.5 15.5V14.5L17 13H18L19 12L12.5 5.5L11.5 4H10.5L8.8125 3L7.5 4L4 3L3 3.5L2 4Z"
  },

  'great-britain2': {
    title: 'Emirates Formula 1 70th Anniversary Grand Prix 2020',
    times: {
        from: "2020-08-07",
        to: "2020-08-09",
        qualification: "2020-08-08T14:00:00Z",
        race: "2020-08-09T14:10:00Z"
    },
    tz: "Europe/London",
    circuit_id: "silverstone",
    name: "great-britain2",
    race_number: 1,
    svg_path: "M2 4L1 9L3.5 11.5L4.5 10.5L3.5 10L3 9.25L8.5 5.1875H9L10.5 6.5H8.8125L10 8.5L9 11L9.5 12L13.5 16L14.5 15.5V14.5L17 13H18L19 12L12.5 5.5L11.5 4H10.5L8.8125 3L7.5 4L4 3L3 3.5L2 4Z"
  },

  'spain': {
    title: 'Formula 1 Aramco Gran Premio De España 2020',
    times: {
        from: "2020-08-14",
        to: "2020-08-16",
        qualification: "2020-08-15T13:00:00Z",
        race: "2020-08-16T13:10:00Z"
    },
    tz: "Europe/Madrid",
    circuit_id: "catalunya",
    name: "spain",
    svg_path: "M4 12H18L19 11L18.5 10V8L16 7L15.5 7.5V8.5L16.5 9L17 10.5L10.5 7H10L8 10V11H5.5L3 9.5L3.5 9L6 8.5L7 8V7H3L1.5 7.5L1 9L1.5 10L3 10.5L3.5 11.5L4 12Z"
  },

  'belgium': {
    title: 'Formula 1 Rolex Belgian Grand Prix 2020',
    times: {
        from: "2020-08-28",
        to: "2020-08-30",
        qualification: "2020-08-29T13:00:00Z",
        race: "2020-08-30T13:10:00Z"
    },
    tz: "Europe/Brussels",
    circuit_id: "spa",
    name: "belgium",
    svg_path: "M6 9.5L15 5H17L18.5 6.77596V7.5L17 6.77596L12.5 8.5L13 10L17 11.5L16.5 13L18.5 14.5L17 15.5L15 15L13 12L11 11L9.5 12L6 12.5L5.5 12L2.5 14L1 14.5L1.5 13.5L4 10.5L5 9.5H6Z"
  },

  'italy': {
    title: 'Formula 1 Gran Premio Heineken D\'italia 2020',
    times: {
        from: "2020-09-04",
        to: "2020-09-06",
        qualification: "2020-09-05T13:00:00Z",
        race: "2020-09-06T13:10:00Z"
    },
    tz: "Europe/Rome",
    circuit_id: "monza",
    name: "italy",
    svg_path: "M3.5 5L1 5.5L4 13.5L8 14L18.5 13.5L19 12L9.5 11L3.5 5Z"
  },
}

import moment from 'moment-timezone'

export function getRace (id, cb) {
  if (races[id]) {
    cb(null, races[id])
  } else {
    cb(new Error('Race not found.'))
  }
}

export function getRaces () {
  return races
}

export function nextRace () {
  let today = moment()
  let race = ''
  for (race in races) {
    let from = moment(races[race].times.from)
    if (today.isBefore(from)) {
      break
    }
  }
  return race
}

export function actualRace () {
  let today = moment().millisecond(0).second(0).minute(0).hour(0)
  let actualRace = ''
  for (let race in races) {
    let from = moment(races[race].times.from)
    let to = moment(races[race].times.to)

    if (today.isSameOrAfter(from) && today.isSameOrBefore(to)) {
      actualRace = race
      break
    }
  }
  return actualRace
}
