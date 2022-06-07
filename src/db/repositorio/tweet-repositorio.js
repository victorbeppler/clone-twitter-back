import { TweetModel } from "../../model/tweet-model.js";
import { DbTweet } from "../esquemas/esquema-tweet.js";

export class TweetRepositorio {
    async criarTweet(data) {
        const comentarioFormatado = new TweetModel(data);
        const comentario = new DbTweet(comentarioFormatado);
        return await DbTweet.insertMany(comentario);
    }
    async consultarTweet() {
        return await DbTweet.find({});
    }
    async consultarTweetPorId(id) {
        return await DbTweet.findById(id);
    }
    async atualizarTweetPorId(id, query) {
        return await DbTweet.findByIdAndUpdate(id, query);
    }
    
}
