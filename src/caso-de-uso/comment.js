import { TweetRepositorio } from "../db/repositorio/tweet-repositorio.js";

export class CommentTweet {
    async adicionar(idTweet) {
        const consultaTweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        const comments = consultaTweet.comments + 1;
        const query = { comments: comments };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
    async remover(idTweet) {
        const consultaTweet = await new TweetRepositorio().consultarTweetPorId(idTweet);
        const comments = consultaTweet.comments - 1;
        const query = { comments: comments };
        const tweetAtualizado = await new TweetRepositorio().atualizarTweetPorId(idTweet, query);
        return tweetAtualizado;
    }
}
