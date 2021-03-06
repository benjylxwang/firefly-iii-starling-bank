var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("axios-debug-log");

var indexRouter = require("./routes/index");
var refreshRouter = require("./routes/sync");
var starlingRouter = require("./routes/starling");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set token on request
app.use((req, res, next) => {
  let token = global.secrets.PERSONAL_ACCESS_TOKENS[0].token;
  if (req.params.account) {
    for (let account of global.secrets.PERSONAL_ACCESS_TOKENS) {
      if (account.name === req.params.account) {
        token = account.token;
      }
    }
  }
  req.token = token;
  next();
});

app.use("/", indexRouter);
app.use("/sync", refreshRouter);
app.use("/starling", starlingRouter);

module.exports = app;
