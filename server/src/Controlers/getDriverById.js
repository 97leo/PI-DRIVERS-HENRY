//const conductorImg = require('../imagen por default/driverImg.jpg');
const {Driver, Team} = require('../db');
const URL = 'http://localhost:5000/drivers';
const axios = require('axios');

const getDriverById = async (id) => {
// si el id tiene - significa que esta en la base de datos
    const validate = id.includes('-');
    if(validate){
        const data =  await Driver.findByPk(id, {
            include: Team, // Incluye los equipos asociados al conductor
          });
          return data;
} else{
// el driver esta en la api
 const {data} = await axios(`${URL}/${id}`);
 if(data && Object.keys(data).length > 0) {
    const driver = {
      nombre: data.name.forename,
      apellido: data.name.surname,
      descripción: data.description,
      nacionalidad: data.nationality,
      fechaDeNacimiento: data.dob,
      teams: data.teams,
      imagen: data.image.url
      ? data.image : conductorImg
    }
    return driver;
 }
}
}

module.exports = getDriverById;