import sunny_icon from "../Assets/sunny.png";
import cloudy_icon from "../Assets/cloudy.png";
import rainy_icon from "../Assets/rainy.png";
import snowy_icon from "../Assets/snowy.png";
import thunderstorm_icon  from "../Assets/thunderstorm.png";

const Forecast = ({ forecast, getIconImage }) => {
  const data = JSON.parse(forecast)

  const convertToDay = (date) => {
    const newDate = new Date(date)
    const dayOfWeek = newDate.getDay()
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const actualDay = days[dayOfWeek];
    return actualDay
  }

  return (
    <>
      <div className="flex justify-center my-6">
        <h1 className="text-white font-medium text-4xl">5-Day Forecast</h1>
      </div>

      <div className="flex flex-row my-10 p-2 text-white">
        {data.map((day, i) => (
          
          <div className="flex flex-row w-full align-center justify-center" key={i}>
            <div className="flex flex-col">
              <div className="flex flex-row w-full justify-center">
                <img src={day.icon ? day.icon : sunny_icon} className="h-14 w-14 align-center justify-center"/>
              </div>
              
              <h4 className="text-2xl font-medium p-2">{convertToDay(day.Date)}</h4>
              
              <p className="p-1">Min: {day.temp_min ? day.temp_min : '0'} °C</p>
              <p className="p-1">Max: {day.temp_max ? day.temp_max : '0'} °C</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Forecast