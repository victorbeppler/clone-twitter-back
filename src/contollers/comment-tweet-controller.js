import { CommentTweet } from "../caso-de-uso/comment.js";

export class CommentTweetContoller {
    async handle(req, res) {
        const idTweet = req.params.tweetId;
        await new CommentTweet().adicionar(idTweet);
        return res.status(200).send("Comentário adiciona com sucesso!");
    }
}
