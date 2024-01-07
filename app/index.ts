import express, { Application } from "express";
import v1Api from "./api/v1-api";

const app: Application = express();
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.use("/api/v1", v1Api);

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
