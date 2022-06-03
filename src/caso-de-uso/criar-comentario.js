import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class criarTweet {
    async executar(data) {
        const comentarioCriado = await new TweetRepositorio().criarTweet(data);
        return comentarioCriado;
    }
}
