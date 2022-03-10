export type TWeatherReport = {
  humidity: number;
  windSpeed: number;
  temp: number;
  description: {
    icon: string;
    code: number;
    description: string;
  };
  precip: number;
  city: string;
};

export type TCountries = {
  name: string;
  code: string;
};

export type TCities = {
  city: string;
  countryCode: string;
};

export type TCitiesAPI = {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
};

export type TCountriesAPI = {
  name: string;
  code: string;
  currencyCodes: string[];
  wikiDataId: string;
};

export type TWeatherAPI = {
  rh: number;
  pod: string;
  lon: number;
  pres: number;
  timezone: string;
  ob_time: string;
  country_code: string;
  clouds: number;
  ts: number;
  solar_rad: number;
  state_code: number;
  city_name: string;
  wind_spd: number;
  wind_cdir_full: string;
  wind_cdir: string;
  slp: number;
  vis: number;
  h_angle: number;
  sunset: string;
  dni: number;
  dewpt: number;
  snow: number;
  uv: number;
  precip: number;
  wind_dir: number;
  sunrise: string;
  ghi: number;
  dhi: number;
  aqi: number;
  lat: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  datetime: string;
  temp: number;
  station: string;
  elev_angle: number;
  app_temp: number;
};
