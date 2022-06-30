import mongoose from "mongoose";

const schemaFollowSuggestion = new mongoose.Schema({
    imageURL: String,
    nickname: String,
    name: String,
    status: Boolean,
});

export const DbFollowSuggestion = mongoose.model("follow-suggestion", schemaFollowSuggestion);
