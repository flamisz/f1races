export function getResults (circuit_id, index, results) {
    fetch(`https://ergast.com/api/f1/2020/circuits/${circuit_id}/results.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            if (myJson && !! myJson.MRData.RaceTable.Races.length) {
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
            if (myJson && !! myJson.MRData.RaceTable.Races.length) {
                results(null, myJson.MRData.RaceTable.Races[index].QualifyingResults)
            } else {
                results(null, null)
            }
        })
        .catch(error => results(new Error(error)));
}
