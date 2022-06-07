import express from "express";
import { Tweet } from "../caso-de-uso/comentarios.js";

const router = express.Router();
const routeName = "createTweet";

const middleware = (req, res, next) => {
    const requieredFields = ["imageURL", "descricaoTweet"];
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
    const comentarioCriado = await new Tweet().criar();
    res.status(201).send("Comentário Criado");
});

export default router;
