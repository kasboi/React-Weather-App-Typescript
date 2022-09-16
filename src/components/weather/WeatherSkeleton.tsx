import "./CurrentWeather.css"

import React from "react"

export default function WeatherSkeleton() {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Lagos, NG</p>
                    <p className="weather-description">Sunny AF</p>
                </div>
                <img
                    src="icons/01d.png"
                    alt="weather"
                    className="weather-icon"
                />
            </div>
            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">22°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">2%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">2 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
