const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
//const driverImg = require('../imagenes/imagenPorDefault/server/src/imagenes/imagenPorDefault/driverImg.jpg');

const getDrivers = async () => {

    const drivers = (await axios(URL)).data;
     
    if(drivers && drivers.length > 0) {
        const driversMap = await drivers.map(driver => ({
            nombre: driver.name.forename,
            apellido: driver.name.surname,
            descripción: driver.description,
            nacionalidad:driver.nationality,
            fechaDeNacimiento: driver.dob,
            teams: driver.teams,
            imagen: driver.image
           // ? driver.image : driverImg
            }));
            return driversMap
    }
}

module.exports = getDrivers;

