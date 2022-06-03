import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class ConsultaComentarios {
    async executar() {
        return await new TweetRepositorio().consultarTweet();
    }
}
