"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const secciones = sequelize.define(
    "secciones",
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
      fk_seccion: {
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
      tableName: "secciones",
    }
  );

  secciones.getProfesores = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  secciones.associate = function (models) {
    secciones.hasMany(models.materias, {
      foreignKey: "fk_materia",
      as: "materias",
    });
  };

  return secciones;
};
