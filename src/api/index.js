export const getWeatherData=async (city)=>{
    const response= await fetch(` https://api.weatherapi.com/v1/current.json?key=26021b97a25e4390bac150105231407&q=${city}&aqi=yes`);
    const data=await response.json()
    return data;
}