const express = require("express");
const app = express();
require("dotenv").config();
const bodyparser = require("body-parser");
const env = process.env;
const PORT = env.PORT;
const routes = require("./routes/index");
const dbConnection = require("./database/connection");

try {
    app.listen(PORT, async () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        if (!dbConnection) {
            console.log("DB is not connected");
        }
        else {
            await dbConnection();
            console.log("DB is connected");
        }

    })

} catch (error) {
    console.log("Server error", error)
}

app.set("view engine", 'pug');
app.use(bodyparser.json());
app.use(routes);

