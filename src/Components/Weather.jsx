
import { UilSearch, } from "@iconscout/react-unicons"
import sunny_icon from "../Assets/sunny.png";
import cloudy_icon from "../Assets/cloudy.png";
import rainy_icon from "../Assets/rainy.png";
import snowy_icon from "../Assets/snowy.png";
import thunderstorm_icon  from "../Assets/thunderstorm.png";

const Weather = ({ search, wicon, city, temperature, weatherStatus,  }) => {

  return (
    <>
      {/* SEARCH BAR */}
      <div className="flex justify-center my-4">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-8">
          <input 
                  type="text"
                  id="search-city"
                  placeholder="Enter City..."
                  className="text-xl font-light p-2 w-full shadow-xl focus:outline-none" />
          <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-110" onClick={() => {search()}}/>
          </div>
      </div>

      <div className="h-auto flex flex-row my-2">
        <div className="justify-center w-full">
          <div className="flex flex-row h-full align-center justify-center gap-12 p-5">
            <div className="flex flex-col items-center justify-center">
              <img className="w-56 h-56" src={wicon} alt="{clear icon}"/>
              <h3 className="text-4xl flex text-white my-2">{weatherStatus ? weatherStatus : '-'}</h3>
            </div>
            <div className="flex flex-col justify-center text-white my-6 w-100 px-10">
              <h1 className="text-8xl py-4 font-medium flex items-center justify-center">{temperature ? temperature : '-'} °C</h1>
              <h2 className="text-5xl flex items-center justify-center">{city ? city : '-'}</h2>
            </div>
          </div>
        </div>
      </div>
    
      <hr className="border-t border-gray-300 my-2 mx-10"/>
    </>
  )
}

export default Weather