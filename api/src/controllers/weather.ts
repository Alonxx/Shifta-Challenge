import axios from "axios";
import { Request, Response } from "express";
import { TWeatherReport, TWeatherAPI } from "../models/index";

export const getWeather = async (req: Request, res: Response) => {
  const { city, countryCode } = req.query;

  try {
    let weatherResponse = await axios.get(
      `http://api.weatherbit.io/v2.0/current?&city=${city}&country=${countryCode}&lang=es&key=ff4ed3ca91434d018ac1c7ba73aa3075`
    );

    let weatherData: TWeatherAPI[] = weatherResponse.data.data;

    if (Array.isArray(weatherData)) {
      let weather: TWeatherReport[] = weatherData.map((weather) => ({
        humidity: weather.rh,
        windSpeed: weather.wind_spd * 3.6,
        temp: weather.temp,
        description: weather.weather,
        precip: weather.precip,
        city: weather.city_name,
      }));

      return res.status(200).send(weather[0]);
    } else {
      return res.status(400).send("Ciudad no encontrada");
    }
  } catch (error) {
    console.log(error);
  }
};
