import express from "express";
import { ConsultTweetController } from "../contollers/consult-tweet-controller.js";
import { TweetController } from "../contollers/tweet-controller.js";
import { CreateTweetMiddleware } from "../middleware/create-tweet-middleware.js";

const router = express.Router();

router.post(`/tweets`, new CreateTweetMiddleware().handle, new TweetController().handle);
router.get(`/tweets`, new ConsultTweetController().handle);

export default router;
