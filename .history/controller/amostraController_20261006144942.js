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

    res.status(200).json(a);
}

export function atualizarProduto(req, res){
    const indice = Number(req.params.indice);

    const produto = buscarporIndice(indice);

    if(!produto) {
        return res.status(404).json({
            mensagem : "Produto não encontrado"
        });
    }
    
    const {descricao, preco, peso} = req.body;

    if (descricao !== undefined){
        produto.descricao = descricao;
    }

    if (preco !== undefined){
        produto.preco = preco;
    }
     if (peso !== undefined){
        produto.peso = peso;
    }

    atualizar(indice, produto);

    res.status(200).json(produto);
    

    }
}