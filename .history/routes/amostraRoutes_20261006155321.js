import express from "express";
import { 
    cadastraram,
    listartodos,
    atualizaram,
    deletaram,
    buscaramPorIndice
} from "../controller/amController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastraram);
router.get("/", listartodos);
router.patch("/:indice", atualizaram);
router.delete("/:indice", deletaram);
router.get("/:indice", buscaramPorIndice)

//Declara que se chamar as rotas POST,GET,PATCH,DELETE vai executar as funçoes do controller

export default router;
//Torna publica a rota dentro do backend
