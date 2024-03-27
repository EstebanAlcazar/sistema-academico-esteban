"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const lecciones = sequelize.define(
    "leccion",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model: "profesores",
          key: "id",
        }
      },
      fk_leccion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model: "profesores",
          key: "carrera_id",
        }
      }
    },
    {
      timestamps: false,
      tableName: "lecciones",
    }
  );

  lecciones.getProfesores = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  lecciones.associate = function (models) {
    lecciones.hasMany(models.lecciones, {
      foreignKey: "fk_leccion",
      as: "lecciones",
    });
  };

  return lecciones;
};
