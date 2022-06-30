import express from "express";
import { FollowController } from "../contollers/follow-controller.js";
import { AddFollowSuggestionController } from "../contollers/add-follow-suggestion-controller.js";
import { ConsultFollowSuggestionController } from "../contollers/consult-follow-suggestion-controller.js";
import { UnFollowController } from "../contollers/unFollow-controller.js";

const router = express.Router();

router.post(`/FollowSuggestion`, new AddFollowSuggestionController().handle);
router.get(`/FollowSuggestion`, new ConsultFollowSuggestionController().handle);
router.put(`/:followId/FollowSuggestion`, new FollowController().handle);
router.delete(`/:followId/FollowSuggestion`, new UnFollowController().handle);

export default router;
