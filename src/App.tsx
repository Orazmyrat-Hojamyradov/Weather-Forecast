import Location from "./components/Location";
import Navbar from "./components/Navbar";
import WeatherDetails from "./components/WeatherDetails";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <img className="bg-img" src="/images/bg-weather.png" alt="background" />
        <Location />
        <WeatherDetails />
      </div>
    </>
  );
}

export default App;
