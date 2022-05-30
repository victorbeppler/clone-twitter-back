import express from "express";
import { ConsultaComentarios } from "../caso-de-uso/consulta-comentarios.js.js";

const router = express.Router();
const routeName = "Comments";

router.get(`/${routeName}`, async (req, res) => {
    const comentario = await new ConsultaComentarios().executar();
    // const comentariosFormmated = JSON.parse(comentario);
    // console.log(comentariosFormmated);
    res.json({ comentario });
});

export default router;
