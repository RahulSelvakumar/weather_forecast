import { createContext, useContext, useState } from "react";
import { getWeatherData } from "../api";
export const weatherContext= createContext(null);

export const useWeather=()=>{
    return(useContext(weatherContext))
};

export const WeatherPovider=(props)=>{
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState(null);
    const fetchData= async ()=>{
        const response= await getWeatherData(searchCity);
        setData(response);
    }
    return(
    <weatherContext.Provider value={{data,searchCity,setSearchCity,fetchData}}>
        {props.children}
    </weatherContext.Provider>
)};