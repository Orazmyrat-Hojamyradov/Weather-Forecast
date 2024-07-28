import "../styles/Location.scss";
import useLocations from "../api/LocationsAPI";
import LiveTime from "./LiveTime";

export default function Location() {
  const { currentConditionsQuery } = useLocations();
  const { data: currentConditions, error, isLoading } = currentConditionsQuery;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="location-box">
      {currentConditions && (
        <div className="temperature">
          {currentConditions?.Temperature.Metric.Value}°
          {currentConditions?.Temperature.Metric.Unit}
        </div>
      )}
      <div className="location-date-time">
        <LiveTime />
      </div>
    </div>
  );
}
