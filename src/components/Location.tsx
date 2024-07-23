import "../styles/Location.scss"

export default function Location() {
  return (
    <div className="location-box">
      <div className="temperature">16°</div>
      <div className="location-date-time">
        <span className="location">London</span>
        <span className="date-time">06:09 - Monday, 9 Sep ‘23</span>
      </div>
      <img className="location-icon" src="icons/Cloudy.png" alt="" />
    </div>
  );
}
