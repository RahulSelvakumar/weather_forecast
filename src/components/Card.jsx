import React from "react";
import { useWeather } from "../context/Weather";
const Card=()=>{
    const weather=useWeather();
    return(
    <div className="card">
        <img src={weather?.data?.current.condition.icon}></img>
        <h4>{weather?.data?.current.temp_c} °C</h4>
        <h4>{weather?.data?.location.name}, {weather?.data?.location.region}</h4>
        <h4>{weather?.data?.location.country}</h4>
    </div>
)}

export default Card;