const races = {
  bahrain: {
    title: 'Bahrain',
    times: {
      qualification: '2021-03-27T15:00:00Z',
      race: '2021-03-28T15:00:00Z',
    },
    tz: 'Asia/Bahrain',
    circuit_id: 'bahrain',
  },
  imola: {
    title: 'Imola',
    times: {
      qualification: '2021-04-17T13:00:00Z',
      race: '2021-04-18T13:00:00Z',
    },
    tz: 'Europe/Rome',
    circuit_id: 'imola',
  },
  portugal: {
    title: 'Portugal',
    times: {
      qualification: '2021-05-01T13:00:00Z',
      race: '2021-05-02T13:00:00Z',
    },
    tz: 'Europe/Lisbon',
    circuit_id: 'portimao',
  },
  spain: {
    title: 'Spain',
    times: {
      qualification: '2021-05-08T13:00:00Z',
      race: '2021-05-09T13:00:00Z',
    },
    tz: 'Europe/Madrid',
    circuit_id: 'catalunya',
  },
  monaco: {
    title: 'Monaco',
    times: {
      qualification: '2021-05-22T13:00:00Z',
      race: '2021-05-23T13:00:00Z',
    },
    tz: 'Europe/Monaco',
    circuit_id: 'monaco',
  },
  azerbaijan: {
    title: 'Azerbaijan',
    times: {
      qualification: '2021-06-05T13:00:00Z',
      race: '2021-06-06T12:00:00Z',
    },
    tz: 'Asia/Baku',
    circuit_id: 'BAK',
  },
  france: {
    title: 'France',
    times: {
      qualification: '2021-06-19T13:00:00Z',
      race: '2021-06-20T13:00:00Z',
    },
    tz: 'Europe/Paris',
    circuit_id: 'ricard',
  },
  austria: {
    title: 'Austria',
    times: {
      qualification: '2021-06-26T13:00:00Z',
      race: '2021-06-27T13:00:00Z',
    },
    tz: 'Europe/Vienna',
    circuit_id: 'red_bull_ring',
  },
  austria2: {
    title: 'Austria',
    times: {
      qualification: '2021-07-03T13:00:00Z',
      race: '2021-07-04T13:00:00Z',
    },
    tz: 'Europe/Vienna',
    circuit_id: 'red_bull_ring',
  },
  great_britain: {
    title: 'Great Britain',
    times: {
      qualification: '2021-07-17T14:00:00Z',
      race: '2021-07-18T14:00:00Z',
    },
    tz: 'Europe/London',
    circuit_id: 'silverstone',
  },
  hungary: {
    title: 'Hungary',
    times: {
      qualification: '2021-07-31T13:00:00Z',
      race: '2021-08-01T13:00:00Z',
    },
    tz: 'Europe/Budapest',
    circuit_id: 'hungaroring',
  },
  belgium: {
    title: 'Belgium',
    times: {
      qualification: '2021-08-28T13:00:00Z',
      race: '2021-08-29T13:00:00Z',
    },
    tz: 'Europe/Brussels',
    circuit_id: 'spa',
  },
  netherlands: {
    title: 'Netherlands',
    times: {
      qualification: '2021-09-04T13:00:00Z',
      race: '2021-09-05T13:00:00Z',
    },
    tz: 'Europe/Amsterdam',
    circuit_id: 'zandvoort',
  },
  monza: {
    title: 'Monza',
    times: {
      qualification: '2021-09-11T13:00:00Z',
      race: '2021-09-12T13:00:00Z',
    },
    tz: 'Europe/Rome',
    circuit_id: 'monza',
  },
  russia: {
    title: 'Russia',
    times: {
      qualification: '2021-09-25T12:00:00Z',
      race: '2021-09-26T12:00:00Z',
    },
    tz: 'Europe/Moscow',
    circuit_id: 'sochi',
  },
  singapore: {
    title: 'Singapore',
    times: {
      qualification: '2021-10-02T13:00:00Z',
      race: '2021-10-03T12:00:00Z',
    },
    tz: 'Asia/Singapore',
    circuit_id: 'marina_bay',
  },
  japan: {
    title: 'Japan',
    times: {
      qualification: '2021-10-09T06:00:00Z',
      race: '2021-10-10T05:00:00Z',
    },
    tz: 'Asia/Tokyo',
    circuit_id: 'suzuka',
  },
  usa: {
    title: 'United States',
    times: {
      qualification: '2021-10-23T21:00:00Z',
      race: '2021-10-24T19:00:00Z',
    },
    tz: 'America/Chicago',
    circuit_id: 'americas',
  },
  mexico: {
    title: 'Mexico',
    times: {
      qualification: '2021-10-30T20:00:00Z',
      race: '2021-10-31T19:00:00Z',
    },
    tz: 'America/Mexico_City',
    circuit_id: 'rodriguez',
  },
  brazil: {
    title: 'Brazil',
    times: {
      qualification: '2021-11-06T18:00:00Z',
      race: '2021-11-07T17:00:00Z',
    },
    tz: 'America/Sao_Paulo',
    circuit_id: 'interlagos',
  },
  australia: {
    title: 'Australia',
    times: {
      qualification: '2021-11-20T06:00:00Z',
      race: '2021-11-21T06:00:00Z',
    },
    tz: 'Australia/Melbourne',
    circuit_id: 'albert_park',
  },
  saudi_arabia: {
    title: 'Saudi Arabia',
    times: {
      qualification: '2021-12-04T16:00:00Z',
      race: '2021-12-05T16:00:00Z',
    },
    tz: 'Asia/Riyadh',
    circuit_id: 'jeddah',
  },
  abu_dhabi: {
    title: 'Abu Dhabi',
    times: {
      qualification: '2021-12-11T13:00:00Z',
      race: '2021-12-12T13:00:00Z',
    },
    tz: 'Asia/Dubai',
    circuit_id: 'yas_marina',
  },
};

export function getRace(id, cb) {
  if (races[id]) {
    cb(null, races[id]);
  } else {
    cb(new Error('Race not found.'));
  }
}

export function getRaces() {
  return races;
}
