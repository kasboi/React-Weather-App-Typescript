import "./Forecast.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion"

type itemType = {
    weather: any[]
    main: {
        temp_max: number
        temp_min: number
        pressure: number
        humidity: number
        sea_level: number
        feels_like: string
    }
    clouds: {
        all: number
    }
    wind: {
        speed: number
    }
}

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
export default function Forecast({ data }: any) {
    const dayInAWeek = new Date().getDay()
    //5-DAY WEATHER FORECAST
    const forecastDays = WEEK_DAYS.slice(dayInAWeek - 1, WEEK_DAYS.length)
        .concat(WEEK_DAYS)
        .slice(0, 5)
    let forecastData: any[] = []

    data.list.forEach((item: any, index: number) => {
        if (index % 8 == 0) {
            forecastData.push(item)
        }
    })
    console.log(forecastData)

    return (
        <>
            <label className="title">5 Day Forecast</label>
            <Accordion allowZeroExpanded>
                {forecastData.map((item: itemType, idx: number) => {
                    return (
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img
                                            src={`icons/${item.weather[0].icon}.png`}
                                            className="icon-small"
                                            alt="weather"
                                        />
                                        <label className="day">
                                            {forecastDays[idx]}
                                        </label>
                                        <label className="description">
                                            {item.weather[0].description}
                                        </label>
                                        <label className="min-max">
                                            {Math.round(item.main.temp_max)}
                                            °C /{Math.round(item.main.temp_min)}
                                            °C
                                        </label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="daily-details-grid">
                                    <div className="daily-details-grid-item">
                                        <label>Pressure:</label>
                                        <label>{item.main.pressure}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Humidity:</label>
                                        <label>{item.main.humidity}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Clouds:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Wind speed:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Sea level:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Feels like:</label>
                                        <label>{item.main.feels_like}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
}
