import { useEffect, useState } from "react";
import getCovidData from "./utils/GetCovidData";

const CovidDashboard = () => {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        getCovidData()
        .then((data) => setCountriesData(data))
        .catch((error) => window.alert(error))
        }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <td>Country</td>
                        <td>Daily confirmed</td>
                        <td>Total confirmed</td>
                    </tr>
                </thead>
                <tbody>
                    {countriesData ? (
                        countriesData.map((countryData)=> (
                        <tr>
                            <td>{countryData.countryName}</td>
                            <td>{countryData.dailyConfirmed}</td>
                            <td>{countryData.totalConfirmed}</td>
                        </tr>
                        ))
                    ) : (
                        <div>Data Not available. Come Back Later</div>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default CovidDashboard;