const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Team', {
    id: {
      type: DataTypes.UUID,//DataTypes.UUID => genero un identificador único utilizando números aleatorios
      defaultValue: DataTypes.UUIDV4,//DataTypes.UUIDV4 => para asignar automáticamente un UUID cuando se crea un nuevo registro
      primaryKey: true,
      allowNull: false,
      validate: {
        isUUID: 4, // Validación para asegurarse de que sea un UUID versión 4
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El nombre no puede estar vacío
        len: [1, 255], // Limita la longitud del campo entre 1 y 255 caracteres
      },
    },
  },{ 
    timestamps: false 
 });
};