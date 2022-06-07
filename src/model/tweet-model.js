export class TweetModel {
    constructor(data) {
        this.imageURL = data.imageURL;
        this.descricaoTweet = data.descricaoTweet;
        this.likes = data.likes || 0;
        this.date = data.date;
        this.comentarios = data.comentarios || [];
        this.retweets = data.retweets || 0;
        this.comments = data.comments || 0;
    }
}
