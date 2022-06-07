import { Tweet } from "../caso-de-uso/tweet.js";

export class ConsultTweetController {
    async handle(req, res) {
        const tweet = await new Tweet().consultar();
        res.json({ tweet });
    }
}
