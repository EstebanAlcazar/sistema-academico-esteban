"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
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
      fk_usuario: {
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
      tableName: "usuario",
    }
  );

  usuario.getProfesores = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  usuario.associate = function (models) {
    usuario.hasMany(models.materias, {
      foreignKey: "fk_materia",
      as: "materias",
    });
  };

  return usuario;
};
