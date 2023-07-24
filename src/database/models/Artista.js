module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(45)
        },
        apellido: {
            type: dataTypes.STRING(45)
        }
    };
    let config = {
        tableName: "artistas",
        timestamps: false
    };
    const Artista = sequelize.define(alias, cols, config);
    return Artista;
}