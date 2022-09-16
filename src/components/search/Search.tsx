import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, GEO_API_URL } from "../api"

type cityObj = {
    latitude: number
    longitude: number
    name: string
    countryCode: string
}

async function loadOptions(inputValue: string) {
    const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
    )
    const resJson = await response.json()
    return {
        options: resJson.data.map((city: cityObj) => {
            return {
                latitude: `${city.latitude}`,
                longitude: `${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
            }
        })
    }
}

export default function Search({ onSearchChange }: any) {
    const [search, setSearch] = useState(null)

    const handleChange = (searchData: any) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
        <AsyncPaginate
            placeholder="Search for city..."
            debounceTimeout={600}
            value={search}
            loadOptions={loadOptions}
            onChange={handleChange}
        />
    )
}
