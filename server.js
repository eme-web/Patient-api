import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import routes from "./routes.js"
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use("/clinicalapi", routes)

app.listen(port, () => console.log(`Server started on port ${port}`));