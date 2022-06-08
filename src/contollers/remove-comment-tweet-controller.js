import { CommentTweet } from "../caso-de-uso/comment.js";

export class CommentRemoveTweetContoller {
    async handle(req, res) {
        const idTweet = req.params.tweetId;
        await new CommentTweet().remover(idTweet);
        return res.status(200).send("Comentário adiciona com sucesso!");
    }
}
