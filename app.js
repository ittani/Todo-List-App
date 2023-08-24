const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.set('view engine', 'ejs');

var items = ['Buy Food', 'Go shopping', 'Eat'];
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res) {
  var todays = new Date();
  var current = todays.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = todays.toLocaleDateString("en-US", options);

  res.render('list', { TodayFun: day , listItem: items});
});

app.post("/", function(req, res) {
   var item = req.body.todo;
 
   items.push(item);
   res.redirect("/");
});

app.listen(3000, function(req, res) {
  console.log("The server is listening on port 3000");
});
