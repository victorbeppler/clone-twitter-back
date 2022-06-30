import { FollowSuggestionRepositorio } from "../db/repositorio/follow-suggetion-repositorio.js";
import { FollowSuggestion } from "../model/follow-suggestion.js";

export class ConsultFollowSuggestion {
    async consult() {
        return await new FollowSuggestionRepositorio().consult();
    }
}
