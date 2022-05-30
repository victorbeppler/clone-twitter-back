import { ComentariosRepositorio } from "../db/repositorio/comentarios-repositorio.js";

export class ConsultaComentarios {
    async executar() {
        return await new ComentariosRepositorio().consultarComentarios();
    }
}
