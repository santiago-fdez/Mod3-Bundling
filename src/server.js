var express = require("express")
var app = express()
var db = require("./database.js")
const coursesRouter = require('./routes/courses');

var cors = require('cors');
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


app.use('/courses', coursesRouter);

// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

