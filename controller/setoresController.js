import { Setores } from "../model/Setores.js"
import {
    cadastrar,
    listar,
    atualizar,
    excluir,
    buscarPorIndice
} from "../repository/setoresRepository.js"

export function cadastrarSetores(req, res) {
    const {nome, sigla, responsavel, ramal} = req.body;

    const setor = new Setores(nome, sigla, responsavel, ramal);

    cadastrar(Setores);

    res.status(201).json(setor);
}

export function listarSetores(req, res){
    const setores = listar();

    res.status(200).json(setores);
}

export function atualizarSetores(req, res){
    const indice = Number(req.params.indice);

    const Setores = buscarPorIndice(indice);

    if(!Setores) {
        return res.status(404).json({
            mensagem : "Setor não encontrado"
        });
    }
    
    const {nome, sigla, responsavel, ramal} = req.body;

    if (nome !== undefined){
        Setores.nome = nome;
    }

    if (sigla !== undefined){
        Setores.sigla = sigla;
    }
     if (responsavel !== undefined){
        Setores.responsavel = responsavel;
    }

     if (ramal !== undefined){
        Setores.ramal = ramal;
    }

     
    atualizar(indice, Setores);

    res.status(200).json(Setores);
    }

export function excluirSetor(req, res) {
        const indice = Number(req.params.indice);

        const setor = buscarPorIndice(indice);

        if(!setor){
            return res.status(404).json({
                mensagem: "setor não encontrado"
        });
        }

        excluir(indice);

        res.status(200).json({
            mensagem: "setor excluido com sucesso"
        });
        }
           
        export function buscarSetorPorIndice(req, res){
            const indice = Number(req.params.indice);

            const setor = buscarPorIndice(indice);

            if(!setor){
                return res.status(404).json({
                    mensagem: "setor nao encontrado"
                });
            }
        
    

        res.status(200).json(setor)
    
    }