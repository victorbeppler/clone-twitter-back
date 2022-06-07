import express from "express";
import { Like } from "../caso-de-uso/like.js";


const router = express.Router();
const routeName = "removeLikeTweet";

router.post(`/${routeName}`, async (req, res) => {
    const data = req.body;
    const likeRemovido = await new Like().remover(data);
    return res.status(200).send("Like removido com sucesso!");
});

export default router;
