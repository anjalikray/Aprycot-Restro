import express from 'express'
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import appRouter from './routes/index.js'

config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(cors({origin:"http://localhost:5174" , credentials: true}));

app.use("/api", appRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})