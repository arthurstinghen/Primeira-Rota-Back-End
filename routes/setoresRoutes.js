import express from "express";
import {cadastrarSetores, 
    listarSetores,
    atualizarSetores,
    excluirSetor,
    buscarSetorPorIndice} from "../controller/setoresController.js"

const router = express.Router();

router.post("/", cadastrarSetores);
router.get("/", listarSetores);
router.patch("/:indice", atualizarSetores);
router.delete("/:indice",excluirSetor);
router.get("/:indice", buscarSetorPorIndice)

export default router;