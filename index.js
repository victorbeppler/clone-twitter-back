import express from "express";
import favorite from "./src/rotas/rota-favorite.js";
import retweet from "./src/rotas/rota-retweet.js";
import tweet from "./src/rotas/rota-tweet.js";
import comment from "./src/rotas/rota-comment.js";
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

        app.use("/api/twitter", tweet);
        app.use("/api/twitter", favorite);
        app.use("/api/twitter", retweet);
        app.use("/api/twitter", comment);
    });
});
