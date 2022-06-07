import express from "express";
import { Like } from "../caso-de-uso/like.js";

const router = express.Router();
const routeName = "likeTweet";

router.post(`/${routeName}`, async (req, res) => {
    const data = req.body;
    const adicionadoLike = await new Like().adicionar(data);
    return res.status(200).send("Like adicionado com sucesso!");
});

export default router;
