import { Like } from "../caso-de-uso/like.js";

export class FavoriteTweetController{
    async handle(req, res){
        const idTweet = req.params.tweetId;
        await new Like().adicionar(idTweet);
        return res.status(200).send("Like adicionado com sucesso!");
    }
}