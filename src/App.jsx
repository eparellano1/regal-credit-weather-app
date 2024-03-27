import './App.css'
import Weather from './Components/Weather'
import Forecast from './Components/Forecast'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import sunny_icon from "./Assets/sunny.png";
import cloudy_icon from "./Assets/cloudy.png";
import rainy_icon from "./Assets/rainy.png";
import snowy_icon from "./Assets/snowy.png";
import sunny_rainy_icon from "./Assets/sun_with_rain.png";
import thunderstorm_icon  from "./Assets/thunderstorm.png";

function App() {
  let [city, setCity] = useState('')
  let [temperature, setTemperature] = useState('')
  let [wicon,setWicon] = useState(sunny_icon)
  let [weatherStatus, setWeatherStatus] = useState('')
  let [forecast, setForecast] = useState([{
    date: '', temp_min: 0, temp_max: 0, icon: sunny_icon
  }])

  const api_key = import.meta.env.VITE_REACT_APP_API_KEY

  const search = async () => {
    const city = document.getElementById("search-city").value || 'Manila'
    if (city === "") return 
    
    // get city locationKey
    let url = `http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${api_key}`
    let response = await fetch(url)
    let data = await response.json()

    if(data.length > 0) {
      const locationKey = data[0].Key
      const locationName = data[0].EnglishName
      await getCurrentConditions(locationKey)
      await getDayForecast(locationKey)
      setCity(locationName)
    } else return 
  }

  // render default search Manila
  useEffect(() => {
    search()
  }, []);

  // get icon image according to icon number from api
  const getIconImage = (icon) => {
    switch(true) {
      case (icon >= 1 && icon <= 5):
      case (icon >= 33 && icon <= 36):
        return sunny_icon; 
      case (icon >= 6 && icon <= 11): 
      case (icon >= 19 && icon <= 23):
      case (icon >= 37 && icon <= 38):
      case (icon >= 43 && icon <= 44):
        return cloudy_icon;
      case icon === 12:
        return rainy_icon
      case (icon >= 13 && icon <= 17):
      case (icon >= 39 && icon <= 42):  
        return sunny_rainy_icon  
      case icon === 18:
        return thunderstorm_icon
      case (icon >= 24 && icon <= 29):
        return snowy_icon
      default:
        return sunny_icon
    }
  }

  // get city current conditions
  const getCurrentConditions = async (locationKey) => {
    let url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${api_key}`
    let response = await fetch(url)
    let data = await response.json()
    const { Temperature, WeatherText, WeatherIcon } = data[0]
    setTemperature(Temperature.Metric.Value)
    setWeatherStatus(WeatherText)
    setWicon(getIconImage(WeatherIcon))
  }

  // get 5 day forecast for city
  const getDayForecast = async (locationKey) => {
    let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${api_key}&metric=true`
    let response = await fetch(url)
    let data = await response.json()
    setForecast(data.DailyForecasts.map(forecast => ({
      date: forecast.Date,
      temp_min: forecast.Temperature.Minimum.Value,
      temp_max: forecast.Temperature.Maximum.Value,
      icon: getIconImage(forecast.Day.Icon)
    })))
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }}
        className='mx-auto max-w-5xl my-4 py-5 px-12 bg-gradient-to-b from-purple-900 to-indigo-700 rounded-xl 
          h-full shadow-xl text-center max-h-screen shadow-gray-400 object-center'>
        <Weather search={search} getIconImage={getIconImage} city={city} temperature={temperature} 
          weatherStatus={weatherStatus} wicon={wicon}/>
        <Forecast forecast={JSON.stringify(forecast)} getIconImage={getIconImage}/>
      </motion.div>
    </>
  )
}

export default App
