import express from "express";
import { Retweetar } from "../caso-de-uso/retweetar.js";


const router = express.Router();
const routeName = "comment";

router.post(`/${routeName}`, async (req, res) => {
    const idTweet = req.body.idTweet;
    const tweetRetweetado = await new Retweetar().adicionar(idTweet);
    return res.status(200).send("Retweet adiciona com sucesso!");
});

export default router;
