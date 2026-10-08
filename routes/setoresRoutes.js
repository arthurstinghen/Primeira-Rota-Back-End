import express from "express";
import {cadastrarSetores} from "../controller/setoresController"

const router = express.Router();

router.post("/", cadastrarSetores);

export default router;