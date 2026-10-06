const  Amostras = []

export function cadastrar(Amostra) {
  Amostras.push(Amostra);
}

export function listar() {
    return Amostras;
}

export function buscarPorIndice(indice) {
 Amostras[indice] = Amostra;
}

export function excluir(indice) {
   Amostras.splice(indice, 1);
}