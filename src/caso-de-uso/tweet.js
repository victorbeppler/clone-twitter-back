import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";


export class Tweet {
    async criar(data) {
        const comentarioCriado = await new TweetRepositorio().criarTweet(data);
        return comentarioCriado;
    }
    async consultar() {
        return await new TweetRepositorio().consultarTweet();
    }
}
