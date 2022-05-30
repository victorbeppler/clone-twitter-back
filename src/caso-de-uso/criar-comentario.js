import { ComentariosRepositorio } from "../db/repositorio/comentarios-repositorio.js";

export class CriarComentario {
    async executar(data) {
        const comentarioCriado = await new ComentariosRepositorio().criarComentario(data);
        return comentarioCriado;
    }
}
