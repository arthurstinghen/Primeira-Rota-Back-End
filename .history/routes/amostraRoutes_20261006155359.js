import express from "express";
import { 
    cadastrara,
    listartodos,
    atualizara,
    deletara,
    buscaraPorIndice
} from "../controller/aController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrara);
router.get("/", listartodos);
router.patch("/:indice", atualizara);
router.delete("/:indice", deletara);
router.get("/:indice", buscaraPorIndice)

//Declara que se chamar as rotas POST,GET,PATCH,DELETE vai executar as funçoes do controller

export default router;
//Torna publica a rota dentro do backend
