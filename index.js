import express from "express";
import criarComentario from "./src/rotas/rota-criar-comentario.js";
import consultarComentarios from "./src/rotas/rota-consultar-comentarios.js.js";
import { conectarMongo } from "./mongo.js";
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.listen(3006, () => {
    conectarMongo().then(async () => {
        console.log("Server is running on port 3005");

        app.use("/api/twitter", criarComentario);
        app.use("/api/twitter", consultarComentarios);
    });
});
