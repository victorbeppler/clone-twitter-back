import { query } from "express";
import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class Like {
    async adicionar(idTweet) {
        const tweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        const likes = tweet.likes + 1;
        const query = { likes: likes };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
    async remover(idTweet) {
        const tweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        const likes = tweet.likes - 1;
        const query = { likes: likes };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
}
