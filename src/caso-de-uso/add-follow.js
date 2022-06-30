import { FollowSuggestionRepositorio } from "../db/repositorio/follow-suggetion-repositorio.js";

export class AddFollow {
    async follow(idFollowSuggestion) {
        const consultFollowSugestion = await new FollowSuggestionRepositorio().consultSpecificFollowSuggestion(
            idFollowSuggestion
        );
        if (consultFollowSugestion.status == false) {
            const query = { status: true };
            return await new FollowSuggestionRepositorio().update(idFollowSuggestion, query);
        }
    }
    async unFollow(idFollowSuggestion) {
        const consultFollowSugestion = await new FollowSuggestionRepositorio().consultSpecificFollowSuggestion(
            idFollowSuggestion
        );
        if (consultFollowSugestion.status == true) {
            const query = { status: false };
            return await new FollowSuggestionRepositorio().update(idFollowSuggestion, query);
        }
    }
}
