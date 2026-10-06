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

export function atualizarAmostra(req, res){
    const indice = Number(req.params.indice);

    const Amostra = buscarporIndice(indice);

    if(!Amostra) {
        return res.status(404).json({
            mensagem : "Amostra não encontrada"
        });
    }
    
    const {codigo, material, origem, resultado} = req.body;

    if (descricao !== undefined){
        Amostra.descricao = descricao;
    }

    if (preco !== undefined){
        Amostra.preco = preco;
    }
     if (peso !== undefined){
        Amostra.peso = peso;
    }

    atualizar(indice, Amostra);

    res.status(200).json(Amostra);
    

    }
}