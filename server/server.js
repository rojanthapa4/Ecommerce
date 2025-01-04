import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to mern stack app</h1></h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//listening
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
