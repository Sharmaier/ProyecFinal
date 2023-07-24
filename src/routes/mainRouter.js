const express = require ("express");
const router = express.Router();
//
const mainController = require("../controllers/mainController.js")

//
router.get("/", mainController.objetivos);
router.get("/canciones", mainController.listado);
router.post("/canciones", mainController.crear);
router.get("/canciones/:idCancion", mainController.cancion);
router.put("/canciones/:idCancion", mainController.editar);
router.delete("/canciones/:idCancion", mainController.eliminar);
router.get("/generos", mainController.generos);

//

module.exports = router;