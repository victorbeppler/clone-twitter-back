import { Like } from "../caso-de-uso/like.js";

export class RemoveFavoriteTweetController {
    async handle(req, res) {
        const idTweet = req.params.tweetId;
        await new Like().remover(idTweet);
        return res.status(200).send("Like removido com sucesso!");
    }
}
