import { Router, Request, Response } from "express";
import { getCountries } from "../controllers/countries";

const countries = Router();

countries.get("/", getCountries);

export default countries;
