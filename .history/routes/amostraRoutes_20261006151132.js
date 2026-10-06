import express from "express";
import { cadastrarProduto 
    listartodos,
    atualizarProduto,
    deletarProduto,
    buscarProdutoPorIndice
} from "../controller/produtoController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarProduto);
router.get("/", listartodos);
router.patch("/:indice", atualizarProduto);
router.delete("/:indice", deletarProduto);
router.get("/:indice", buscarProdutoPorIndice)

//Declara que se chamar as rotas POST,GET,PATCH,DELETE vai executar as funçoes do controller

export default router;
//Torna publica a rota dentro do backend
