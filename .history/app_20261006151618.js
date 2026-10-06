import express from "express";
import amostraRoutes from "./amostraRoutes.js";

const app = express();

app.use(express.json());

app.use("/")
