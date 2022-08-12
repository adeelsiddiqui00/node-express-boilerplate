const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = 3000;
const routes = require("./routes/index");

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })

} catch (error) {
    console.log("Server error", error)
}

app.set("view engine",'pug');
app.use(bodyparser.json());
app.use(routes);