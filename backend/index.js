// Importation
// --

require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { connection } = require('./database/init');
const { all } = require('./routes/all');
const { create } = require('./routes/create');


// Variables & Startup 
// --

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors(corsOptions));

app
  .listen(port, () => {
    console.log(`Gestion de l'application 'Excuses De Dev' démarré sur le port ${port}.`);
  })
  .on("error", (err) => {
    if (err.errno === "EADDRINUSE") {
      console.log(
        `----- Port ${port} is busy, trying with port ${port + 1} -----`
      );
      port += 1;
      serverInstance.listen(...[port, ...args.slice(1, lastArgIndex)]);
    } else {
      console.log(err);
    }
});


// Routes
// --

// Route par défaut
app.get("/", (req, res, next) => res.json("Gestion de l'applicaton 'Excuses de Dev'."))

// Route pour avoir la liste de toutes les excuses.
app.get("/all", all)

// Route pour créer une nouvelle excuse.
app.post("/create", create)