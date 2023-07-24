const info = require("../data/objetivos.json")
const db = require("../database/models")
//const Op = db.Sequelize.Op
sequelize = db.sequelize
Sequelize = db.Sequelize

//
const mainController = {
    
    objetivos: (req, res) => {
        res.json(info)
    },
    listado: (req, res) => {
        db.Canciones.findAll({
            include: [
                {association: "genero"}
            ],
        })
        .then(canciones => {
            res.send(canciones)
        })
        .catch(error => {
            res.send(error)
        })
       },
    crear: (req, res) => {
        db.Canciones.create({
            titulo: req.params.titulo,
            duracion: req.params.duracion,
            genero_id: req.params.genero_id
        })
        .then(canciones => {
            res.redirect("/canciones")
            
        })
        .catch(error => {
            res.send(error)
        })
        //res.send ("Crear nuevo registro de una cancion");
    },
    cancion: (req, res) =>{
        db.Canciones.findByPk(req.params.idCancion)
        .then(cancion => {
            res.send(cancion)
        })
        .catch(error => {
            res.send(error)
        })
        //res.send ("Mostrar cancion " + req.params.idCancion);
    },
    editar: (req, res) =>{
        db.Canciones.update({
            titulo: req.params.titulo,
            duracion: req.params.duracion,
        },
        {
            where: {id: req.params.id}
        })
        .then(cancion => {
            res.send(cancion)
        })
        .catch(error =>{
            res.send(error)
        })
        console.log("editado")
        
    },
    eliminar: (req, res) =>{
        db.Canciones.destroy({
            where: {id: req.params.id}
        })
        .then(canciones =>{
            res.send(canciones)
        })
        .catch(error =>{
            res.send(error)
        })
        console.log("eliminado")
    },
    generos: (req, res) =>{
        db.Generos.findAll()
        .then(generos => {
            res.send(generos)
        })
        .catch(error => {
            res.send(error)
        })
    }
}
//

module.exports = mainController;