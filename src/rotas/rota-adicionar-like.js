import express from "express";
import { AdicionarLike } from "../caso-de-uso/adicionar-like.js";

const router = express.Router();
const routeName = "AddLike";

router.post(`/${routeName}`, async (req, res) => {
    const data = req.body;
    const adicionadoLike = await new AdicionarLike().executar(data);
    res.status(200);
});

export default router;
