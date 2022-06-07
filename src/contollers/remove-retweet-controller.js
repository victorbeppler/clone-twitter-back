import { Retweetar } from "../caso-de-uso/retweetar.js";

export class RemoveRetWeetController {
    async handle(req, res) {
        const idTweet = req.params.tweetId;
        const tweetRetweetado = await new Retweetar().remover(idTweet);
        return res.status(200).send("Retweet removido com sucesso!");
    }
}
