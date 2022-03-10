import { Request, Response } from "express";
import axios from "axios";
import { TCities, TCitiesAPI } from "../models/index";

export const getCities = async (req: Request, res: Response) => {
  const { city, countryCode } = req.query;

  try {
    let citiesSearch = await axios.get(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=2&offset=0&namePrefix=${city}`
    );

    let citiesData: TCitiesAPI[] = citiesSearch.data.data;

    if (Array.isArray(citiesData)) {
      let citiesFilter = citiesData.filter(
        (city) => city.countryCode === countryCode
      );

      let citiesResult: TCities[] = citiesFilter.map((city) => ({
        city: city.city,
        countryCode: city.countryCode,
      }));

      return res.status(200).send(citiesResult);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
