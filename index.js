import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const allTodo = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { addTodo: allTodo });
});



app.post("/submit", (req, res) => {
    const newTodo = req.body["newTask"];
    allTodo.push(newTodo)
    // allTodo.unshift(newTodo)

    res.render("index.ejs", { addTodo: allTodo });
  });



  //if(typeof window !== "undefined"){
    
  // var check = document.querySelector('#myCheck');
  // check.addEventListener('click', function(ev) {
  //   if (ev.target.Id === 'LI') {
  //     ev.target.classList.toggle('checked');
  //   }
  // }, false);

//}



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });