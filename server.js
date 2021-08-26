// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();



// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(cookieSession({
  name: 'sessionBant',
  keys: ['thewayisagreatsongaboutroadasisstedsuicide','P4bWnjki8842&lM']
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const titlesRoutes = require('./routes/titles');
const storyRoutes = require('./routes/story');
const createStoryRoute = require('./routes/createStory');
const createContributionRoutes = require('./routes/createContribution');
const loginRoutes = require('./routes/login');
const upvoteInfoRoutes = require('./routes/upvoteInfoRequest');
const addContributionRoutes = require('./routes/addContribution')
//const upvoteRoutes = require('./routes/upvote');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/titles", titlesRoutes(db));
app.use("/api/:story", storyRoutes(db));
app.use("/api/upvote", upvoteInfoRoutes(db));
app.use("/create", createStoryRoute(db));
app.use("/:story/contribute", createContributionRoutes(db));
app.use("/login", loginRoutes(db));
//app.use("/upvote", upvoteRoutes(db));
//app.use("/:upvote/edit", upvoteRoutes(db));
app.use("/add/:story/:contribute", addContributionRoutes(db));

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
