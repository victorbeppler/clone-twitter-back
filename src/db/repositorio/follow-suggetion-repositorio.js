import { DbFollowSuggestion } from "../esquemas/follow-suggestion.js";

export class FollowSuggestionRepositorio {
    async salvar(data) {
        return await DbFollowSuggestion.insertMany(new DbFollowSuggestion(data));
    }
    async consult() {
        return await DbFollowSuggestion.aggregate([{$sample: {size: 3}}]);
    }
    async consultSpecificFollowSuggestion(id) {
        return await DbFollowSuggestion.findById(id);
    }
    async update(id,query) {
        return await DbFollowSuggestion.findByIdAndUpdate(id,query);
    }
}
