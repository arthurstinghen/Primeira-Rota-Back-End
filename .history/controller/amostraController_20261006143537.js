import { Amostra } from "./model/Amostra.js"
import { cadastrar, listar, buscarPorIndice, excluir} from "../repository/amostraRepository.js"

export function cadastrarAmostra(req, res) {
    const {codigo, material, origem, resultado} = req.body;

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(Amostra);

    res.status(201).json(amostra);
}

export function listarAmostra(req, res) {
    const 
}