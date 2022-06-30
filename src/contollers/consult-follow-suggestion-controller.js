import { ConsultFollowSuggestion } from "../caso-de-uso/consult-follow-suggestion.js";

export class ConsultFollowSuggestionController {
    async handle(req, res) {
        const followSuggestion = await new ConsultFollowSuggestion().consult();
        return res.json({ followSuggestion });
    }
}
