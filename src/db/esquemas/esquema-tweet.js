import mongoose from "mongoose";

const esquemaTweet = new mongoose.Schema({
    imageURL: String,
    comentario: String,
    likes: Number,
});

export const DbTweet = mongoose.model("tweet", esquemaTweet);
