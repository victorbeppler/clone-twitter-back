import { config } from "dotenv";
import mongoose from "mongoose";
config();

const mongoURL = process.env.mongoURL;
export async function conectarMongo() {
    await mongoose.connect(mongoURL);
    console.log("Conectado ao MongoDB");
}
