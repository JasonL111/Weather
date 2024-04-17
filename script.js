getWeatherData = async (city) => {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
    const options = {
        method: 'GET',
        headers: {
            // You should paste your API key here
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let WeatherData={
            city:result.location.city,
            weather:result.current_observation.condition.text,
            temperature:result.current_observation.condition.temperature,
            high:result.forecasts[0].high,
            low:result.forecasts[0].low

        }
        console.log(result);
        return WeatherData
    } catch (error) {
        console.error(error);
    }
}
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  WeatherData=await getWeatherData(city)
  showWeatherData(WeatherData)
}
const showWeatherData = (WeatherData) => {
  let CityName=document.getElementById("city-name")
  let CityWeather=document.getElementById("weather-type")
  let CityTemp=document.getElementById("temp")
  let CityLowTemp=document.getElementById("min-temp")
  let CityHighTemp=document.getElementById("max-temp")
  CityName.innerText=`${WeatherData.city}`
  CityWeather.innerText=`${WeatherData.weather}`
  CityTemp.innerText=`${WeatherData.temperature}`
  CityLowTemp.innerText=`${WeatherData.low}`
  CityHighTemp.innerText=`${WeatherData.high}`
  
}

