import express from "express";
import { FavoriteTweetController } from "../contollers/favorite-tweet-controller.js";
import { RemoveFavoriteTweetController } from "../contollers/remove-favorite-tweet-controller.js";

const router = express.Router();

router.post(`/tweet/:tweetId/favorite`, new FavoriteTweetController().handle);
router.delete(`/tweet/:tweetId/favorite`, new RemoveFavoriteTweetController().handle);

export default router;
