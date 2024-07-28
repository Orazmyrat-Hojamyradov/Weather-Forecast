import { UseQueryResult } from "@tanstack/react-query";

export interface Location {
  Key: string;
  LocalizedName: string;
}

export interface Forecast {
  Headline: {
    Text: string;
  };
  DailyForecasts: {
    Date: string;
    Temperature: {
      Minimum: { Value: number; Unit: string };
      Maximum: { Value: number; Unit: string };
    };
    Day: {
      Icon: number;
      IconPhrase: string;
      HasPrecipitation: boolean;
      Wind: {
        Speed: {
          Value: number;
          Unit: string;
        };
      };
    };
  }[];
}

export interface CurrentConditions {
  LocalObservationDateTime: string;
  WeatherText: string;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
}

export interface UseLocationsReturn {
  locationsQuery: UseQueryResult<Location[]>;
  forecastQuery: UseQueryResult<Forecast, unknown>;
  currentConditionsQuery: UseQueryResult<CurrentConditions, unknown>;
}
