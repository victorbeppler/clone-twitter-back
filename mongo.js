import { config } from "dotenv";
import mongoose from "mongoose";
config();

export async function conectarMongo() {
    await mongoose.connect(
        "mongodb+srv://root:maninho10@twitter.dwn69wa.mongodb.net/twitter?retryWrites=true&w=majority"
    );
    console.log("Conectado ao MongoDB");
}
