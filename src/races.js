const races = {
  'australia': {
    title: 'Formula 1 Rolex Australian Grand Prix 2020',
    times: {
        from: "2020-03-13",
        to: "2020-03-15",
        qualification: "2020-03-14T06:00:00Z",
        race: "2020-03-15T05:10:00Z"
    },
    tz: "Australia/Melbourne",
    circuit_id: "albert_park",
    name: "australia",
    extra: {
      level: "danger",
      short: "canceled",
      long: "Following the confirmation that a member of the McLaren Racing Team has tested positive for COVID-19 and the team’s decision to withdraw from the Australian Grand Prix, Formula 1 and the FIA, with the full support of the Australian Grand Prix Corporation (AGPC) have therefore taken the decision that all Formula 1 activity for the Australian Grand Prix are cancelled."
    },
    svg_path: "M2 9C2 8.66667 2.3 7.5 3.5 5.5L6 5L8 7L7.5 7.5L8.5 9.5L9.5 11H12L12.5 10.5H16L18 12.5L16.5 14.5L15 13.5L14 15L7.5 14V13L2.5 11.5V10.5L2 9Z"
  },

  'bahrain': {
    title: 'Formula 1 Gulf Air Bahrain Grand Prix 2020',
    times: {
        from: "2020-03-20",
        to: "2020-03-22",
        qualification: "2020-03-21T15:00:00Z",
        race: "2020-03-22T15:10:00Z"
    },
    tz: "Asia/Bahrain",
    circuit_id: "bahrain",
    name: "bahrain",
    extra: {
      level: "warning",
      short: "postponed",
      long: "Postponed due to the continued global spread of coronavirus."
    },
    svg_path: "M3.5 12L4.5 5L7.5 7.5L8 8V9.5L10.5 11L10 11.5L6 11L5.5 12L14 12.5L14.5 11.5L14 10.5L12 9.5L11.5 8.5L12.5 6H13L18 14L17 14.5H3L4 13.5L3.5 12Z"
  },

  'vietnam': {
    title: 'Formula 1 VinFast Vietnam Grand Prix 2020',
    times: {
        from: "2020-04-03",
        to: "2020-04-05",
        qualification: "2020-04-04T07:00:00Z",
        race: "2020-04-05T06:10:00Z"
    },
    tz: "Asia/Ho_Chi_Minh",
    circuit_id: "hanoi",
    name: "vietnam",
    extra: {
      level: "warning",
      short: "postponed",
      long: "Postponed due to the continued global spread of coronavirus."
    },
    svg_path: "M2.5 13L11.5 11.5L12.5 12.5L13 11L12.5 9.5L11.5 10.5L11 10V9.5L10 4.5L10.5 4L12 3V5V5.5L13.5 6.23555V7L13 8L14.5 9L15 10L14.5 11V13L18.5 15V16.5L14.5 14L11.5 13H9L3 14L2 15L1 14.5V13L2.5 12V13Z"
  },

  'china': {
    title: 'Formula 1 Heineken Chinese Grand Prix 2020',
    times: {
        from: "2020-04-17",
        to: "2020-04-19",
        qualification: "2020-04-18T06:00:00Z",
        race: "2020-04-19T06:10:00Z"
    },
    tz: "Asia/Shanghai",
    circuit_id: "shanghai",
    name: "china",
    extra: {
      level: "warning",
      short: "postponed",
      long: "Postponed as a result of the novel coronavirus outbreak."
    },
    svg_path: "M9.5 4.5L6 14L1.5 14.5L1 15.5H17.5L18.5 15L19 14L18 12.5L17 13V14H11L10.5 12L11.6875 12.5L13 12V11L12 9L12.5 7.5H17.5L18 6.5L14.5 5.5L11 6.25L10 5.5V5H10.5L11.5 5.5L11.6875 5V4.5L11 4H10L9.5 4.5Z"
  },

  'netherlands': {
    title: 'Formula 1 Heineken Dutch Grand Prix 2020',
    times: {
        from: "2020-05-01",
        to: "2020-05-03",
        qualification: "2020-05-02T13:00:00Z",
        race: "2020-05-03T13:10:00Z"
    },
    tz: "Europe/Amsterdam",
    circuit_id: "zandvoort",
    name: "netherlands",
    extra: {
      level: "warning",
      short: "postponed",
      long: "Postponed due to the global spread of the coronavirus"
    },
    svg_path: "M14.6081 17.1176H3.36486L2.5 16.2353V15.3529L3.36486 14.9118H5.52703L6.39189 14.4706L7.25676 14.0294L8.98649 15.3529H9.85135V14.4706L8.12162 10.0588L5.52703 7.41176L5.09459 4.32353L5.52703 3H6.82432L9.85135 3.88235L11.5811 3.44118L11.1486 7.41176L10.2838 7.85294L8.12162 5.20588H7.68919L7.25676 6.52941L8.12162 8.73529L12.0135 12.2647L11.1486 13.5882L12.0135 14.0294L16.3378 10.9412L17.6351 11.3824L18.5 15.3529L17.2027 16.6765L14.6081 17.1176Z"
  },

  'spain': {
    title: 'Formula 1 Gran Premio De España 2020',
    times: {
        from: "2020-05-08",
        to: "2020-05-10",
        qualification: "2020-05-10T13:00:00Z",
        race: "2020-05-10T13:10:00Z"
    },
    tz: "Europe/Madrid",
    circuit_id: "catalunya",
    name: "spain",
    extra: {
      level: "warning",
      short: "postponed",
      long: "Postponed due to the global spread of the coronavirus"
    },
    svg_path: "M4 12H18L19 11L18.5 10V8L16 7L15.5 7.5V8.5L16.5 9L17 10.5L10.5 7H10L8 10V11H5.5L3 9.5L3.5 9L6 8.5L7 8V7H3L1.5 7.5L1 9L1.5 10L3 10.5L3.5 11.5L4 12Z"
  },

  'monaco': {
    title: 'Formula 1 Grand Prix De Monaco 2020',
    times: {
        from: "2020-05-21",
        to: "2020-05-24",
        qualification: "2020-05-23T13:00:00Z",
        race: "2020-05-24T13:10:00Z"
    },
    tz: "Europe/Monaco",
    circuit_id: "monaco",
    name: "monaco",
    extra: {
      level: "danger",
      short: "canceled",
      long: "Canceled due to the global spread of the coronavirus"
    },
    svg_path: "M1 12V14V15.5L2.5 16V15.5L2 14V12.5H3L3.5 10L3 9.5L4 8.5L5 7.5L9 9.5L9.5 9L10.5 9.5L13.5 10L15 9.5L16.5 9L19 6L18.5 5.5L18 5L17.5 6L17 5V4L13.5 6V6.5L14 7.5L13.5 8.5H11.5L9 8L4.5 6.5L4 7L2 9.5L1 12Z"
  },

  'azerbaijan': {
    title: 'Formula 1 Azerbaijan Grand Prix 2020',
    times: {
        from: "2020-06-05",
        to: "2020-06-07",
        qualification: "2020-06-06T13:00:00Z",
        race: "2020-06-07T12:10:00Z"
    },
    tz: "Asia/Baku",
    circuit_id: "BAK",
    name: "azerbaijan",
    svg_path: "M10 9.5L6.5 11.5L4 15L1 13.5V12L2 10.5L4.5 9L6 9.5L6.5 10.5L9 9L13.5 7L13 5.5L18 4L19 6.5L10 9.5Z"
  },

  'canada': {
    title: 'Formula 1 Grand Prix Du Canada 2020',
    times: {
        from: "2020-06-12",
        to: "2020-06-14",
        qualification: "2020-06-13T18:00:00Z",
        race: "2020-06-14T18:10:00Z"
    },
    tz: "America/Montreal",
    circuit_id: "villeneuve",
    name: "canada",
    svg_path: "M3.5 7.5L7.5 9.5L8 10.5L9 11L14.5 13.5L17 14.5H18.5L15 11.5L14.5 10L13.5 8.5L10 6L9 6.5L7.5 5.5H5L4 5L1 6L1.5 7L2 6.5L3.5 7.5Z"
  },

  'france': {
    title: 'Formula 1 Grand Prix De France 2020',
    times: {
        from: "2020-06-26",
        to: "2020-06-28",
        qualification: "2020-06-27T13:00:00Z",
        race: "2020-06-28T13:10:00Z"
    },
    tz: "Europe/Paris",
    circuit_id: "ricard",
    name: "france",
    svg_path: "M3 5L10.5 8L11 8.5L12 8L13.5 9L18 11L19 12L18.5 14L18 15L17 14L18 13V12H15.5L14.5 11L14 11.5L13.5 12.5L7 7.5H5.5L2.5 6L1 5L1.5 4.5L2 4H2.5V4.5L3 5Z"
  },

  'austria': {
    title: 'Formula 1 myWorld Grosser Preis Von Österreich 2020',
    times: {
        from: "2020-07-03",
        to: "2020-07-05",
        qualification: "2020-07-04T13:00:00Z",
        race: "2020-07-05T13:10:00Z"
    },
    tz: "Europe/Vienna",
    circuit_id: "red_bull_ring",
    name: "austria",
    svg_path: "M4 4L1 4.5L4 8L6.5 13L8.5 15.5L16.5 13.5L19 12.5L17.5 9.5H10.5L9 11L8 11.5L7 11L6 8.5V7.5L7.5 7L10 7.5L12 7L12.5 5.5L4 4Z"
  },

  'great-britain': {
    title: 'Formula 1 Pirelli British Grand Prix 2020',
    times: {
        from: "2020-07-17",
        to: "2020-07-19",
        qualification: "2020-07-18T13:00:00Z",
        race: "2020-07-19T13:10:00Z"
    },
    tz: "Europe/London",
    circuit_id: "silverstone",
    name: "great-britain",
    svg_path: "M2 4L1 9L3.5 11.5L4.5 10.5L3.5 10L3 9.25L8.5 5.1875H9L10.5 6.5H8.8125L10 8.5L9 11L9.5 12L13.5 16L14.5 15.5V14.5L17 13H18L19 12L12.5 5.5L11.5 4H10.5L8.8125 3L7.5 4L4 3L3 3.5L2 4Z"
  },

  'hungary': {
    title: 'Formula 1 Magyar Nagydíj 2020',
    times: {
        from: "2020-07-31",
        to: "2020-08-02",
        qualification: "2020-08-01T13:00:00Z",
        race: "2020-08-02T13:10:00Z"
    },
    tz: "Europe/Budapest",
    circuit_id: "hungaroring",
    name: "hungary",
    svg_path: "M5.5 15.5H15V14H12.5V13H15.5L16 8.5L13.5 7.5L12 5.5L11 6L9.5 5V4.5L7 4L6 4.5V5.5L7.5 6.5V7.5L8.5 12.5L10.5 13.5L10 14H8L5 15L5.5 15.5Z"
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

  'singapore': {
    title: 'Formula 1 Singapore Airlines Singapore Grand Prix 2020',
    times: {
        from: "2020-09-18",
        to: "2020-09-20",
        qualification: "2020-09-19T13:00:00Z",
        race: "2020-09-20T12:10:00Z"
    },
    tz: "Asia/Singapore",
    circuit_id: "marina_bay",
    name: "singapore",
    night: true,
    svg_path: "M18 12L17 13H14V11.5H12.5L12 13L9.5 12L8.5 11L5.5 9.5L3.5 15L2.5 13.5L2 12.5L1 12L4 7L5.5 8.5L7 6.5L10.5 9L16.5 9.5L15 6.5L16 5L16.5 5.5L17.5 6L18 12Z"
  },

  'russia': {
    title: 'Formula 1 VTB Russian Grand Prix 2020',
    times: {
        from: "2020-09-25",
        to: "2020-09-27",
        qualification: "2020-09-26T12:00:00Z",
        race: "2020-09-27T11:10:00Z"
    },
    tz: "Europe/Moscow",
    circuit_id: "sochi",
    name: "russia",
    svg_path: "M16.5 10.5L19 6L17.5 5L16 7.5L16.5 8.5L15 9.5L14 9L12.5 9.5L7 7.5L4 8.5L4.5 10.5L4 11.5L1 12V14L2 15.5L6 14L5 12L5.5 10.5L6.5 10L8.5 10.5L9.5 12.5L16.5 10.5Z"
  },

  'japan': {
    title: 'Formula 1 Pirelli Japanese Grand Prix 2020',
    times: {
        from: "2020-10-09",
        to: "2020-10-11",
        qualification: "2020-10-10T07:00:00Z",
        race: "2020-10-11T05:10:00Z"
    },
    tz: "Asia/Tokyo",
    circuit_id: "suzuka",
    name: "japan",
    svg_path: "M10 15H2L1 13.5L2 13L3.5 13.5L5 12.5L6 13L7.5 12.5L9 13.5L10 12.5V9L11 8.5L14 10V10.5L14.5 7L18.5 5L19.5 5.5L19 7.5H13.5L11 10V13L10 15Z"
  },

  'united-states': {
    title: 'Formula 1 United States Grand Prix 2020',
    times: {
        from: "2020-10-23",
        to: "2020-10-25",
        qualification: "2020-10-24T21:00:00Z",
        race: "2020-10-25T19:10:00Z"
    },
    tz: "America/Chicago",
    circuit_id: "americas",
    name: "united-states",
    svg_path: "M18 4L7.5 8L8.5 9.5L8 10L7 8.5L6 9L7.5 11V11.5L5.5 12L3.5 10.5L1 12L8.5 16.5L7.5 13.5L9.5 11.5V10.5H10.5L11 8.5H13L14 7.5L15.5 8.5L17 7.5L18 4Z"
  },

  'mexico': {
    title: 'Formula 1 Gran Premio De La Ciudad De México 2020',
    times: {
        from: "2020-10-30",
        to: "2020-11-01",
        qualification: "2020-10-31T19:00:00Z",
        race: "2020-11-01T19:10:00Z"
    },
    tz: "America/Mexico_City",
    circuit_id: "rodriguez",
    name: "mexico",
    svg_path: "M16 4L1 10V12.5L3 11.5L3.5 13L8 11H10.5L11.5 11.5L13.5 11L14.5 12H15.5L17.5 15.7037L18.5 14L17.5 13.5V5.5L16.5 5L16 4Z"
  },

  'brazil': {
    title: 'Formula 1 Heineken Grande Prêmio Do Brasil 2020',
    times: {
        from: "2020-11-13",
        to: "2020-11-15",
        qualification: "2020-11-14T18:00:00Z",
        race: "2020-11-15T17:10:00Z"
    },
    tz: "America/Sao_Paulo",
    circuit_id: "interlagos",
    name: "brazil",
    svg_path: "M4 15.5H15V12L8.5 9L9 7L12 6L11.5 8L12.5 8.5L14 6.5L16 6L14.5 8.5L15 10L19 11L19.5 9.5L18 6L16 5L10 5.5L1 10.5L3 11.5V14.5L4 15.5Z"
  },

  'abu-dhabi': {
    title: 'Formula 1 Etihad Airways Abu Dhabi Grand Prix 2019',
    times: {
        from: "2019-11-27",
        to: "2019-11-29",
        qualification: "2019-11-28T13:00:00Z",
        race: "2019-11-29T13:10:00Z"
    },
    tz: "Asia/Dubai",
    circuit_id: "yas_marina",
    name: "abu-dhabi",
    svg_path: "M18.5 4H5L4.5 5L2 9L1 12.5V14.5L2 15L3.5 14.5L2.5 11.5L3 10L4 9.5L4.5 10.5L6 9.5L4.5 6.5L6.5 5L9.5 10.5L12 9.5V7.5L12.5 6.5H14L18.5 4Z"
  }
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
  let today = moment()
  let actualRace = ''
  for (let race in races) {
    let from = moment(races[race].times.from)
    let to = moment(races[race].times.to)
    if (today.isAfter(from) && today.isBefore(to)) {
      actualRace = race
      break
    }
  }
  return actualRace
}
