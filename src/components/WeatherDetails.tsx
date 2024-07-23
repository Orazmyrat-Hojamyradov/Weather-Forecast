import "../styles/WeatherDetails.scss";

export default function WeatherDetails() {
  return (
    <div className="details-main">
      <div className="details">
        <h3 className="header">Weather Details...</h3>
        <div className="details-content">
          <span className="content-title">Thunderstorm with light drizzle</span>
          <div className="info">Temp max</div>
          <div className="info">Temp min</div>
          <div className="info">Humadity</div>
          <div className="info">Cloudy</div>
          <div className="info">Wind</div>
          <br />
          <hr></hr>
        </div>
        <div className="details-forecast">
          <h3 className="forecast-title">Today's Weather Forecast...</h3>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>

          <div className="forecast">
            <div className="forecast-box">
              <img src="icons/Snow.svg" alt="icon" className="forecast-icon" />

              <span className="time">
                9:00 <br /> Cloudy
              </span>
            </div>
            <span className="details-temp">19°</span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
