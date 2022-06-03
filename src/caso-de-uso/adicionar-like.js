import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class AdicionarLike {
    async executar(data) {
        const idtweet = data.idComentario;
        const tweet = await TweetRepositorio().consultarTweetPorId(idtweet);
        const likes = tweet.likes + 1;
        const tweetAtualizado = await TweetRepositorio().atualizarTweet(idtweet, likes);
        return tweetAtualizado;
    }
}
