export function getResults (circuit_id, index, results) {
    fetch(`https://ergast.com/api/f1/2020/circuits/${circuit_id}/results.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.RaceTable.Races.length && !! myJson.MRData.RaceTable.Races[index]) {
                results(null, myJson.MRData.RaceTable.Races[index].Results)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}

export function getQualifying (circuit_id, index, results) {
    fetch(`https://ergast.com/api/f1/2020/circuits/${circuit_id}/qualifying.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.RaceTable.Races.length && !! myJson.MRData.RaceTable.Races[index]) {
                results(null, myJson.MRData.RaceTable.Races[index].QualifyingResults)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}

export function getDriver (results) {
    fetch(`https://ergast.com/api/f1/2020/driverStandings.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.StandingsTable.StandingsLists.length) {
                results(null, myJson.MRData.StandingsTable.StandingsLists[0].DriverStandings)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}

export function getConstructor (results) {
    fetch(`https://ergast.com/api/f1/2020/constructorStandings.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.StandingsTable.StandingsLists.length) {
                results(null, myJson.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}
