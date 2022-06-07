import { Retweetar } from "../caso-de-uso/retweetar.js";

export class RetweetarController {
    async handle(req, res) {
        const idTweet = req.params.tweetId;
        await new Retweetar().adicionar(idTweet);
        return res.status(200).send("Retweet adiciona com sucesso!");
    }
}
