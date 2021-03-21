import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token was not provided" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        req.userId = payload.id;
        return next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid Token" });
    }
};
