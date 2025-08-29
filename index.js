const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const knex = require("knex")(require("./knexfile")[process.env.NODE_ENV||"development"]);
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
  res.status(200).send("API is running")
});
app.get("/movies", (req,res) => {
  knex.select("*").from("favorites")
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json({message: "Could not find resource"}))
});

app.listen(port, ()=>{`Listening on http://localhost:${port}`});