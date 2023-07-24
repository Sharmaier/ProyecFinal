module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(45)
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "albumes",
        timestamps: false
    };
    const Album = sequelize.define(alias, cols, config);
    return Album;
}