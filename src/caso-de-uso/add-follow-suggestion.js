import { FollowSuggestionRepositorio } from "../db/repositorio/follow-suggetion-repositorio.js";

export class AddFollowSuggestion{
    async criar(data) {
        return await new FollowSuggestionRepositorio().salvar(data);
    }
}