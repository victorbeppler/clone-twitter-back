export class CreateTweetMiddleware {
    async handle(req, res, next) {
        const requieredFields = ["imageURL", "descricaoTweet"];
        const missingField = requieredFields.filter((field) => !(field in req.body));
        if (missingField.length) {
            res.status(400).json({
                status: 400,
                message: "Os campos abaixo não foram informados",
                fields: missingField,
            });
        }
        const camposVazios = requieredFields.filter((field) => req.body[field] === "");
        if (camposVazios.length) {
            res.status(400).json({
                status: 400,
                message: "Os campos abaixo não podem ser vazios",
                fields: camposVazios,
            });
        }
        next();
    }
}
