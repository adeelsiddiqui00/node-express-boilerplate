const jwt = require("jsonwebtoken");
const env = process.env;
const User = require("../models/users");

const auth = async (req, res, next) => {
    try {

        if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[1]) {
            const token = req.headers.authorization.split(" ")[1]
            const verified = await jwt.verify(token, env.JWT_SECRET_KEY, async (err, decode) => {
                if (err) throw new Error("Token not verified");

                const userCheck = await User.findOne({ _id: decode._id }).lean().exec();

                if (!userCheck) throw new Error("user not found");

                next();

            })
        }

    } catch (error) {
        res.json((401), { error: "Authorization error" });
    }
}

module.exports = auth;