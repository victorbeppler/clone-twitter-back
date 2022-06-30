import { AddFollowSuggestion } from "../caso-de-uso/add-follow-suggestion.js";


export class AddFollowSuggestionController {
    async handle(req, res) {
        const follow = await new AddFollowSuggestion().criar(req.body);
        res.status(201).send("Sugestão de seguir adicionada com sucesso!");
    }
}
