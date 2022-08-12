const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.js");

authRouter.route("/signup").post(authController.signup);
authRouter.route("/login").post(authController.login);
authRouter.route("/getAllUsers").get(authController.getAllUsers);
authRouter.route("/update").patch(authController.update);
authRouter.route("/delete").delete(authController.deleteUser);

module.exports = authRouter;