import { query } from "express";
import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class Like {
    async adicionar(data) {
        const idtweet = data.idTweet;
        const tweet = await new TweetRepositorio().consultarTweetPorId(idtweet);
        const likes = tweet.likes + 1;
        const query = { likes: likes };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idtweet, query);
        return tweetAtualizado;
    }
    async remover(data) {
        const idtweet = data.idTweet;
        const tweet = await new TweetRepositorio().consultarTweetPorId(idtweet);
        const likes = tweet.likes - 1;
        const query = { likes: likes };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idtweet, query);
        return tweetAtualizado;
    }
}
