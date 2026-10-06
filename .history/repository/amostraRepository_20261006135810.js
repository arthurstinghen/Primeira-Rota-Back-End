const  Amostras = []

export function cadastrar(Usuario) {
   Usuarios.push(Usuario);
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