// LES IMPORTS
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


// ROUTES
//const routerAdmin = require('./routes/routes.admin');


//VARIABLE D'ENVIRONNEMENT
dotenv.config({ path: "process.env" });
const database = process.env.DATA_BASE; 

mongoose
  .connect(`mongodb://127.0.0.1/kania`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("====================================");
    console.log("connexion a mongodb réussie!");
    console.log("====================================");
  })
  .catch((err) =>
    console.log(err, "impossible de se connecter vérifie et réessaie")
  );


 
module.exports = app;