import { AddFollow } from "../caso-de-uso/add-follow.js";

export class UnFollowController {
    async handle(req, res) {
        await new AddFollow().unFollow(req.params.followId);
        res.status(201).send("Sugestão de seguir removida com sucesso!");
    }
}
