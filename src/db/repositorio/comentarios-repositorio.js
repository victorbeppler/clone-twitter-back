import { DbComentario } from "../esquemas/esquema-comentarios.js";

export class ComentariosRepositorio {
    async criarComentario(data) {
        const comentario = new DbComentario(data);
        return await DbComentario.insertMany(comentario);
    }
    async consultarComentarios() {
        return await DbComentario.find({});
    }
}
