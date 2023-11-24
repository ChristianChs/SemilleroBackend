import Sensors from "../models/sensors.model.js";

export const storeSensorData = async (req,res)=>{
    const result =await Sensors.saveDataSensor(req.body)
    return res.send("Success")
}