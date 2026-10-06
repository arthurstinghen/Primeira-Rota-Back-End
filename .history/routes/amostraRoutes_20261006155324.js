import express from "express";
import { 
    cadastraramostra
    ,
    listartodos,
    atualizaramostra
    ,
    deletaramostra
    ,
    buscaramostra
    PorIndice
} from "../controller/amostra
Controller.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastraramostra
    
);
router.get("/", listartodos);
router.patch("/:indice", atualizaramostra
    
);
router.delete("/:indice", deletaramostra
    
);
router.get("/:indice", buscaramostra
    PorIndice)

//Declara que se chamar as rotas POST,GET,PATCH,DELETE vai executar as funçoes do controller

export default router;
//Torna publica a rota dentro do backend
