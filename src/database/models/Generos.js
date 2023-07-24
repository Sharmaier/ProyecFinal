module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45)
        }
    };
    let config = {
        tableName: "generos",
        timestamps: false
    };

    const Genero = sequelize.define(alias, cols, config);
    Genero.associate = (modelos) => {
        Genero.hasMany(modelos.Canciones, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }
    return Genero;
}