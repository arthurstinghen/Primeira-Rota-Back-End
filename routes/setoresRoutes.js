import express from "express";
import {cadastrarSetores} from "../controller/setoresController.js"

const router = express.Router();

router.post("/", cadastrarSetores);

export default router;