import express from "express";
import { ConsultaComentarios } from "../caso-de-uso/consulta-comentarios.js.js";

const router = express.Router();
const routeName = "AddLike";

router.get(`/${routeName}`, async (req, res) => {
    const comentario = await new ConsultaComentarios().executar();
    
    res.status(200).json(comentario);
});

export default router;
