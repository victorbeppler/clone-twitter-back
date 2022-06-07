import express from "express";
import { Retweetar } from "../caso-de-uso/retweetar.js";


const router = express.Router();
const routeName = "removeRetweet";

router.post(`/${routeName}`, async (req, res) => {
    const idTweet = req.body.idTweet;
    const tweetRetweetado = await new Retweetar().remover(idTweet);
    return res.status(200).send("Retweet removido com sucesso!");
});

export default router;
