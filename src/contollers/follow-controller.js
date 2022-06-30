import { AddFollow } from "../caso-de-uso/add-follow.js";

export class FollowController {
    async handle(req, res) {
        await new AddFollow().follow(req.params.followId);
        res.status(201).send("Sugestão de seguir adicionada com sucesso!");
    }
}
