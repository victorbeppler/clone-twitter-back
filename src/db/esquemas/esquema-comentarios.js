import mongoose from "mongoose";

const esquemaComentarios = new mongoose.Schema({
    imageURL: String,
    comentario: String,
    likes: Number,
});

export const DbComentario = mongoose.model("comentarios", esquemaComentarios);
