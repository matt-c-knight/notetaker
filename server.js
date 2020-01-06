var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
var fs = require("fs");
var newNote; 
var notes = [];
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
  fs.readFilesync('./db.json', 'utf8', function(err, data) {
   data = JSON.parse(data);
   console.log(data);
   res.end(JSON.stringify(data));
    
  })
})

app.get("/api/notes/:id", function(req, res) {
  var chosen = req.params.id;

  console.log(chosen);
})

app.post("/api/notes", function(req, res) {
   newNote = req.body;
  // console.log(newNote);
  notes.push(newNote);
  // console.log(notes[1])
  var data = JSON.stringify(newNote, null, 2);
  fs.appendFileSync('db.json', data, (err) => {
    if (err) throw err;
    console.log('data written to file')
  });

})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });

    