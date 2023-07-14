import React from 'react'
import { useWeather } from '../context/Weather'
function Input(props) {
    const weather=useWeather();
  return (
    <div className="input">
        {console.log("weather",weather)}
        <input placeholder='Enter City name'
        value={weather.searchCity} 
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        ></input>
    </div>
  )
}

export default Input