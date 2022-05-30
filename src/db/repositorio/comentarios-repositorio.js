import { TweetModel } from "../../model/tweet-model.js";
import { DbTweet } from "../esquemas/esquema-tweet.js";

export class ComentariosRepositorio {
    async criarComentario(data) {
        const comentarioFormatado = new TweetModel(data);
        const comentario = new DbTweet(comentarioFormatado);
        return await DbTweet.insertMany(comentario);
    }
    async consultarComentarios() {
        return await DbTweet.find({});
    }
}
