import {QueryTypes} from "sequelize";
import sequelize from "./db.js";

const model = {};

model.saveDataSensor = async(data)=>{
    const {hum , temp} = data;
    console.log(hum,temp);
    return sequelize.query("CALL saveDataSensor(:hum,:temp)",
    {
        replacements:{hum,temp},
        type:QueryTypes.RAW
    }).then((result)=>{
        return result
    })
}

export default model;