import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import WeatherDetails from "./components/WeatherDetails";
import "./styles/App.scss";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="main">
        <img className="bg-img" src="/images/bg-weather.png" alt="background" />
        <Location />
        <WeatherDetails />
      </div>
    </QueryClientProvider>
  );
}

export default App;
