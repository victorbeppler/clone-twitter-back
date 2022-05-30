import express from "express";
import criarComentario from "./src/rotas/rota-criar-comentario.js";
import { conectarMongo } from "./mongo.js";
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.listen(3005, () => {
    conectarMongo().then(async () => {
        console.log("Server is running on port 3005");

        app.use("/api/twitter", criarComentario);
    });
});
