import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useStore from "../store/store";
import {
  UseLocationsReturn,
  CurrentConditions,
  Forecast,
  Location,
} from "../models/model";

const API_KEY = "2FpbsbZkm2BVO6O4m9cBRi1kOs0JZkG0";


async function fetchLocations(q: string): Promise<Location[]> {
  const response = await axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
    {
      params: {
        apikey: API_KEY,
        q,
      },
    }
  );
  return response.data;
}


async function fetchForecast(cityKey: number): Promise<Forecast> {
  const response = await axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`,
    {
      params: {
        apikey: API_KEY,
        metric: true,
      },
    }
  );
  return response.data;
}

async function fetchCurrentConditions(
  cityKey: number
): Promise<CurrentConditions> {
  const response = await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`,
    {
      params: {
        apikey: API_KEY,
      },
    }
  );
  return response.data[0];
}

export default function useLocations(q?: any, Key?: any): UseLocationsReturn {
  const { cityKey, setKey } = useStore((state) => ({
    cityKey: state.cityKey,
    setKey: state.setKey,
  }));

  const locationsQuery = useQuery<Location[], unknown>({
    queryKey: ["locations", q],
    enabled: !!q,
    queryFn: () => fetchLocations(q!),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (locationsQuery.data && locationsQuery.data.length > 0) {
      setKey(Number(locationsQuery.data[0].Key));
    }
  }, [locationsQuery.data]);

  const forecastQuery = useQuery<Forecast, unknown>({
    queryKey: ["forecast", cityKey],
    enabled: !!cityKey,
    queryFn: () => fetchForecast(cityKey),
    refetchOnWindowFocus: false,
  });

  const currentConditionsQuery = useQuery({
    queryKey: ["currentConditions", cityKey],
    enabled: !!cityKey,
    queryFn: () => fetchCurrentConditions(cityKey),
    refetchOnWindowFocus: false,
  });

  return { locationsQuery, forecastQuery, currentConditionsQuery };
}
