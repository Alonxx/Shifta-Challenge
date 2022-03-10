import { Router, Request, Response } from "express";
import { getWeather } from "../controllers/weather";

const weather = Router();

weather.get("/", getWeather);

export default weather;
