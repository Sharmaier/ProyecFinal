//
const express = require('express');
const app = express();
const path = require('path');
//
const mainRouter = require("./src/routes/mainRouter.js")
//
app.use ("/", mainRouter);
//
app.listen(3400, () => 
    console.log ("Servidor corriendo en el puerto http://localhost:3400")
)