const express = require("express");
const app = express();
const config = require("./config.json");
const routes = require("./routes");
const session = require("express-session");
const cors = require("cors");
const database = require("./helpers/dbconnect.js");
const http = require("http").createServer(app);

database.checkDbExists();

app.use(
    cors({
        origin: ["http://localhost:3000", "http://lajungle.antoinedespres.fr", "https://lajungle.netlify.app"],
        credentials: true,
    })
);

app.use(
    session({
        secret: "TODO",
        cookie: {
            maxAge: 60000 * 60 * 24,
        },
        resave: false,
        saveUninitialized: false,
        name: "msft-auth",
    })
);

app.use(express.json());
app.use("/api", routes);

http.listen(config.express.PORT, () => {
    console.log(`LaJungle API is listening on port ${config.express.PORT}`);
});