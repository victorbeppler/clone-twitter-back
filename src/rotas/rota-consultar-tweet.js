import express from "express";
import { ConsultaComentarios } from "../caso-de-uso/consulta-comentarios.js.js";

const router = express.Router();
const routeName = "tweet";

router.get(`/${routeName}`, async (req, res) => {
    const tweet = await new ConsultaComentarios().executar();
    res.json( {tweet} );
});

export default router;
