

import express, { Router } from "express";
import policeRouter from "./routes/police.js";
import 'dotenv/config';
// import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";



const policeApp = express();
policeApp.use(express.json());

dbConnection()

policeApp.use (policeRouter);

policeApp.listen(8080, () => {
    console.log('App listening on port 8080')
});

