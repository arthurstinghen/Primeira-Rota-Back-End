import { Amostra } from "./model/Amostra.js"
import { cadastrar, listar, buscarPorIndice, excluir} from "../repository/amostraRepository.js"

export function cadastrarAmostra(req, res) {
    const {codigo, resultado, origem, resultado} = req.body;

    const amostra = new Amostra(codigo, resultado, origem, resultado);

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
    
    const {codigo, resultado, origem, resultado} = req.body;

    if (codigo !== undefined){
        Amostra.codigo = codigo;
    }

    if (resultado !== undefined){
        Amostra.resultado = resultado;
    }
     if (origem !== undefined){
        Amostra.origem = origem;
    }

     if (resultado !== undefined){
        Amostra.resultado = resultado;
    }
    
     
    atualizar(indice, Amostra);

    res.status(200).json(Amostra);
    

    }
}