import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class Retweetar {
    async adicionar(idTweet) {
        const consultaTweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        console.log(consultaTweet);
        const retweets = consultaTweet.retweets + 1;
        const query = { retweets: retweets };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
    async remover(idTweet) {
        const consultaTweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        const retweets = consultaTweet.retweets - 1;
        const query = { retweets: retweets };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
}
