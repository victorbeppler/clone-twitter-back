import express from "express";
import { Tweet } from "../caso-de-uso/comentarios.js";

const router = express.Router();
const routeName = "tweet";

router.get(`/${routeName}`, async (req, res) => {
    const tweet = await new Tweet().consultar();
    res.json({ tweet });
});

export default router;
