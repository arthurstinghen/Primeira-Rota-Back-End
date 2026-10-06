import { Amostra } from "./model/Amostra.js"
import { cadastrar, listar, buscarPorIndice, excluir} from "../repository/amostraRepository.js"

export function cadastrarAmostra(req, res) {
    const {codigo, material, origem, resultado} = req.body;

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(Amostra);

    res.status(201).json(amostra);
}

export function listartodos(req, res){
    const Amostras= listar();

    res.status(200).json(Amostras);
}

export function atualizar(req, res){
    const indice = Number(req.params.indice);

    const  = buscarporIndice(indice);

    if(!) {
        return res.status(404).json({
            mensagem : " não encontrado"
        });
    }
    
    const {descricao, preco, peso} = req.body;

    if (descricao !== undefined){
        .descricao = descricao;
    }

    if (preco !== undefined){
        .preco = preco;
    }
     if (peso !== undefined){
        .peso = peso;
    }

    atualizar(indice, );

    res.status(200).json();
    

    }
}