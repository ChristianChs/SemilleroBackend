import {Router} from "express";
import { storeSensorData } from "../controllers/sensors.controller.js";

const router = Router();

router.get("/sensors",(req,res)=>res.send("Hola"))

router.post("/sensors",storeSensorData);

export default router;
