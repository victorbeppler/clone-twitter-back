import express from "express";
import { RemoveRetWeetController } from "../contollers/remove-retweet-controller.js";
import { RetweetarController } from "../contollers/add-retweet-controller.js";

const router = express.Router();

router.post(`/tweets/:tweetId/retweets`, new RetweetarController().handle);
router.delete(`/tweets/:tweetId/retweets`, new RemoveRetWeetController().handle);

export default router;
