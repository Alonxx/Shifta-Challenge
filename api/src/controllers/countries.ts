import { Request, Response } from "express";
import axios from "axios";
import { TCountries, TCountriesAPI } from "../models/index";

export const getCountries = async (req: Request, res: Response) => {
  const { country } = req.query;

  try {
    let countriesSearch = await axios.get(
      `http://geodb-free-service.wirefreethought.com/v1/geo/countries?limit=2&offset=0&namePrefix=${country}&languageCode=es`
    );

    let countriesData: TCountriesAPI[] = countriesSearch.data.data;

    let countriesFormat: TCountries[] = countriesData.map((country) => ({
      code: country.code,
      name: country.name,
    }));

    return res.status(200).send(countriesFormat);
  } catch (error) {
    return res.status(400).send(error);
  }
};
