import express from 'express'
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'

config()

const app = express();

app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin:"http://localhost:5173" , credentials: true}));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})