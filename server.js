var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// require('./public/assets/js/index');

// var newNote;
// var notes = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(note);
  });

app.post("/api/notes", function(req, res) {
  // activeNote = req.body;
  console.log(newNote);

})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });

    