import mongoose from "mongoose";

const esquemaTweet = new mongoose.Schema({
    imageURL: String,
    descricaoTweet: String,
    likes: Number,
    date: String,
    comentarios: Object,
    retweets: Number,
    comments: Number,
});

export const DbTweet = mongoose.model("tweet", esquemaTweet);
