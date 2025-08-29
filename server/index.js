const express = require("express");
const cors = require("cors");
const knex = require("knex")(require("./knexfile.js")[process.env.NODE_ENV||"development"]);

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => res.status(200).send("API is up"));
app.get('/movies', (req,res) => {
  knex.select("*").from("favorites")
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).send("404 - Not found"));
});

app.post('/movies', (req,res) => {
  res.status(501).send("501 - Not Implemented");
})

app.delete('/movies', (req,res) => {
  res.status(501).send("501 - Not Implemented");
})

app.patch('/movies', (req,res) => {
  res.status(501).send("501 - Not Implemented");
})

app.listen(port,()=> console.log(`Listening on port ${port}`));