const express = require('express');
const bodyParser = require('body-parser');

// Set port to the environment port or set to 8080
const PORT = process.env.PORT || 8080;

// Create an instance of express
const app = express();

// Set the public repo as static for front-end
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

// Run handlebars engine on the "main" page
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Use our controller routes for this app instance
var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});