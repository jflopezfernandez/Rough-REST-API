
const EXIT_FAILURE = 1;

const express    = require("express");
const mongoose   = require("mongoose");

const app  = express();
const db   = mongoose.connect("mongodb://localhost/API");
const Book = require("./models/Book");

const DEFAULT_PORT = 3000;

// Reference 'db' for now to prevent triggering an error in eslint
if (db) { process.exit(EXIT_FAILURE); }

app.use(express.static(__dirname + "/public"));
app.set("view engine", "handlebars");

const router = express.Router();

router.route("/Books")
    .get((request, response) => {
        Book.find((error, books) => {
            if (error) {
                response.status(500).send(error);
            } else {
                response.json(books);
            }
        });
    });

app.use("/api", router);

app.get("/", (request, response) => {
    response.send("Welcome to my API!");
});

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, (request, response) => {
    response.status(500).send(response);
});
