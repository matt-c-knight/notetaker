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
var num = 1;
// require('./public/assets/js/index');

// var newNote;
// var notes = [];
// var to start id , function to add ID to object


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
  fs.readFileSync('./db.json', 'utf8', function(err, data) {
   data = JSON.parse(data);
   console.log(data);
   res.end(JSON.stringify(data));
    
  })
})

app.get("/api/notes/:id", function(req, res) {
  var chosen = req.params.id;
  console.log(chosen)
  // fs.readFileSync('./db.json', 'utf8', function(err, data) {
  //   data = JSON.parse(data);
  //  res.end(JSON.stringify(data));
  //  console.log(data);
  // })

})

app.post("/api/notes", function(req, res) {
   newNote = req.body;
   newNote.id = num;

  // console.log(newNote);
  notes.push(newNote);
  console.log(notes)
  var data = JSON.stringify(notes, null, 2);
  fs.writeFileSync('db.json', data, (err) => {
    if (err) throw err;
    console.log('data written to file')
  });
num++;
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });

    