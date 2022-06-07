import express from "express";
import criarTweet from "./src/rotas/rota-criar-tweet.js";
import consultarTweet from "./src/rotas/rota-consultar-tweet.js";

import favorite from "./src/rotas/rota-favorite.js";
import retweet from "./src/rotas/rota-retweet.js";



import { conectarMongo } from "./mongo.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.listen(3006, () => {
    conectarMongo().then(async () => {
        console.log("Server is running on port 3006");

        app.use("/api/twitter", criarTweet);
        app.use("/api/twitter", consultarTweet);
        app.use("/api/twitter", favorite);
        app.use("/api/twitter", retweet);
    });
});
