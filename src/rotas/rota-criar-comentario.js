import express from "express";
import { CriarComentario } from "../caso-de-uso/criar-comentario.js";

const router = express.Router();
const routeName = "createComment";

router.post(`/${routeName}`, async (req, res) => {
    const request = req.body;
    const comentarioCriado = await new CriarComentario().executar(request);
    
    res.status(201).send("Comentário Criado");
});

export default router;
