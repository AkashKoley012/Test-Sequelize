const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const db = require("./models");

const user = require("./routes/user");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user);

app.use("/", (req, res) => {
    return res.status(404).json({ message: "page not found" });
});

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("Server listening on https://test-sequelize-production.up.railway.app/");
    });
});
