const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const PORT = 3000;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })

} catch (error) {
    console.log("Server error", error)
}


app.get("/", (req, res) => {
    try {
        res.json("HOMEPAGE");
    } catch (error) {
        res.json({ error: "API Error" });
    }
})