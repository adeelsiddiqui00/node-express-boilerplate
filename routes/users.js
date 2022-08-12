const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/users");
const authVerify = require('../middlewares/auth');

usersRouter.route("/signup").post(usersController.signup);
usersRouter.use(authVerify).route("/getAllUsers").get(usersController.getAllUsers);
usersRouter.use(authVerify).route("/update").patch(usersController.update);
usersRouter.use(authVerify).route("/delete").delete(usersController.deleteUser);
usersRouter.use(authVerify).route("/login").post(usersController.login);

module.exports = usersRouter;