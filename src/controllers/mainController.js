const path = require("path");
const fs = require ("fs");

//
const mainController = {
    listado: (req, res) => {
        res.send ("Lista de canciones con sus propiedades");
    },
    crear: (req, res) => {
        res.send ("Crear nuevo registro de una cancion");
    },
    cancion: (req, res) =>{
        res.send ("Mostrar cancion " + req.params.idCancion);
    },
    generos: (req, res) =>{
        res.send ("Mostrar listado de todos los géneros con sus canciones");
    }
}
//

module.exports = mainController;