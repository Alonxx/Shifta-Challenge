import { Router, Request, Response } from "express";
import { getCities } from "../controllers/cities";

const cities = Router();

cities.get("/", getCities);

export default cities;
