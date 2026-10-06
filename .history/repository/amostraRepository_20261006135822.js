const  Amostras = []

export function cadastrar(Amostra) {
   Usuarios.push(Amostra);
}

export function listar() {
    return Usuarios;
}

export function atualizar(indice, Usuario) {
  Usuarios[indice] = Usuario;
}

export function deletar(indice) {
    Usuarios.splice(indice, 1);
}