import express from "express";
import { CriarComentario } from "../caso-de-uso/criar-comentario.js";

const router = express.Router();
const routeName = "createComment";

const middleware = (req, res, next) => {
    const requieredFields = ["imageURL", "comentario"];
    const missingField = requieredFields.filter((field) => !(field in req.body));
    if (missingField.length) {
        res.status(400).json({
            status: 400,
            message: "Os campos abaixo não foram informados",
            fields: missingField,
        });
    }
    const camposVazios = requieredFields.filter((field) => req.body[field] === "");
    if (camposVazios.length) {
        res.status(400).json({
            status: 400,
            message: "Os campos abaixo não podem ser vazios",
            fields: camposVazios,
        });
    }
    next();
};

router.post(`/${routeName}`, middleware, async (req, res) => {
    const request = req.body;
    const comentarioCriado = await new CriarComentario().executar(request);

    res.status(201).send("Comentário Criado");
});

export default router;
