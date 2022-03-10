import { Router } from "express";
import weather from "./weather";
import countries from "./countries";
import cities from "./cities";
const router = Router();

router.use("/weather", weather);
router.use("/cities", cities);
router.use("/countries", countries);

export default router;
