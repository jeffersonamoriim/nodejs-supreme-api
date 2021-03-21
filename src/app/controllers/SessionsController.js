import jwt from "jsonwebtoken";
import User from "../models/User";

class SessionsController {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(401).json({ error: "User not Found" });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: "Password not match" });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, process.env.JWT_KEY, {
                expiresIn: "7d",
            }),
        });
    }
}

export default new SessionsController();
