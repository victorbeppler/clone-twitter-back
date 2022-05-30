export class TweetModel {
    constructor(data) {
        this.imageURL = data.imageURL;
        this.comentario = data.comentario;
        this.likes = 0;
    }
}
