import { Tweet } from "../caso-de-uso/tweet.js";

export class TweetController {
    async handle(req, res) {
        const request = req.body;
        await new Tweet().criar(request);
        res.status(201).send("Tweet adicionado com sucesso!");
    }
}
