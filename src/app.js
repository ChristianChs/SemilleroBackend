import express from "express"
import morgan from "morgan";
import sensorRoutes from "./routes/sensors.routes.js"
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use("/api",sensorRoutes);

export default app;