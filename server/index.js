// -------- Express Setup & Config -----------
const express = require("express");
const cors = require("cors");
const knex = require("knex")(require("./knexfile.js")[process.env.NODE_ENV||"development"]);

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// ------ Server Start and Home --------
app.listen(port,()=> console.log(`Listening on port ${port}`));
app.get('/', (req,res) => res.status(200).send("API is up"));

// ------ Main Movies Endpoint --------
app.get('/movies', (req,res) => {
  knex.select("*").from("favorites")
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).send("404 - Not Found"));
});

app.post('/movies', (req,res) => {
  const body = req.body;
  if( Object.keys(body).length != 3){
    res.status(400).send("400 - Bad Request: Too many parameters")
  } else if( !body.hasOwnProperty("title") || !body.hasOwnProperty("main_character") || !body.hasOwnProperty("year_released")){
    res.status(400).send("400 - Bad Request: Missing Parameters");
  } else if( typeof body.title != 'string' || typeof body.main_character != 'string' || typeof body.year_released != 'number' ){
    res.status(400).send("400 - Bad Request: Malformed Data");
  } else {
    knex('favorites').insert(body)
    .then(() => res.status(201).send(`Movie ${body.title} has been added`));
  }
})

app.delete('/movies', (req,res) => res.status(405).send("405 - Not Supported"));
app.patch('/movies', (req,res) => res.status(405).send("405 - Not Supported"));
app.put('/movies', (req,res) => res.status(405).send("405 - Not Supported"));


// ----- Movies by ID Endpoint ------
app.get('/movies/:id_or_name', (req,res) => {
  const id_or_name = req.params.id_or_name;
  knex.select("*").from("favorites").where("fav_id","=",id_or_name)
  .then(data => res.status(200).json(data))
  .catch(err => {
    knex.select("*").from("favorites").where("title","=",id_or_name)
    .then(data => data.length <= 0 ? res.status(404).send("404 - Does not exist") : res.status(200).json(data))
    .catch(err => res.status(404).send("404 - Not Found"));
  });
})