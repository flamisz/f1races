const cars = {
  mercedes: {
    name: 'Mercedes',
    engine: 'mercedes',
    pilots: {
      hamilton: {
        name: 'Lewis Hamilton',
        country: 'United Kingdom',
        num: 44,
        code: 'HAM',
        driver_id: 'hamilton',
      },
      bottas: {
        name: 'Valtteri Bottas',
        country: 'Finland',
        num: 77,
        code: 'BOT',
        driver_id: 'bottas',
      },
    },
  },
  redbull: {
    name: 'Red Bull Racing',
    engine: 'honda',
    pilots: {
      verstappen: {
        name: 'Max Verstappen',
        country: 'Netherlands',
        num: 33,
        code: 'VER',
        driver_id: 'max_verstappen',
      },
      perez: {
        name: 'Sergio Perez',
        country: 'Mexico',
        num: 11,
        code: 'PER',
        driver_id: 'perez',
      },
    },
  },
  alpine: {
    name: 'Alpine',
    engine: 'renault',
    pilots: {
      alonzo: {
        name: 'Fernando Alonso',
        country: 'Spain',
        num: 14,
        code: 'ALO',
        driver_id: 'alonso',
      },
      ocon: {
        name: 'Esteban Ocon',
        country: 'France',
        num: 31,
        code: 'OCO',
        driver_id: 'ocon',
      },
    },
  },
  haas: {
    name: 'Haas F1 Team',
    engine: 'ferrari',
    pilots: {
      schumacher: {
        name: 'Mick Schumacher',
        country: 'Germany',
        num: 47,
        code: 'MSC',
        driver_id: 'mick_schumacher',
      },
      mazepin: {
        name: 'Nikita Mazepin',
        country: 'Russia',
        num: 9,
        code: 'MAZ',
        driver_id: 'mazepin',
      },
    },
  },
  mclaren: {
    name: 'McLaren',
    engine: 'mercedes',
    pilots: {
      norris: {
        name: 'Lando Norris',
        country: 'United Kingdom',
        num: 4,
        code: 'NOR',
        driver_id: 'norris',
      },
      ricciardo: {
        name: 'Daniel Ricciardo',
        country: 'Australia',
        num: 3,
        code: 'RIC',
        driver_id: 'ricciardo',
      },
    },
  },
  alfa: {
    name: 'Alfa Romeo Racing',
    engine: 'ferrari',
    pilots: {
      raikkonen: {
        name: 'Kimi Räikkönen',
        country: 'Finland',
        num: 7,
        code: 'RAI',
        driver_id: 'raikkonen',
      },
      giovinazzi: {
        name: 'Antonio Giovinazzi',
        country: 'Italy',
        num: 99,
        code: 'GIO',
        driver_id: 'giovinazzi',
      },
    },
  },
  aston: {
    name: 'Aston Martin',
    engine: 'mercedes',
    pilots: {
      vettel: {
        name: 'Sebastian Vettel',
        country: 'Germany',
        num: 5,
        code: 'VET',
        driver_id: 'vettel',
      },
      stoll: {
        name: 'Lance Stoll',
        country: 'Canada',
        num: 18,
        code: 'STR',
        driver_id: 'stroll',
      },
    },
  },
  ferrari: {
    name: 'Ferrari',
    engine: 'ferrari',
    pilots: {
      leclerc: {
        name: 'Charles Leclerc',
        country: 'Monaco',
        num: 16,
        code: 'LEC',
        driver_id: 'leclerc',
      },
      sainz: {
        name: 'Carlos Sainz',
        country: 'Spain',
        num: 55,
        code: 'SAI',
        driver_id: 'sainz',
      },
    },
  },
  alphatauri: {
    name: 'AlphaTauri',
    engine: 'honda',
    pilots: {
      gasly: {
        name: 'Pierre Gasly',
        country: 'France',
        num: 10,
        code: 'GAS',
        driver_id: 'gasly',
      },
      tsunoda: {
        name: 'Yuki Tsunoda',
        country: 'Japan',
        num: 22,
        code: 'TSU',
        driver_id: 'tsunoda',
      },
    },
  },
  williams: {
    name: 'Williams',
    engine: 'mercedes',
    pilots: {
      russell: {
        name: 'George Russell',
        country: 'United Kingdom',
        num: 63,
        code: 'RUS',
        driver_id: 'russell',
      },
      latifi: {
        name: 'Nicholas Latifi',
        country: 'Canada',
        num: 6,
        code: 'LAT',
        driver_id: 'latifi',
      },
    },
  },
};

export default function getCars() {
  return cars;
}
