import { useEffect } from "react";
import useLocations from "../api/LocationsAPI";
import "../styles/WeatherDetails.scss";
import useStore from "../store/store";
import Search from "./Search";

export default function WeatherDetails() {
  const cityKey = useStore((state) => state.cityKey);
  const setKey = useStore((state) => state.setKey);

  useEffect(() => {
    setKey(cityKey);
  }, [cityKey, setKey]);

  const { forecastQuery } = useLocations(cityKey);
  const { data: forecast, isLoading, error } = forecastQuery;

  const todayForecast = forecast?.DailyForecasts[0];

  if (todayForecast) {
    console.log(todayForecast.Date);
  } else {
    console.log("todayForecast is undefined");
  }

  return (
    <div className="details-main">
      <div className="search">
        <Search />
      </div>
      <div className="details">
        <h3 className="header">Weather Details...</h3>
        <div className="details-content">
          {isLoading && <div className="loading">Loading...</div>}

          {todayForecast ? (
            <>
              <span className="content-title">{forecast.Headline.Text}</span>
              <div className="info">
                Day: {todayForecast.Temperature.Maximum?.Value}°
                {todayForecast.Temperature.Maximum?.Unit}
              </div>
              <div className="info">
                Night: {todayForecast.Temperature.Minimum?.Value}°
                {todayForecast.Temperature.Minimum?.Unit}
              </div>
              <div className="info">
                Conditions: {todayForecast.Day?.IconPhrase}
              </div>
              <div className="info">
                Precipitations:{" "}
                {todayForecast.Day?.HasPrecipitation ? "Yes" : "No"}
              </div>
              <br />
              <hr className="line" />
            </>
          ) : (
            !isLoading &&
            !error && <div className="loading">No weather data available</div>
          )}
        </div>
        {forecast && (
          <div className="details-forecast">
            <h3 className="forecast-title">Weather Forecast for 5 days...</h3>
            {forecast.DailyForecasts.map((day, index) => (
              <div key={index} className="forecast">
                <div className="forecast-box">
                  <span className="time">
                    {new Date(day.Date).toLocaleDateString()} <br />{" "}
                    {day.Day?.IconPhrase}
                  </span>
                </div>
                <span className="details-temp">
                  {day.Temperature.Maximum?.Value}°
                  {day.Temperature.Maximum?.Unit}/
                  {day.Temperature.Minimum?.Value}°
                  {day.Temperature.Minimum?.Unit}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
