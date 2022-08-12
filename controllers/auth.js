const User = require("../models/users");

const signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        if (!username && !email && !password) {
            throw new Error("Data not provided");
        }

        email = email.toLowerCase();

        // for password encryption
        // password = md5(password)

        const userCheck = await User.findOne({ email }).lean().exec();

        if (userCheck) {
            throw new Error("User already exist");
        }

        const user = await User.create({ username, email, password });

        res.json(user);

    } catch (error) {
        res.json({ error: "Invalid data" })
    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email && !password) {
            throw new Error("Data not provided");
        }

        email = email.toLowerCase();

        const userCheck = await User.findOne({ email }).lean().exec();

        if (!userCheck) {
            throw new Error("User not exist");
        }

        if (userCheck && (String(userCheck.password) !== String(password))) {
            throw new Error("Password not matched");
        }

        res.json("Successfully Logged in")


    } catch (error) {
        res.json({ error: "Invalid data" })
    }
}


const getAllUsers = async (req, res) => {
    try {

        const users = await User.find();
        res.json(users)

    } catch (error) {
        res.json({ error: "API Error" })
    }
}

const update = async (req, res) => {
    try {

        let { username, email, password } = req.body;

        if (!email) {
            throw new Error("Email not provided");
        }

        email = email.toLowerCase();

        const userCheck = await User.findOne({ email }).lean().exec();

        if (!userCheck) {
            throw new Error("User not exist");
        }

        let query = {}

        if (username) { query.username = username }
        if (password) { query.password = password }

        const users = await User.updateOne({ _id: userCheck._id }, query);
        res.json(users)

    } catch (error) {
        res.json({ error: "Invalid Data" })
    }
}

const deleteUser = async (req, res) => {
    try {
        let { email } = req.body;

        if (!email) {
            throw new Error("Email not provided");
        }
        email = email.toLowerCase();

        const userCheck = await User.findOne({ email }).lean().exec();

        if (!userCheck) {
            throw new Error("User not exist");
        }

        await User.deleteOne({ email });

        res.json("User deleted Successfully");


    } catch (error) {
        res.json({ error: "API error" })
    }
}



module.exports = {
    signup,
    login,
    getAllUsers,
    update,
    deleteUser
}