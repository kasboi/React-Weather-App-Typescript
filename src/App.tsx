import reactLogo from "./assets/react.svg"
import "./App.css"
import Search from "./components/search/Search"
import CurrentWeather from "./components/weather/CurrentWeather"
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api"
import { useState } from "react"

type searchDataType = {
    latitude: string
    longitude: string
    label: string
}

function App() {
    const [curWeather, setCurWeather] = useState(null)
    const [forecast, setForecast] = useState<object | null>(null)

    const handleOnSearchChange = async (searchData: searchDataType) => {
        const lat = searchData.latitude
        const long = searchData.longitude
        try {
            const weatherFetch = await fetch(
                `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
            )
            const forecastFetch = await fetch(
                `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
            )

            const weatherRes = await weatherFetch.json()
            const forecastRes = await forecastFetch.json()

            setCurWeather({ city: searchData.label, ...weatherRes })
            setForecast({ city: searchData.label, ...forecastRes })
        } catch (error) {
            console.error(error)
        }
    }

    console.log(curWeather)
    console.log(forecast)

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    )
}

export default App
