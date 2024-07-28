import React, { useState, useEffect } from "react";
import useLocations from "../api/LocationsAPI";
import "../styles/WeatherDetails.scss";
import useStore from "../store/store";

const WeatherDetails: React.FC = () => {
  const [cityKey, setCityKey] = useState<number>(0);

  const { setKey } = useStore((state) => ({
    setKey: state.setKey,
  }));

  useEffect(() => {
    setKey(cityKey);
    setCityKey(cityKey);
  }, [setKey]);

  const { forecastQuery } = useLocations(cityKey);

  const { data: forecast, isLoading, error } = forecastQuery;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching weather data</div>;

  console.log("Forecast Data:", forecast);

  if (!forecast) {
    console.error("Invalid forecast data structure", forecast);
    return <div>No weather data available</div>;
  }

  const todayForecast = forecast.DailyForecasts[0];

  return (
    <div className="details-main">
      <div className="details">
        <h3 className="header">Weather Details...</h3>
        <div className="details-content">
          <span className="content-title">{forecast.Headline.Text}</span>
          <div className="info">
            Day: {todayForecast.Temperature.Maximum?.Value}°
            {todayForecast.Temperature.Maximum?.Unit}
          </div>
          <div className="info">
            Night: {todayForecast.Temperature.Minimum?.Value}°
            {todayForecast.Temperature.Minimum?.Unit}
          </div>
          <div className="info">Humidity: {todayForecast.Day?.IconPhrase}</div>
          <div className="info">
            Conditions: {todayForecast.Day?.HasPrecipitation ? "Yes" : "No"}
          </div>

          <br />
          <hr />
        </div>
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
                {day.Temperature.Maximum?.Value}°{day.Temperature.Maximum?.Unit}
                /{day.Temperature.Minimum?.Value}°
                {day.Temperature.Minimum?.Unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
