const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const { Driver, Team } = require('../db');
const { Op } = require('sequelize');

const getDriverByName = async (name) => {
  console.log('Entró en la función getDriverByName con el nombre:', name);

  if (name) {
    const { data } = await axios(`${URL}`);
    console.log('Datos de la API:', data);

    let filteredData = await data.filter(driver =>
      driver.name.forename.toLowerCase().includes(name.toLowerCase()) ||
      driver.name.surname.toLowerCase().includes(name.toLowerCase())
    );
    console.log('Datos filtrados:', filteredData);

    filteredData = filteredData.slice(0, 15);
    console.log('Datos filtrados limitados a 15:', filteredData);

    if (filteredData.length === 15) {
      const driver = filteredData.map(data => (
        {
          nombre: data.name.forename,
          apellido: data.name.surname,
          descripción: data.description,
          nacionalidad: data.nationality,
          fechaDeNacimiento: data.dob,
          imagen: data.image
        }
      ));
      console.log('Conductores encontrados en la API:', driver);

      return driver;
    }
  } else {
    const dbDrivers = await Driver.findAll({
      where: {
        [Op.or]: [
          {
            'name.forename': {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            'name.surname': {
              [Op.iLike]: `%${name}%`,
            },
          },
        ],
      },
      include: Team,
      limit: 15,
    });
    console.log('Conductores encontrados en la base de datos:', dbDrivers);

    if (dbDrivers.length === 15) return dbDrivers;
  }
};

module.exports = getDriverByName;