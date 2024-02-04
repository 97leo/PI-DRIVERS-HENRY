const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
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
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // El apellido no puede estar vacío
        len: [1, 255], 
      },
    },
    descripción: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true, // La descripción no puede estar vacía
      },
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // La URL de la imagen no puede estar vacía
        isURL: true, // Validación para asegurarse de que sea una URL válida
      },
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // La nacionalidad no puede estar vacía
      },
    },
    fechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true, // Validación para asegurarse de que sea una fecha válida
      },
    },
  },{ 
    timestamps: false 
 });
};