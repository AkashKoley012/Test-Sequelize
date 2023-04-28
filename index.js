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

app.get("/", (req, res) => {
    return res.send("<h1>Page not found</h1>");
});

db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("server started");
    });
});
