const getCovidData = () => {
    return fetch(

        // "https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=GB"

        "https://api.coronatracker.com/v3/stats/worldometer/country"

        )
        .then((response => response.json()))
    }

    export default getCovidData;
