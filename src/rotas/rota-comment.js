import express from "express";
import { CommentTweetContoller } from "../contollers/comment-tweet-controller.js";
import { CommentRemoveTweetContoller } from "../contollers/remove-comment-tweet-controller.js";

const router = express.Router();

router.post(`/tweets/:tweetId/comment`, new CommentTweetContoller().handle);
router.delete(`/tweets/:tweetId/comment`, new CommentRemoveTweetContoller().handle);

export default router;
