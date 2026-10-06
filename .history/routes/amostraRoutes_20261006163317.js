import express from "express";
import { 
    cadastrarAmostra,
    listartodos,
    atualizarAmostra,
    excluiramostra,
    buscaramostraPorIndice
} from "../controller/amostraController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarAmostra);
router.get("/", listartodos);
router.patch("/:indice", atualizarAmostra);
router.delete("/:indice",excluiramostra);
router.get("/:indice", buscaramostraPorIndice)

//Declara que se chamar as rotas POST,GET,PATCH,DELETE vai executar as funçoes do controller

export default router;
//Torna publica a rota dentro do backend
