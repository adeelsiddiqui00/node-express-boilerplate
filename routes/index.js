const express = require("express");
const routes = express.Router();
const authRouter = require("./auth");

routes.get("/", (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.json({ error: "API Error" });
    }
})

routes.use("/auth", authRouter);

routes.all("/*", (req, res) => {
    try {
        res.render('404');
    } catch (error) {
        res.json({ error: "API Error" });
    }
})


module.exports = routes;