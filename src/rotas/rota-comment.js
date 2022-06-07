import express from "express";
import { CommentTweetContoller } from "../contollers/comment-tweet-controller.js";

const router = express.Router();

router.post(`/tweets/:tweetId/comment`, new CommentTweetContoller().handle);

export default router;
