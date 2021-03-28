const cars = {
    mercedes : {
        name: 'Mercedes',
        engine: 'mercedes',
        pilots: {
            hamilton: {
                name: 'Lewis Hamilton',
                country: 'United Kingdom',
                num: 44
            },
            bottas: {
                name: 'Valtteri Bottas',
                country: 'Finland',
                num: 77
            }
        }
    },
    redbull : {
        name: 'Red Bull Racing',
        engine: 'honda',
        pilots: {
            verstappen: {
                name: 'Max Verstappen',
                country: 'Netherlands',
                num: 33
            },
            perez: {
                name: 'Sergio Perez',
                country: 'Mexico',
                num: 11
            }
        }
    },
    alpine : {
        name: 'Alpine',
        engine: 'renault',
        pilots: {
            alonzo: {
                name: 'Fernando Alonso',
                country: 'Spain',
                num: 14
            },
            ocon: {
                name: 'Esteban Ocon',
                country: 'France',
                num: 31
            }
        }
    },
    haas : {
        name: 'Haas F1 Team',
        engine: 'ferrari',
        pilots: {
            schumacher: {
                name: 'Mick Schumacher',
                country: 'Germany',
                num: 47
            },
            mazepin: {
                name: 'Nikita Mazepin',
                country: 'Russian',
                num: 9
            }
        }
    },
    mclaren : {
        name: 'McLaren',
        engine: 'mercedes',
        pilots: {
            norris: {
                name: 'Lando Norris',
                country: 'United Kingdom',
                num: 4
            },
            ricciardo: {
                name: 'Daniel Ricciardo',
                country: 'Australia',
                num: 3
            }
        }
    },
    alfa : {
        name: 'Alfa Romeo Racing',
        engine: 'ferrari',
        pilots: {
            raikkonen: {
                name: 'Kimi Räikkönen',
                country: 'Finland',
                num: 7
            },
            giovinazzi: {
                name: 'Antonio Giovinazzi',
                country: 'Italy',
                num: 99
            }
        }
    },
    aston : {
        name: 'Aston Martin',
        engine: 'mercedes',
        pilots: {
            vettel: {
                name: 'Sebastian Vettel',
                country: 'Germany',
                num: 5
            },
            stoll: {
                name: 'Lance Stoll',
                country: 'Canada',
                num: 18
            }
        }
    },
    ferrari : {
        name: 'Ferrari',
        engine: 'ferrari',
        pilots: {
            leclerc: {
                name: 'Charles Leclerc',
                country: 'Monaco',
                num: 16
            },
            sainz: {
                name: 'Carlos Sainz',
                country: 'Spain',
                num: 55
            }
        }
    },
    alphatauri : {
        name: 'AlphaTauri',
        engine: 'honda',
        pilots: {
            gasly: {
                name: 'Pierre Gasly',
                country: 'France',
                num: 10
            },
            tsunoda: {
                name: 'Yuki Tsunoda',
                country: 'Japan',
                num: 22
            }
        }
    },
    williams : {
        name: 'Williams',
        engine: 'mercedes',
        pilots: {
            russell: {
                name: 'George Russell',
                country: 'United Kingdom',
                num: 63
            },
            latifi: {
                name: 'Nicholas Latifi',
                country: 'Canada',
                num: 6
            }
        }
    }
}

export function getCars () {
    return cars
}
