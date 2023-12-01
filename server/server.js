import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
const mongoose_uri = process.env.MONGO_URI;

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", workoutRoutes);

mongoose
  .connect(mongoose_uri)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.log(error.message));
